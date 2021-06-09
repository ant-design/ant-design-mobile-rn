import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface CardStyle {
  card: ViewStyle
  full: ViewStyle
  headerWrap: ViewStyle
  headerTitle: ViewStyle
  headerImage: ImageStyle
  headerContentWrap: ViewStyle
  headerContent: TextStyle
  headerExtraWrap: ViewStyle
  headerExtra: TextStyle
  body: ViewStyle
  footerWrap: ViewStyle
  footerContent: TextStyle
  footerExtra: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<CardStyle>({
    card: {
      borderWidth: theme.border_width_md,
      borderColor: theme.border_color_base,
      borderRadius: theme.radius_md,
      paddingBottom: theme.v_spacing_sm,
      flexDirection: 'column',
      backgroundColor: theme.fill_base,
    },
    full: {
      borderRadius: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
    headerWrap: {
      flexDirection: 'row',
      paddingVertical: theme.v_spacing_sm,
      paddingRight: theme.h_spacing_lg,
      marginLeft: theme.h_spacing_lg,
      alignItems: 'center',
    },
    headerTitle: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerImage: {
      marginRight: theme.h_spacing_sm,
    },
    headerContentWrap: {
      flex: 1,
    },
    headerContent: {
      color: theme.color_text_base,
      fontSize: theme.font_size_heading,
      flex: 1,
    },
    headerExtraWrap: {
      flex: 1,
    },
    headerExtra: {
      flex: 1,
      fontSize: theme.font_size_heading,
      color: theme.color_text_caption,
      textAlign: 'right',
    },
    body: {
      flexGrow: 1,
      paddingVertical: theme.v_spacing_md,
      minHeight: 48,
      borderTopWidth: theme.border_width_md,
      borderColor: theme.border_color_base,
    },
    footerWrap: {
      flexDirection: 'row',
      paddingHorizontal: theme.h_spacing_lg,
    },
    footerContent: {
      flex: 1,
      fontSize: theme.font_size_base,
      color: theme.color_text_caption,
    },
    footerExtra: {
      textAlign: 'right',
      fontSize: theme.font_size_base,
      color: theme.color_text_caption,
    },
  })
