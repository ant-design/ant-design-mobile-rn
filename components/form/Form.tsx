import FieldForm, { List, useWatch } from 'rc-field-form'
import type { FormProps as RcFormProps } from 'rc-field-form/lib/Form'
import * as React from 'react'
import { useMemo } from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { FormLayout } from '.'
import AntmList from '../list'
import { ListProps } from '../list/List'
import useLocale from '../locale-provider/useLocale'
import DisabledContext, {
  DisabledContextProvider,
} from '../provider/DisabledContext'
import type { FeedbackIcons } from './FormItem'
import type { FormContextProps } from './context'
import { FormContext, FormProvider } from './context'
import type { FormInstance } from './hooks/useForm'
import useForm from './hooks/useForm'
import useFormWarning from './hooks/useFormWarning'

export type RequiredMark =
  | boolean
  | 'optional'
  | ((
      labelNode: React.ReactNode,
      info: { required: boolean },
    ) => React.ReactNode)

export interface FormProps<Values = any>
  extends Omit<ListProps, 'children'>,
    Omit<RcFormProps<Values>, 'form' | 'style'> {
  name?: string
  layout?: FormLayout
  labelStyle?: StyleProp<ViewStyle | TextStyle>
  wrapperStyle?: StyleProp<ViewStyle>
  form?: FormInstance<Values>
  feedbackIcons?: FeedbackIcons
  disabled?: boolean
  requiredMark?: RequiredMark
}

const InternalForm: React.ForwardRefRenderFunction<FormInstance, FormProps> = (
  props,
  ref,
) => {
  const contextDisabled = React.useContext(DisabledContext)

  const {
    disabled = contextDisabled,
    form,
    layout = 'horizontal',
    requiredMark,
    name,
    feedbackIcons,
    style,
    ...restFormProps
  } = props

  const [locale] = useLocale('Form')

  if (__DEV__) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFormWarning(props)
  }

  const mergedRequiredMark = useMemo(() => {
    if (requiredMark !== undefined) {
      return requiredMark
    }

    return true
  }, [requiredMark])

  const [wrapForm] = useForm(form)
  const { __INTERNAL__ } = wrapForm
  __INTERNAL__.name = name

  const formContextValue = useMemo<FormContextProps>(
    () => ({
      name,
      layout,
      requiredMark: mergedRequiredMark,
      itemRef: __INTERNAL__.itemRef,
      form: wrapForm,
      feedbackIcons,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [name, layout, mergedRequiredMark, wrapForm, feedbackIcons],
  )

  React.useImperativeHandle(ref, () => wrapForm)

  return (
    <DisabledContextProvider disabled={disabled}>
      <FormProvider
        {...{
          // This is not list in API, we pass with spread
          validateMessages: locale.defaultValidateMessages,
        }}>
        <FormContext.Provider value={formContextValue}>
          <FieldForm
            id={name}
            component={AntmList}
            style={style as any}
            {...restFormProps}
            name={name}
            form={wrapForm}
          />
        </FormContext.Provider>
      </FormProvider>
    </DisabledContextProvider>
  )
}

const Form = React.forwardRef<FormInstance, FormProps>(InternalForm) as (<
  Values = any,
>(
  props: React.PropsWithChildren<FormProps<Values>> &
    React.RefAttributes<FormInstance<Values>>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>

Form.displayName = 'Form'

export { FormInstance, List, useForm, useWatch }

export default Form
