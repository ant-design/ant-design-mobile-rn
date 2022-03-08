import useMergedState from 'rc-util/lib/hooks/useMergedState'
import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Checkbox from '../checkbox/Checkbox'
import { OnChangeParams } from '../checkbox/PropsType'
import { CheckboxStyle } from '../checkbox/style'
import { WithTheme, WithThemeStyles } from '../style'
import devWarning from '../_util/devWarning'
import { RadioPropsType } from './PropsType'
import RadioGroupContext from './RadioContext'
import RadioStyle from './style'

export interface RadioProps
  extends RadioPropsType,
    WithThemeStyles<CheckboxStyle> {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const InternalRadio = (
  { styles, onChange, value, ...restProps }: RadioProps,
  ref: any,
) => {
  const context = React.useContext(RadioGroupContext)
  devWarning(
    'checked' in restProps || !('value' in restProps && context),
    'Radio',
    '`value` is always used with Radio.Group., do you mean `checked`?',
  )

  const [innerChecked, setInnerChecked] = useMergedState<boolean>(false, {
    value: restProps.checked,
    defaultValue: restProps.defaultChecked,
  })

  if (context) {
    restProps.checked = value === context.value
    restProps.disabled = restProps.disabled || context.disabled
  } else {
    restProps.checked = innerChecked
  }

  const onInternalChange = (e: OnChangeParams) => {
    e.target.checked && triggerChange(e.target.checked)
  }

  function triggerChange(newChecked: boolean) {
    setInnerChecked(newChecked)
    onChange?.({ target: { checked: newChecked } })
    context?.onChange?.({ target: { value } })
  }

  return (
    <WithTheme themeStyles={RadioStyle} styles={styles}>
      {(_styles) => (
        <Checkbox
          accessibilityRole="radio"
          accessibilityState={{
            checked: restProps.checked,
            disabled: restProps.disabled,
          }}
          {...restProps}
          ref={ref}
          indeterminate={false}
          onChange={onInternalChange}
          styles={_styles}
        />
      )}
    </WithTheme>
  )
}

const AntmRadio = React.forwardRef(InternalRadio)

AntmRadio.displayName = 'AntmRadio'

export default AntmRadio
