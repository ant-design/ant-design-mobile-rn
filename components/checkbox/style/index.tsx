import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface CheckboxStyle {
  checkbox_wrapper: ViewStyle
  checkbox_wave: ViewStyle
  checkbox: ViewStyle
  checkbox_checked: ViewStyle
  checkbox_disabled: ViewStyle
  checkbox_inner: ViewStyle
  checkbox_inner_disabled: ViewStyle
  checkbox_inner_after: ViewStyle
  checkbox_inner_after_disabled: ViewStyle
  checkbox_label: ViewStyle
  checkbox_label_disabled: ViewStyle
  checkbox_inner_indeterminate: ViewStyle
  checkbox_inner_after_indeterminate: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<CheckboxStyle>({
    checkbox_wrapper: {
      margin: 0,
      padding: 0,
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox_wave: {
      width: 20,
      height: 20,
      padding: 2,
      overflow: 'hidden',
    },
    checkbox: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 2,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.checkbox_border,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkbox_checked: {
      borderColor: theme.brand_primary,
    },
    checkbox_disabled: {
      borderColor: theme.checkbox_border_disabled,
      backgroundColor: theme.checkbox_fill_disabled,
    },

    // ==========checkbox Inner PrefixCls============
    checkbox_inner: {
      //box-sizing not support in RN
      width: '103%',
      height: '103%',
      backgroundColor: theme.brand_primary,
    },
    checkbox_inner_indeterminate: {
      backgroundColor: 'transparent',
    },
    checkbox_inner_disabled: {
      backgroundColor: theme.checkbox_fill_disabled,
    },

    // ==========inner::after============
    checkbox_inner_after: {
      // transform: [{ rotate: '45deg' }],
      position: 'absolute',
      width: 6,
      height: 9,
      bottom: '20%',
      borderWidth: 2,
      borderColor: '#ffffff',
      borderTopWidth: 0,
      borderLeftWidth: 0,
    },
    // 半选状态样式
    checkbox_inner_after_indeterminate: {
      transform: [{ rotate: '0deg' }],
      position: 'absolute',
      width: 8,
      height: 8,
      backgroundColor: theme.brand_primary,
    },
    checkbox_inner_after_disabled: {
      borderColor: theme.checkbox_border_disabled,
    },

    // ==========label============
    checkbox_label: {
      backgroundColor: 'transparent',
      marginRight: theme.h_spacing_md,
      marginLeft: theme.h_spacing_md,
    },
    checkbox_label_disabled: {
      color: theme.color_text_disabled,
    },
  })
