import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react'
import devWarning from '../_util/devWarning'
import Checkbox from '../checkbox/Checkbox'
import { OnChangeParams } from '../checkbox/PropsType'
import { WithTheme } from '../style'
import { RadioForwardedRef, RadioProps } from './PropsType'
import RadioGroupContext from './RadioContext'
import RadioStyle from './style'

const InternalRadio: React.ForwardRefRenderFunction<
  RadioForwardedRef,
  RadioProps
> = (props, ref) => {
  const context = React.useContext(RadioGroupContext)
  const {
    styles,
    onChange,
    value,
    disabled = context?.disabled,
    ...restProps
  } = props
  if (__DEV__) {
    devWarning(
      !('value' in props && !context && !('checked' in props)),
      'Radio',
      '`value` is always used with Radio.Group., do you mean `checked`?',
    )
  }

  const [innerChecked, setInnerChecked] = useMergedState<boolean>(false, {
    value: context?.value ? value === context.value : restProps.checked,
    defaultValue: restProps.defaultChecked,
  })

  const triggerChange = useCallback(
    (newChecked: boolean) => {
      if (newChecked) {
        setInnerChecked(newChecked)
        onChange?.({ target: { checked: newChecked } })
        context?.onChange?.({ target: { value } })
      }
      return true
    },
    [context, onChange, setInnerChecked, value],
  )

  useEffect(() => {
    onChange?.({ target: { checked: innerChecked } })
  }, [innerChecked, onChange])

  const onInternalChange = useCallback(
    (e: OnChangeParams) => {
      e.target.checked && triggerChange(e.target.checked)
    },
    [triggerChange],
  )

  // ================== Actions Ref ==================
  const actions = useMemo(
    () => ({
      onPress: () => triggerChange(!innerChecked),
      checked: innerChecked,
    }),
    [innerChecked, triggerChange],
  )
  useImperativeHandle(ref, () => actions)

  return (
    <WithTheme themeStyles={RadioStyle} styles={styles}>
      {(_styles) => (
        <Checkbox
          accessibilityRole="radio"
          {...restProps}
          disabled={disabled}
          indeterminate={false}
          checked={innerChecked}
          onChange={onInternalChange}
          styles={_styles}
        />
      )}
    </WithTheme>
  )
}

const Radio = React.forwardRef<RadioForwardedRef, RadioProps>(
  InternalRadio,
) as ((
  props: React.PropsWithChildren<RadioProps> &
    React.RefAttributes<RadioForwardedRef>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>

Radio.displayName = 'AntmRadio'

export default React.memo(Radio)
