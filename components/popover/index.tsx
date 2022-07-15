import React, { isValidElement } from 'react'
import {
  ScrollView,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { Popover as Pop, PopoverController } from 'react-native-modal-popover'
import { Placement } from 'react-native-modal-popover/lib/PopoverGeometry'
import { WithTheme, WithThemeStyles } from '../style'
import PopoverStyles, { PopoverStyle } from './style'

export interface PopoverProps extends WithThemeStyles<PopoverStyle> {
  triggerStyle?: StyleProp<ViewStyle>
  onSelect?: (node: any, index?: number) => void
  overlay: React.ReactNode
  disabled?: boolean
  renderOverlayComponent?: (
    node: React.ReactNode,
    closePopover: () => void,
  ) => React.ReactNode
  placement?: Placement | 'auto'
  duration?: number
  easing?: (show: boolean) => (value: number) => number
  useNativeDriver?: boolean
  onDismiss?: () => void
  children: React.ReactNode
}
export interface PopoverItemProps {
  value: any
  [key: string]: any
  disabled?: boolean
  style?: StyleProp<ViewStyle>
}
export class PopoverItem extends React.PureComponent<PopoverItemProps> {
  static displayName: 'PopoverItem'
  render() {
    const { value, disabled, children, onSelect, style } = this.props
    return (
      <WithTheme>
        {(_, theme) => (
          <TouchableOpacity
            activeOpacity={0.75}
            disabled={disabled}
            onPress={() => {
              if (typeof onSelect === 'function') {
                onSelect(value)
              }
            }}
            style={[
              {
                padding: theme.v_spacing_md,
              },
              style,
            ]}>
            {children}
          </TouchableOpacity>
        )}
      </WithTheme>
    )
  }
}
export default class Popover extends React.PureComponent<PopoverProps, any> {
  static defaultProps = {
    onSelect: () => {},
  }

  static Item = PopoverItem
  onSelect = (value: any, closePopover: any) => {
    const { onSelect } = this.props
    if (onSelect) {
      onSelect(value)
    }
    closePopover()
  }
  renderOverlay = (closePopover: any) => {
    const { overlay, renderOverlayComponent } = this.props
    const items = React.Children.map(overlay, (child) => {
      if (!isValidElement(child)) {
        return child
      }
      return React.cloneElement(child, {
        onSelect: (v: any) => this.onSelect(v, closePopover),
      } as any)
    })
    if (typeof renderOverlayComponent === 'function') {
      return renderOverlayComponent(items, closePopover)
    }
    return <ScrollView>{items}</ScrollView>
  }
  render() {
    const {
      children,
      disabled,
      triggerStyle,
      styles,
      placement,
      duration,
      easing,
      useNativeDriver,
      onDismiss,
    } = this.props

    return (
      <WithTheme themeStyles={PopoverStyles} styles={styles}>
        {(s) => (
          <PopoverController>
            {({
              openPopover,
              closePopover,
              popoverVisible,
              setPopoverAnchor,
              popoverAnchorRect,
            }) => (
              <View>
                <TouchableOpacity
                  ref={setPopoverAnchor}
                  onPress={openPopover}
                  style={triggerStyle}
                  disabled={disabled}
                  activeOpacity={0.75}>
                  {children}
                </TouchableOpacity>
                <Pop
                  contentStyle={s.content}
                  arrowStyle={s.arrow}
                  backgroundStyle={s.background}
                  visible={popoverVisible}
                  onClose={closePopover}
                  fromRect={popoverAnchorRect}
                  supportedOrientations={['portrait', 'landscape']}
                  placement={placement}
                  duration={duration}
                  easing={easing}
                  useNativeDriver={useNativeDriver}
                  onDismiss={onDismiss}>
                  {this.renderOverlay(closePopover)}
                </Pop>
              </View>
            )}
          </PopoverController>
        )}
      </WithTheme>
    )
  }
}
