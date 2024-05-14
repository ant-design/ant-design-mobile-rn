import * as React from 'react'

import { StyleProp, Text, TextStyle, ViewStyle } from 'react-native'
import View from '../view'

import type { RequiredMark } from './Form'
import type { FormContextProps } from './context'
import { FormContext } from './context'
import { FormItemStyle } from './style'

export interface FormItemLabelProps {
  label?: React.ReactNode
  labelStyle?: StyleProp<ViewStyle | TextStyle>
  style?: StyleProp<ViewStyle | TextStyle>
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
  style,
  styles,
}) => {
  const { labelStyle: contextLabelStyle } =
    React.useContext<FormContextProps>(FormContext)

  if (!label) {
    return null
  }

  const mergedLabelStyle = labelStyle || contextLabelStyle || {}

  let labelChildren: React.ReactNode = label

  // Required Mark
  if (typeof requiredMark === 'function') {
    labelChildren = requiredMark(labelChildren, { required: !!required })
  }

  return (
    <View style={styles.formItemLabel}>
      {Boolean(required) && <Text style={styles.asterisk}>*</Text>}
      <View style={[styles.formItemLabelText, style, mergedLabelStyle]}>
        {labelChildren}
      </View>
    </View>
  )
}

export default FormItemLabel
