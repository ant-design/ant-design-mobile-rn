import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface ButtonStyles {
  container: ViewStyle
  defaultHighlight: ViewStyle
  primaryHighlight: ViewStyle
  ghostHighlight: ViewStyle
  warningHighlight: ViewStyle
  wrapperStyle: ViewStyle
  underlayStyle: ViewStyle
  largeRaw: ViewStyle
  largeUnderlayContainerRaw: ViewStyle
  smallRaw: ViewStyle
  smallUnderlayContainerRaw: ViewStyle
  defaultRaw: ViewStyle
  defaultUnderlayContainerRaw: ViewStyle
  primaryRaw: ViewStyle
  primaryUnderlayContainerRaw: ViewStyle
  ghostRaw: ViewStyle
  ghostUnderlayContainerRaw: ViewStyle
  warningRaw: ViewStyle
  warningUnderlayContainerRaw: ViewStyle
  defaultDisabledRaw: ViewStyle
  primaryDisabledRaw: ViewStyle
  ghostDisabledRaw: ViewStyle
  warningDisabledRaw: ViewStyle
  defaultHighlightText: TextStyle
  primaryHighlightText: TextStyle
  ghostHighlightText: TextStyle
  warningHighlightText: TextStyle
  largeRawText: TextStyle
  smallRawText: TextStyle
  defaultRawText: TextStyle
  primaryRawText: TextStyle
  ghostRawText: TextStyle
  warningRawText: TextStyle
  defaultDisabledRawText: TextStyle
  primaryDisabledRawText: TextStyle
  ghostDisabledRawText: TextStyle
  warningDisabledRawText: TextStyle
  indicator: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<ButtonStyles>({
    container: {
      flexDirection: 'row',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    defaultHighlight: {
      backgroundColor: `${theme.fill_tap}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
      borderColor: theme.border_color_base,
    },
    primaryHighlight: {
      backgroundColor: `${theme.primary_button_fill_tap}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
      borderColor: theme.primary_button_fill,
    },
    ghostHighlight: {
      backgroundColor: 'transparent',
      borderColor: theme.ghost_button_fill_tap,
    },
    warningHighlight: {
      backgroundColor: `${theme.warning_button_fill_tap}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
      borderColor: theme.warning_button_fill,
    },
    wrapperStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.radius_md,
      borderWidth: 1,
    },
    underlayStyle: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    largeRaw: {
      height: theme.button_height,
    },
    largeUnderlayContainerRaw: {
      paddingLeft: theme.h_spacing_lg,
      paddingRight: theme.h_spacing_lg,
    },
    smallRaw: {
      height: theme.button_height_sm,
    },
    smallUnderlayContainerRaw: {
      paddingLeft: theme.h_spacing_sm,
      paddingRight: theme.h_spacing_sm,
    },
    defaultRaw: {
      backgroundColor: theme.fill_base,
      borderColor: theme.border_color_base,
    },
    defaultUnderlayContainerRaw: {},
    primaryRaw: {
      backgroundColor: theme.primary_button_fill,
      borderColor: theme.primary_button_fill,
    },
    primaryUnderlayContainerRaw: {},
    ghostRaw: {
      backgroundColor: 'transparent',
      borderColor: theme.ghost_button_color,
    },
    ghostUnderlayContainerRaw: {},
    warningRaw: {
      backgroundColor: theme.warning_button_fill,
      borderColor: theme.warning_button_fill,
    },
    warningUnderlayContainerRaw: {},
    defaultDisabledRaw: {
      backgroundColor: theme.fill_disabled,
      borderColor: theme.fill_disabled,
    },
    primaryDisabledRaw: {
      opacity: 0.4,
    },
    ghostDisabledRaw: {
      borderColor: `${theme.color_text_base}1A`, // alpha 10%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    warningDisabledRaw: {
      opacity: 0.4,
    },
    defaultHighlightText: {
      color: `${theme.color_text_base}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    primaryHighlightText: {
      color: `${theme.color_text_base_inverse}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    ghostHighlightText: {
      color: theme.ghost_button_fill_tap, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    warningHighlightText: {
      color: `${theme.color_text_base_inverse}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    largeRawText: {
      fontSize: theme.button_font_size,
    },
    smallRawText: {
      fontSize: theme.button_font_size_sm,
    },
    defaultRawText: {
      color: theme.color_text_base,
    },
    primaryRawText: {
      color: theme.color_text_base_inverse,
    },
    ghostRawText: {
      color: theme.ghost_button_color,
    },
    warningRawText: {
      color: theme.color_text_base_inverse,
    },
    defaultDisabledRawText: {
      color: `${theme.color_text_base}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    primaryDisabledRawText: {
      color: `${theme.color_text_base_inverse}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    ghostDisabledRawText: {
      color: `${theme.color_text_base}1A`, // alpha 10%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    warningDisabledRawText: {
      color: `${theme.color_text_base_inverse}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    indicator: {
      marginRight: theme.h_spacing_md,
    },
  })
