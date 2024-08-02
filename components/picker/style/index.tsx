import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface PickerStyle {
  modal: ViewStyle
  container: ViewStyle
  header: ViewStyle
  headerItem: ViewStyle
  actionText: TextStyle
  title: TextStyle
  okText: TextStyle
  dismissText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<PickerStyle>({
    modal: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    container: {},
    header: {
      height: theme.picker_header_height,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.border_color_thin,
      backgroundColor: theme.fill_base,
    },
    headerItem: {
      height: theme.picker_header_height,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionText: {
      color: theme.brand_primary,
      fontSize: theme.font_size_heading,
      textAlign: 'center',
    },
    okText: {},
    dismissText: {},
    title: {
      color: theme.color_text_caption,
      fontSize: theme.font_size_heading,
      textAlign: 'center',
    },
  })
