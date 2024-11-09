import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SliderStyle {
  slider: ViewStyle
  disabled: ViewStyle

  // 轨道
  trackContianer: ViewStyle
  track: ViewStyle
  fill: ViewStyle

  // 滑轨按钮
  thumb: ViewStyle

  // 刻度
  ticks: ViewStyle
  tick: ViewStyle
  tickActive: ViewStyle

  // 刻度下的标记
  mark: ViewStyle
  markText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SliderStyle>({
    slider: {
      paddingVertical: 5,
      paddingHorizontal: 14,
    },
    disabled: {},
    trackContianer: {
      paddingVertical: 8,
      position: 'relative',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    track: {
      position: 'absolute',
      width: '100%',
      zIndex: 1,
      height: 3,
      borderRadius: 3,
      backgroundColor: theme.fill_grey,
    },
    fill: {
      position: 'absolute',
      zIndex: 1,
      height: 3,
      borderRadius: 3,
      backgroundColor: theme.brand_primary,
    },

    thumb: {
      zIndex: 3,
    },

    ticks: {
      position: 'absolute',
      width: '100%',
      height: 3,
      backgroundColor: 'transparent',
      zIndex: 2,
    },
    tick: {
      position: 'absolute',
      top: -2,
      width: 7,
      height: 7,
      marginLeft: -3,
      backgroundColor: theme.fill_grey,
      borderRadius: 7,
    },
    tickActive: {
      backgroundColor: theme.brand_primary,
    },

    mark: {
      position: 'relative',
      width: '100%',
      height: 11,
    },
    markText: {
      transform: [{ translateX: -theme.font_size_caption_sm / 2 }],
      fontSize: theme.font_size_caption_sm,
      color: theme.color_text_paragraph,
    },
  })
