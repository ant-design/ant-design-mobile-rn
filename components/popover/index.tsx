import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Menu, { MenuContext, MenuOption, MenuOptions, MenuTrigger } from 'react-native-menu';
export interface PopoverProps {
  style?: StyleProp<ViewStyle>;
  triggerStyle?: StyleProp<ViewStyle>;
  overlayStyle?: StyleProp<ViewStyle>;
  contextStyle?: StyleProp<ViewStyle>;
  renderOverlayComponent?: (values: any) => JSX.Element;
  name?: string;
  onSelect?: (node: any, index?: number) => void;
  overlay: React.ReactNode;
  disabled?: boolean;
}
export default class Popover extends React.Component<PopoverProps, any> {
  static defaultProps = {
    onSelect: () => {},
  };

  static Item = MenuOption;
  menuContextRef: any;

  render() {
    const {
      children,
      onSelect,
      overlay,
      disabled,
      contextStyle,
      name,
      style,
      triggerStyle,
      overlayStyle,
      renderOverlayComponent,
    } = this.props;
    const menuOptionsProp = {
      optionsContainerStyle: overlayStyle,
      renderOptionsContainer: renderOverlayComponent,
    };
    return (
      <MenuContext
        ref={(el: any) => (this.menuContextRef = el)}
        style={contextStyle}
      >
        <Menu name={name} onSelect={onSelect} style={style}>
          <MenuTrigger disabled={disabled} style={triggerStyle}>
            {children}
          </MenuTrigger>
          <MenuOptions {...menuOptionsProp}>{overlay}</MenuOptions>
        </Menu>
      </MenuContext>
    );
  }
}
