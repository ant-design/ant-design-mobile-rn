import React, { useMemo, useState } from 'react'
import devWarning from '../_util/devWarning'
import Checkbox from '../checkbox/Checkbox'
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
    checked,
    onChange,
    value,
    defaultChecked,
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

  const [innerChecked, setInnerChecked] = useState<boolean | undefined>(
    checked ?? defaultChecked,
  )

  const restCheckboxProps = useMemo<RadioProps>(() => {
    if (context) {
      return {
        checked: context.value === value,
        onChange: (e) => {
          if (e.target.checked) {
            onChange?.(e)
            context?.onChange?.({ target: { value } })
          }
        },
      }
    }
    return {
      checked: innerChecked,
      onChange: (e) => {
        if (e.target.checked && checked === undefined) {
          onChange?.(e)
          setInnerChecked(true)
        }
      },
    }
  }, [checked, context, innerChecked, onChange, value])

  return (
    <WithTheme themeStyles={RadioStyle} styles={styles}>
      {(_styles) => (
        <Checkbox
          accessibilityRole="radio"
          {...restProps}
          {...restCheckboxProps}
          disabled={disabled}
          indeterminate={false}
          styles={_styles}
          ref={ref}
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
