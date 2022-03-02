import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SwitchStyle {
  switch: ViewStyle
  switch_inner: ViewStyle
  switch_handle: ViewStyle
  switch_checked: ViewStyle
  switch_unchecked: ViewStyle
  switch_inner_checked: ViewStyle
  switch_inner_unchecked: ViewStyle
  switch_handle_checked: ViewStyle
  switch_handle_unchecked: ViewStyle
  switch_checked_disabled: ViewStyle
  switch_unchecked_disabled: ViewStyle
  switch_handle_disabled: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SwitchStyle>({
    switch: {
      position: 'relative',
      minWidth: 50,
      minHeight: 25,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 0,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'transparent',
      overflow: 'hidden',
    },
    // handle
    switch_handle: {
      position: 'absolute',
      width: 22,
      height: 22,
      borderRadius: 999,
      backgroundColor: '#ffffff',
    },
    // inner
    switch_inner: {
      color: '#fff',
      fontSize: 12,
    },
    switch_inner_checked: {
      marginLeft: 7,
      marginRight: 25,
    },
    switch_inner_unchecked: {
      marginLeft: 25,
      marginRight: 7,
    },
    // checked
    switch_checked: {
      borderColor: theme.switch_fill,
      backgroundColor: theme.switch_fill,
    },
    switch_unchecked: {
      borderColor: theme.switch_unchecked,
      backgroundColor: theme.switch_unchecked,
    },
    switch_handle_checked: {
      right: 0,
    },
    switch_handle_unchecked: {
      left: 0,
    },
    // disabled
    switch_checked_disabled: {
      borderColor: theme.switch_checked_disabled,
      backgroundColor: theme.switch_checked_disabled,
    },
    switch_unchecked_disabled: {
      borderColor: theme.switch_unchecked_disabled,
      backgroundColor: theme.switch_unchecked_disabled,
    },
    switch_handle_disabled: {},
  })
