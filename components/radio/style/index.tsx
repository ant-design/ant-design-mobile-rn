import { StyleSheet, TextStyle } from 'react-native'
import { Theme } from '../../style'

export interface RadioItemStyle {
  radioItemContent: TextStyle
  radioItemContentDisable: TextStyle
}

// only for Checkbox themeStyles func
export default (theme: Theme) =>
  StyleSheet.create({
    checkbox_wave: { borderRadius: 999 },
    checkbox: { borderRadius: 999 },
    checkbox_inner: { width: 0, height: 0 },
    checkbox_inner_before: {
      width: 8,
      height: 8,
      borderRadius: 999,
      backgroundColor: theme.brand_primary,
      borderWidth: 0,
    },
    checkbox_inner_before_disabled: {
      backgroundColor: '#0003',
    },
    radioItemContent: {
      color: theme.color_text_base,
      marginRight: theme.h_spacing_md,
      marginLeft: theme.h_spacing_md,
    },
    radioItemContentDisable: {
      color: theme.color_text_disabled,
    },
  })
