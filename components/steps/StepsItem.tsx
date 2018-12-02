/* tslint:disable: jsx-no-multiline-js */
import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import Icon from '../icon';
import variables from '../style/themes/default';

export interface StepsItemProps {
  width?: number;
  size?: string;
  current?: number;
  index?: number;
  last?: boolean;
  direction?: string;
  title?: string;
  description?: string;
  status?: string;
  icon?: string;
  errorTail?: number;
  styles?: any;
}

export default class StepsItem extends React.Component<StepsItemProps, any> {
  render() {
    const {
      size,
      last,
      title,
      description,
      direction,
      status,
      icon,
      styles,
    } = this.props;

    const index = this.props.index as number;
    const current = this.props.current as number;
    const errorTail = this.props.errorTail as number;

    let headCls: string = '';
    let tailTopCls: string = '';
    let tailBottomCls: string = '';

    const sizeCls: string = size === 'small' ? '_s' : '_l';

    if (index < current || status === 'finish') {
      headCls = `head_blue${sizeCls}`;
      tailTopCls = 'tail_blue';
      tailBottomCls = 'tail_blue';
    } else if (index === current || status === 'process') {
      headCls = `head_blue${sizeCls}`;
      tailTopCls = 'tail_blue';
      tailBottomCls = 'tail_gray';
    } else if (index > current || status === 'wait') {
      headCls = `head_gray${sizeCls}`;
      tailTopCls = 'tail_gray';
      tailBottomCls = 'tail_gray';
    } else if (status === 'error') {
      headCls = `head_red${sizeCls}`;
      tailTopCls = 'tail_gray';
      tailBottomCls = 'tail_gray';
    }

    if (last) {
      tailTopCls = 'tail_last';
      tailBottomCls = 'tail_last';
    }

    if (errorTail > -1) {
      tailBottomCls = 'tail_error';
    }

    let iconSource;
    if (size === 'small') {
      if (
        index < current ||
        status === 'finish' ||
        index === current ||
        status === 'process'
      ) {
        iconSource = (
          <Icon
            name="check"
            color={variables.brand_primary}
            style={styles[`icon${sizeCls}`]}
          />
        );
      } else if (index > current || status === 'wait') {
        iconSource = (
          <Icon
            name="ellipsis"
            color={variables.color_icon_base}
            style={styles[`icon${sizeCls}`]}
          />
        );
      } else if (status === 'error') {
        iconSource = (
          <Icon
            name="close"
            color={variables.brand_error}
            style={styles[`icon${sizeCls}`]}
          />
        );
      }
    } else {
      if (
        index < current ||
        status === 'finish' ||
        index === current ||
        status === 'process'
      ) {
        iconSource = (
          <Icon
            name="check"
            color={variables.color_icon_base}
            style={styles[`icon${sizeCls}`]}
          />
        );
      } else if (index > current || status === 'wait') {
        iconSource = (
          <Icon
            name="ellipsis"
            color={variables.color_icon_base}
            style={styles[`icon${sizeCls}`]}
          />
        );
        if (!!icon) {
          iconSource = icon;
        }
      } else if (status === 'error') {
        iconSource = (
          <Icon
            name="close"
            color={variables.color_icon_base}
            style={styles[`icon${sizeCls}`]}
          />
        );
      }
    }

    const isHorizontal = direction === 'horizontal';
    const parentStyle: StyleProp<ViewStyle> = isHorizontal
      ? { flexDirection: 'column' }
      : { flexDirection: 'row' };
    const childStyle: StyleProp<ViewStyle> = isHorizontal
      ? { flexDirection: 'row', flex: 1 }
      : { flexDirection: 'column' };
    let styleSuffix: string = '';
    if (isHorizontal) {
      styleSuffix = '_h';
    }

    return (
      <View style={parentStyle}>
        <View style={childStyle}>
          <View style={[styles[`head_default${sizeCls}`], styles[headCls]]}>
            {React.isValidElement(iconSource) ? iconSource : null}
          </View>
          {
            <View
              style={[
                styles[`tail_default${sizeCls}${styleSuffix}`],
                styles[tailTopCls],
              ]}
            />
          }
          {
            <View
              style={[
                styles[`tail_default${sizeCls}${styleSuffix}`],
                styles[tailBottomCls],
              ]}
            />
          }
        </View>
        <View style={styles[`content${sizeCls}${styleSuffix}`]}>
          {typeof title !== 'object' ? (
            <Text style={[styles[`title${sizeCls}`]]}>{title}</Text>
          ) : (
            <View>{title}</View>
          )}
          {typeof description !== 'object' ? (
            <Text style={[styles[`description${sizeCls}`]]}>{description}</Text>
          ) : (
            <View>{description}</View>
          )}
        </View>
      </View>
    );
  }
}
