import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface NoticeBarStyle {
  container: ViewStyle
  font: TextStyle
  background: ViewStyle
  marquee: TextStyle
  iconWrap: ViewStyle
  actionWrap: ViewStyle
  close: TextStyle
  link: TextStyle
}

export default (variables: Theme) =>
  StyleSheet.create<NoticeBarStyle>({
    font: {
      color: variables.brand_error,
    },
    background: {
      backgroundColor: variables.notice_bar_fill,
    },
    container: {
      minHeight: variables.notice_bar_height,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
    },
    marquee: {
      fontSize: variables.font_size_subhead,
    },
    iconWrap: {
      marginLeft: variables.h_spacing_lg,
      marginRight: variables.h_spacing_sm,
    },
    actionWrap: {
      justifyContent: 'center',
      paddingRight: variables.h_spacing_lg,
      paddingLeft: variables.h_spacing_sm,
    },
    close: {
      fontSize: 18,
      fontWeight: '200',
      textAlign: 'left',
    },
    link: {
      transform: [{ rotate: '225deg' }],
      fontWeight: '500',
      textAlign: 'left',
    },
  })
