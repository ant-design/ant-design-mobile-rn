import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ListItemStyle, ListStyle } from '../../list/style'
import { Theme } from '../../style'

export interface FormStyle extends ListStyle {}
export interface FormItemStyle extends ListItemStyle {
  formitemRow: ViewStyle
  formitemColumn: ViewStyle
  formItemExtra: ViewStyle | TextStyle
  formItemLabel: ViewStyle
  formItemLabelText: ViewStyle | TextStyle
  formItemControl: ViewStyle
  asterisk: TextStyle
}

export interface ValidateStatusStyle {
  error: TextStyle
  warning: TextStyle
  success: TextStyle
  validating: TextStyle
  feedbackIcon: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<Partial<FormItemStyle & ValidateStatusStyle>>({
    formitemRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    formitemColumn: {
      flex: 1,
      flexDirection: 'column',
    },
    formItemExtra: {
      maxWidth: theme.extra_max_width,
      overflow: 'hidden',
    },
    formItemLabel: {
      position: 'relative',
    },
    formItemLabelText: {
      width: theme.prefix_width,
      color: theme.color_text_base,
      fontSize: theme.font_size_heading,
      lineHeight: theme.font_size_heading + theme.prefix_padding / 2,
      paddingTop: theme.prefix_padding,
    },
    asterisk: {
      position: 'absolute',
      left: -theme.font_size_heading / 2,
      top: theme.prefix_padding,
      color: theme.color_error,
      fontSize: theme.font_size_heading,
    },
    formItemControl: {
      flex: 1,
      height: 'auto', // TODO-luokun: 样式待回归
    },

    error: {
      color: theme.color_error,
    },
    warning: {
      color: theme.color_warning,
    },
    success: {
      color: theme.color_success,
    },
    validating: {
      color: theme.color_primary,
    },
    feedbackIcon: {},
  })
