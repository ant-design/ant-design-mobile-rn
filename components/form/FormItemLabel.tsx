import * as React from 'react'

import { StyleProp, Text, TextStyle, ViewStyle } from 'react-native'
import View from '../view'

import useLocale from '../locale-provider/useLocale'
import type { RequiredMark } from './Form'
import type { FormContextProps } from './context'
import { FormContext } from './context'
import { FormItemStyle } from './style'

export interface FormItemLabelProps {
  label?: React.ReactNode
  labelStyle?: StyleProp<ViewStyle | TextStyle>
  styles: Partial<FormItemStyle>
  /**
   * @internal Used for pass `requiredMark` from `<Form />`
   */
  requiredMark?: RequiredMark
}

const FormItemLabel: React.FC<FormItemLabelProps & { required?: boolean }> = ({
  label,
  labelStyle,
  required,
  requiredMark,
  styles,
}) => {
  const [locale] = useLocale('Form')

  const { labelStyle: contextLabelStyle } =
    React.useContext<FormContextProps>(FormContext)

  if (!label) {
    return null
  }

  const mergedLabelStyle = labelStyle || contextLabelStyle || {}

  let labelChildren: React.ReactNode = (
    <View style={[styles.formItemLabelText, mergedLabelStyle]}>{label}</View>
  )

  // Required Mark
  const isOptionalMark = requiredMark === 'optional'
  const isRenderMark = typeof requiredMark === 'function'

  if (isRenderMark) {
    labelChildren = requiredMark(labelChildren, { required: !!required })
  } else if (isOptionalMark && !required) {
    labelChildren = (
      <>
        {labelChildren}
        <Text style={styles.optional}>{locale.optional}</Text>
      </>
    )
  }

  return (
    <View style={styles.formItemLabel}>
      {Boolean(required && requiredMark) && (
        <Text style={styles.asterisk}>*</Text>
      )}
      {labelChildren}
    </View>
  )
}

export default FormItemLabel
