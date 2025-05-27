import { Field, FieldContext, ListContext } from 'rc-field-form'
import type { FieldProps } from 'rc-field-form/lib/Field'
import type { InternalNamePath, Meta } from 'rc-field-form/lib/interface'
import useState from 'rc-util/lib/hooks/useState'
import { supportRef } from 'rc-util/lib/ref'
import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { FormLayout } from '..'
import devWarning from '../../_util/devWarning'
import { cloneElement } from '../../_util/reactNode'
import { ListItemProps } from '../../list/ListItem'
import type { FormInstance } from '../Form'
import type { FormItemLabelProps } from '../FormItemLabel'
import { FormContext, NoStyleItemContext } from '../context'
import useChildren from '../hooks/useChildren'
import useFormItemStatus from '../hooks/useFormItemStatus'
import useFrameState from '../hooks/useFrameState'
import useItemRef from '../hooks/useItemRef'
import { FormItemStyle, ValidateStatusStyle } from '../style/index'
import { getFieldId, toArray } from '../util'
import type { ItemHolderProps } from './ItemHolder'
import ItemHolder from './ItemHolder'
import StatusProvider from './StatusProvider'

const NAME_SPLIT = '__SPLIT__'

interface FieldError {
  errors: string[]
  warnings: string[]
}

const ValidateStatuses = [
  'success',
  'warning',
  'error',
  'validating',
  '',
] as const
export type ValidateStatus = typeof ValidateStatuses[number]

type RenderChildren<Values = any> = (
  form: FormInstance<Values>,
) => React.ReactNode
type RcFieldProps<Values = any> = Omit<FieldProps<Values>, 'children'>
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode

export type FeedbackIcons = (itemStatus: {
  status: ValidateStatus
  errors?: React.ReactNode[]
  warnings?: React.ReactNode[]
}) => { [key in ValidateStatus]?: React.ReactNode }

interface MemoInputProps {
  control: object
  update: any
  children: React.ReactNode
}

// https://github.com/ant-design/ant-design/issues/46417
// `getValueProps` may modify the value props name,
// we should check if the control is similar.
function isSimilarControl(a: object, b: object) {
  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  return (
    keysA.length === keysB.length &&
    keysA.every((key) => {
      const propValueA = (a as any)[key]
      const propValueB = (b as any)[key]

      return (
        propValueA === propValueB ||
        typeof propValueA === 'function' ||
        typeof propValueB === 'function'
      )
    })
  )
}

const MemoInput = React.memo(
  ({ children }: MemoInputProps) => children as React.ReactElement,
  (prev, next) =>
    isSimilarControl(prev.control, next.control) && prev.update === next.update,
)

export interface FormItemProps<Values = any>
  extends Omit<FormItemLabelProps, 'requiredMark' | 'styles'>,
    ListItemProps,
    RcFieldProps<Values> {
  noStyle?: boolean
  style?: StyleProp<ViewStyle>
  styles?: Partial<FormItemStyle & ValidateStatusStyle>
  wrapperStyle?: StyleProp<ViewStyle>
  layout?: FormLayout
  children?: ChildrenType<Values>
  help?: React.ReactNode
  hasFeedback?: boolean | { icons: FeedbackIcons }
  validateStatus?: ValidateStatus
  required?: boolean
  hidden?: boolean
  initialValue?: any
  messageVariables?: Record<string, string>
}

function genEmptyMeta(): Meta {
  return {
    errors: [],
    warnings: [],
    touched: false,
    validating: false,
    name: [],
    validated: false,
  }
}

