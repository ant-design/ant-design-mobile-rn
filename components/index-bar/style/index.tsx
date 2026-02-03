import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface IndexBarStyle {
  container: ViewStyle
  listContainer: ViewStyle
  item: ViewStyle
  itemLast: ViewStyle
  itemTitle: TextStyle
  sectionHeader: ViewStyle
  sectionHeaderTitle: TextStyle
  indicatorPosition: ViewStyle
  indicatorContainer: ViewStyle
  indicatorBox: ViewStyle
  indicatorTextContainer: ViewStyle
  activeIndicatorTextContainer: ViewStyle
  indicatorScaleTextContainer: ViewStyle
  indicatorText: TextStyle
  activeIndicatorText: TextStyle
  indicatorScaleText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<IndexBarStyle>({
    container: {
      flex: 1,
      flexDirection: 'row',
      position: 'relative',
    },
    listContainer: {
      flex: 1,
    },
    sectionHeader: {
      paddingHorizontal: theme.h_spacing_md,
      paddingVertical: theme.v_spacing_md,
      backgroundColor: theme.tab_bar_fill,
    },
    sectionHeaderTitle: {
      fontSize: theme.font_size_heading,
      color: theme.color_text_paragraph,
    },
    item: {
      paddingHorizontal: theme.h_spacing_md,
      paddingVertical: theme.v_spacing_lg,
      backgroundColor: theme.fill_base,
      borderBottomWidth: theme.border_width_sm,
      borderBottomColor: theme.border_color_base,
    },
    itemLast: {
      borderBottomColor: 'transparent',
    },
    itemTitle: {
      fontSize: theme.font_size_caption,
    },
    indicatorPosition: {
      position: 'absolute',
      minWidth: 40,
      right: 0,
      top: '50%',
      // @ts-ignore
      transform: [{ translateY: '-50%' }],
      justifyContent: 'center',
      alignItems: 'center',
    },
    indicatorContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    indicatorBox: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
    },
    indicatorTextContainer: {
      padding: theme.v_spacing_xs,
    },
    activeIndicatorTextContainer: {
      // @ts-ignore
      borderRadius: '50%',
      backgroundColor: theme.brand_primary,
    },
    indicatorScaleTextContainer: {
      position: 'absolute',
      // @ts-ignore
      borderRadius: '50%',
      padding: theme.h_spacing_lg,
      backgroundColor: theme.fill_mask,
      transform: [{ scale: 1.2 }],
      right: 72,
    },
    indicatorText: {
      fontSize: theme.font_size_caption_sm,
      minHeight: theme.font_size_base,
      minWidth: theme.font_size_base,
      color: theme.color_text_base,
      textAlign: 'center',
    },
    activeIndicatorText: {
      color: theme.color_text_base_inverse,
    },
    indicatorScaleText: {
      color: theme.color_text_base_inverse,
      transform: [{ scale: 2 }],
    },
  })
