import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { WithTheme, WithThemeStyles } from '../style';
import Item from './ListItem';
import { ListPropsType } from './PropsType';
import listStyles, { ListStyle } from './style/index';

export interface ListProps extends ListPropsType, WithThemeStyles<ListStyle> {
  style?: StyleProp<ViewStyle>;
}

export default class List extends React.Component<ListProps, any> {
  static Item = Item;

  render() {
    const {
      children,
      style,
      renderHeader,
      renderFooter,
      styles,
      ...restProps
    } = this.props;

    return (
      <WithTheme styles={styles} themeStyles={listStyles}>
        {(s) => {
          let headerDom: React.ReactElement<any> | null = null;
          let footerDom: React.ReactElement<any> | null = null;

          if (renderHeader) {
            let content =
              typeof renderHeader === 'function'
                ? renderHeader()
                : renderHeader;
            if (typeof content === 'string') {
              content = <Text style={s.Header}>{content}</Text>;
            }
            headerDom = <View>{content}</View>;
          }
          if (renderFooter) {
            let content =
              typeof renderFooter === 'function'
                ? renderFooter()
                : renderFooter;
            if (typeof content === 'string') {
              content = <Text style={s.Footer}>{content}</Text>;
            }
            footerDom = <View>{content}</View>;
          }

          return (
            <View {...restProps as any} style={style}>
              {headerDom}
              <View style={s.Body}>
                {children ? children : null}
                <View style={[s.BodyBottomLine as ViewStyle]} />
              </View>
              {footerDom}
            </View>
          );
        }}
      </WithTheme>
    );
  }
}