function InternalFormItem<Values = any>(
  props: FormItemProps<Values>,
): React.ReactElement {
  const {
    name,
    noStyle,
    dependencies,
    shouldUpdate,
    rules,
    children,
    required,
    label,
    messageVariables,
    trigger = 'onChange',
    validateTrigger,
    hidden,
    help,
  } = props
  const { name: formName } = React.useContext(FormContext)

  const mergedChildren = useChildren(children)

  const isRenderProps = typeof mergedChildren === 'function'
  const notifyParentMetaChange = React.useContext(NoStyleItemContext)

  const { validateTrigger: contextValidateTrigger } =
    React.useContext(FieldContext)
  const mergedValidateTrigger =
    validateTrigger !== undefined ? validateTrigger : contextValidateTrigger

  const hasName = !(name === undefined || name === null)

  // ========================= Warn =========================
  devWarning(name !== null, 'Form.Item', '`null` is passed as `name` property')

  // ========================= MISC =========================
  // Get `noStyle` required info
  const listContext = React.useContext(ListContext)
  const fieldKeyPathRef = React.useRef<InternalNamePath>()

  // ======================== Errors ========================
  // >>>>> Collect sub field errors
  const [subFieldErrors, setSubFieldErrors] = useFrameState<
    Record<string, FieldError>
  >({})

  // >>>>> Current field errors
  const [meta, setMeta] = useState<Meta>(() => genEmptyMeta())

  const onMetaChange = (nextMeta: Meta & { destroy?: boolean }) => {
    // This keyInfo is not correct when field is removed
    // Since origin keyManager no longer keep the origin key anymore
    // Which means we need cache origin one and reuse when removed
    const keyInfo = listContext?.getKey(nextMeta.name)

    // Destroy will reset all the meta
    setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta, true)

    // Bump to parent since noStyle
    if (noStyle && help !== false && notifyParentMetaChange) {
      let namePath = nextMeta.name

      if (!nextMeta.destroy) {
        if (keyInfo !== undefined) {
          const [fieldKey, restPath] = keyInfo
          namePath = [fieldKey, ...restPath]
          fieldKeyPathRef.current = namePath
        }
      } else {
        // Use origin cache data
        namePath = fieldKeyPathRef.current || namePath
      }
      notifyParentMetaChange(nextMeta, namePath)
    }
  }

  // >>>>> Collect noStyle Field error to the top FormItem
  const onSubItemMetaChange: ItemHolderProps['onSubItemMetaChange'] = (
    subMeta,
    uniqueKeys,
  ) => {
    // Only `noStyle` sub item will trigger
    setSubFieldErrors((prevSubFieldErrors) => {
      const clone = {
        ...prevSubFieldErrors,
      }

      // name: ['user', 1] + key: [4] = ['user', 4]
      const mergedNamePath = [...subMeta.name.slice(0, -1), ...uniqueKeys]
      const mergedNameKey = mergedNamePath.join(NAME_SPLIT)

      if ((subMeta as any).destroy) {
        // Remove
        delete clone[mergedNameKey]
      } else {
        // Update
        clone[mergedNameKey] = subMeta
      }

      return clone
    })
  }

  // >>>>> Get merged errors
  const [mergedErrors, mergedWarnings] = React.useMemo(() => {
    const errorList: string[] = [...meta.errors]
    const warningList: string[] = [...meta.warnings]

    Object.values(subFieldErrors).forEach((subFieldError) => {
      errorList.push(...(subFieldError.errors || []))
      warningList.push(...(subFieldError.warnings || []))
    })

    return [errorList, warningList]
  }, [subFieldErrors, meta.errors, meta.warnings])

  // ===================== Children Ref =====================
  const getItemRef = useItemRef()

  // ======================== Render ========================
  function renderLayout(
    baseChildren: React.ReactNode,
    fieldId?: string,
    isRequired?: boolean,
  ): React.ReactNode {
    if (noStyle && !hidden) {
      return (
        <StatusProvider
          hasFeedback={props.hasFeedback}
          validateStatus={props.validateStatus}
          meta={meta}
          errors={mergedErrors}
          warnings={mergedWarnings}
          noStyle>
          {baseChildren}
        </StatusProvider>
      )
    }

    return (
      <ItemHolder
        key="row"
        {...props}
        fieldId={fieldId}
        isRequired={isRequired}
        errors={mergedErrors}
        warnings={mergedWarnings}
        meta={meta}
        onSubItemMetaChange={onSubItemMetaChange}>
        {baseChildren}
      </ItemHolder>
    )
  }

  if (!hasName && !isRenderProps && !dependencies) {
    return renderLayout(mergedChildren) as React.ReactElement
  }

  let variables: Record<string, string> = {}
  if (typeof label === 'string') {
    variables.label = label
  } else if (name) {
    variables.label = String(name)
  }
  if (messageVariables) {
    variables = { ...variables, ...messageVariables }
  }

  // >>>>> With Field
  return (
    <Field
      {...props}
      messageVariables={variables}
      trigger={trigger}
      validateTrigger={mergedValidateTrigger}
      onMetaChange={onMetaChange}>
      {(control, renderMeta, context) => {
        const mergedName =
          toArray(name).length && renderMeta ? renderMeta.name : []
        const fieldId = getFieldId(mergedName, formName)

        const isRequired =
          required !== undefined
            ? required
            : !!(
                rules &&
                rules.some((rule) => {
                  if (
                    rule &&
                    typeof rule === 'object' &&
                    rule.required &&
                    !rule.warningOnly
                  ) {
                    return true
                  }
                  if (typeof rule === 'function') {
                    const ruleEntity = rule(context)
                    return (
                      ruleEntity &&
                      ruleEntity.required &&
                      !ruleEntity.warningOnly
                    )
                  }
                  return false
                })
              )

        // ======================= Children =======================
        const mergedControl: typeof control = {
          ...control,
        }

        let childNode: React.ReactNode = null

        devWarning(
          !(shouldUpdate && dependencies),
          'Form.Item',
          "`shouldUpdate` and `dependencies` shouldn't be used together. See https://u.ant.design/form-deps.",
        )
        if (Array.isArray(mergedChildren) && hasName) {
          devWarning(
            false,
            'Form.Item',
            'A `Form.Item` with a `name` prop must have a single child element. For information on how to render more complex form items, see https://u.ant.design/complex-form-item.',
          )
          childNode = mergedChildren
        } else if (
          isRenderProps &&
          (!(shouldUpdate || dependencies) || hasName)
        ) {
          devWarning(
            !!(shouldUpdate || dependencies),
            'Form.Item',
            'A `Form.Item` with a render function must have either `shouldUpdate` or `dependencies`.',
          )
          devWarning(
            !hasName,
            'Form.Item',
            'A `Form.Item` with a render function cannot be a field, and thus cannot have a `name` prop.',
          )
        } else if (dependencies && !isRenderProps && !hasName) {
          devWarning(
            false,
            'Form.Item',
            'Must set `name` or use a render function when `dependencies` is set.',
          )
        } else if (React.isValidElement(mergedChildren)) {
          devWarning(
            // @ts-ignore
            mergedChildren.props.defaultValue === undefined,
            'Form.Item',
            '`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.',
          )

          // @ts-ignore
          const childProps = { ...mergedChildren.props, ...mergedControl }

          if (supportRef(mergedChildren)) {
            childProps.ref = getItemRef(mergedName, mergedChildren)
          }

          // We should keep user origin event handler
          const triggers = new Set<string>([
            ...toArray(trigger),
            ...toArray(mergedValidateTrigger),
          ])

          triggers.forEach((eventName) => {
            childProps[eventName] = (...args: any[]) => {
              mergedControl[eventName]?.(...args)
              // @ts-ignore
              mergedChildren.props[eventName]?.(...args)
            }
          })

          childNode = (
            <MemoInput control={mergedControl} update={mergedChildren}>
              {cloneElement(mergedChildren, childProps)}
            </MemoInput>
          )
        } else if (
          isRenderProps &&
          (shouldUpdate || dependencies) &&
          !hasName
        ) {
          // @ts-ignore
          childNode = mergedChildren(context)
        } else {
          devWarning(
            !mergedName.length || !!noStyle,
            'Form.Item',
            '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.',
          )
          childNode = mergedChildren as React.ReactNode
        }

        return renderLayout(childNode, fieldId, isRequired)
      }}
    </Field>
  )
}

type InternalFormItemType = typeof InternalFormItem

type CompoundedComponent = InternalFormItemType & {
  useStatus: typeof useFormItemStatus
}

const FormItem = InternalFormItem as CompoundedComponent
FormItem.useStatus = useFormItemStatus

export default FormItem
