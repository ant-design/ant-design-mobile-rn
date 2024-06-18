import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SliderStyle {
  slider: ViewStyle
  disabled: ViewStyle
  trackContianer: ViewStyle
  track: ViewStyle
  fill: ViewStyle

  // 滑轨按钮
  thumbContainer: ViewStyle
  thumb: ViewStyle
  thumbIcon: ViewStyle

  // 刻度
  ticks: ViewStyle
  tick: ViewStyle
  tickActive: ViewStyle

  // 刻度下的标记
  mark: ViewStyle
  markText: TextStyle
  markTextActive: TextStyle
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
      backgroundColor: '#f5f5f5',
    },
    fill: {
      position: 'absolute',
      zIndex: 1,
      height: 3,
      borderRadius: 3,
      backgroundColor: '#3086ff',
    },

    thumbContainer: {
      // cursor: 'grab',
      // touchAction: 'none',
      // position: 'absolute',
      zIndex: 2,
      width: 32,
      height: 32,
      borderRadius: 32,
      marginLeft: -16,
      // transform: [{ translateX: -16 }],
    },
    thumb: {
      width: 28,
      height: 28,
      margin: 2,
      borderRadius: 28,
      textAlign: 'center',
      lineHeight: 28,
      backgroundColor: '#ffffff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 8,
      color: '#3086ff',
    },
    thumbIcon: {
      width: 12,
      height: 12,
      margin: 8,
      backgroundColor: '#3086ff',
    },

    ticks: {
      position: 'absolute',
      width: '100%',
      height: 3,
      backgroundColor: 'transparent',
    },
    tick: {
      position: 'absolute',
      top: -2,
      width: 7,
      height: 7,
      marginLeft: -3,
      backgroundColor: '#f5f5f5',
      borderRadius: 7,
    },
    tickActive: {
      backgroundColor: '#3086ff',
    },

    mark: {
      position: 'relative',
      width: '100%',
      height: 11,
    },
    markText: {
      marginLeft: '-50%',
      fontSize: 11,
      color: '#333333',
    },
    markTextActive: {},
  })
