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
  optional: TextStyle
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
      minWidth: theme.prefix_width,
      position: 'relative',
      flexDirection: 'row',
      paddingTop: theme.prefix_padding,
    },
    formItemLabelText: {
      color: theme.color_text_base,
      fontSize: theme.font_size_heading,
    },
    asterisk: {
      position: 'absolute',
      left: -theme.font_size_heading / 2,
      top: theme.prefix_padding,
      color: theme.color_error,
      fontSize: theme.font_size_heading,
    },
    optional: {
      color: 'rgba(0, 0, 0, 0.45)',
      fontSize: theme.font_size_heading,
    },
    formItemControl: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
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
