import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SliderStyle {
  slider: ViewStyle
  sliderContianer: ViewStyle
  trackStyle: ViewStyle
  fill: ViewStyle
  ticks: ViewStyle
  tick: ViewStyle
  tickActive: ViewStyle
  thumbContainer: ViewStyle
  thumb: ViewStyle
  thumbIcon: ViewStyle
  mark: ViewStyle
  markText: TextStyle
  markTextActive: TextStyle

  minimumTrackStyle: ViewStyle
  maximumTrackStyle: ViewStyle
  thumbStyle: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SliderStyle>({
    slider: {
      paddingVertical: 5,
      paddingHorizontal: 14,
    },
    sliderContianer: {
      paddingVertical: 8,
    },
    trackStyle: {
      // backgroundColor: 'red',
      position: 'relative',
      width: '100%',
      height: 3,
      backgroundColor: '#f5f5f5',
      borderRadius: 3,
    },
    fill: {
      position: 'absolute',
      zIndex: 1,
      height: 3,
      borderRadius: 3,
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

    thumbContainer: {
      // cursor: 'grab',
      // touchAction: 'none',
      position: 'absolute',
      zIndex: 2,
      width: 32,
      height: 32,
      borderRadius: 32,
      top: '50%',
      transform: [{ translateX: -32, translateY: -32 }],
    },

    thumb: {
      width: 28,
      height: 28,
      margin: 2,
      borderRadius: 28,
      textAlign: 'center',
      lineHeight: 28,
      backgroundColor: '#ffffff',
      // box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.12);
      color: '#3086ff',
    },
    thumbIcon: {
      width: 12,
      height: 12,
      margin: 8,
      backgroundColor: '#3086ff',
    },
    mark: {
      position: 'relative',
      width: '100%',
      height: 11,
      marginTop: 10,
    },

    markText: {
      position: 'absolute',
      // display: inline-block;
      lineHeight: 1,
      fontSize: 11,
      color: '#333333',
      textAlign: 'center',
      // word-break: keep-all;
      // user-select: none;
      transform: [{ translateX: -12 }],
    },
    markTextActive: {},

    minimumTrackStyle: {
      // backgroundColor: 'green',
    },
    maximumTrackStyle: {},
    thumbStyle: {
      marginLeft: -10,
      // backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'red',
      borderStyle: 'solid',
    },
  })
