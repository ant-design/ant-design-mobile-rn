import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import Button from '../button/index'
import Flex from '../flex/index'
import { WithTheme, WithThemeStyles } from '../style'
import { getComponentLocale } from '../_util/getLocale'
import zh_CN from './locale/zh_CN'
import { PaginationPropsType, PaginationState } from './PropsType'
import PaginationStyles, { PaginationStyle } from './style/index'
import { LocaleContext } from '../locale-provider'

export interface PaginationNativeProps
  extends PaginationPropsType,
    WithThemeStyles<PaginationStyle> {
  style?: StyleProp<ViewStyle>
  indicatorStyle?: StyleProp<ViewStyle>
  locale?: {
    prevText: string
    nextText: string
  }
}

export default class Pagination extends React.Component<
  PaginationNativeProps,
  PaginationState
> {
  static defaultProps = {
    mode: 'button',
    current: 1,
    total: 0,
    simple: false,
    onChange: () => {},
    indicatorStyle: null,
  }

  static contextType = LocaleContext

  constructor(props: PaginationNativeProps) {
    super(props)
    this.state = {
      current: props.current,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: PaginationNativeProps) {
    if (nextProps.current !== this.state.current) {
      this.setState({
        current: nextProps.current,
      })
    }
  }

  onChange(p: number) {
    this.setState({
      current: p,
    })
    if (this.props.onChange) {
      this.props.onChange(p)
    }
  }

  render() {
    const { style, mode, total, simple } = this.props

    const locale = getComponentLocale(
      this.props,
      (this as any).context,
      'Pagination',
      () => zh_CN,
    )
    const { prevText, nextText } = locale

    return (
      <WithTheme styles={this.props.styles} themeStyles={PaginationStyles}>
        {(styles) => {
          const { current } = this.state
          const simpleItem = !simple ? (
            <Flex.Item>
              <View style={[styles.numberStyle]}>
                <Text style={[styles.activeTextStyle]}>{current}</Text>
                <Text style={[styles.totalStyle]}>/{total}</Text>
              </View>
            </Flex.Item>
          ) : (
            <Flex.Item />
          )
          let markup = (
            <Flex>
              <Flex.Item>
                <Button
                  disabled={current <= 1}
                  onPress={() => this.onChange(current - 1)}>
                  {prevText}
                </Button>
              </Flex.Item>
              {simpleItem}
              <Flex.Item>
                <Button
                  disabled={current >= total}
                  onPress={() => this.onChange(current + 1)}>
                  {nextText}
                </Button>
              </Flex.Item>
            </Flex>
          )
          if (mode === 'number') {
            markup = (
              <View style={[styles.numberStyle]}>
                <Text style={[styles.activeTextStyle]}>{current}</Text>
                <Text style={[styles.totalStyle]}>/{total}</Text>
              </View>
            )
          } else if (mode === 'pointer') {
            const arr: any = []
            for (let i = 0; i < total; i++) {
              arr.push(
                <View
                  key={`dot-${i}`}
                  // tslint:disable-next-line:jsx-no-multiline-js
                  style={[
                    styles.pointStyle,
                    styles.spaceStyle,
                    i + 1 === current && styles.pointActiveStyle,
                  ]}
                />,
              )
            }
            markup = (
              <View style={[styles.indicatorStyle, this.props.indicatorStyle]}>
                {arr}
              </View>
            )
          }
          return <View style={[styles.container, style]}>{markup}</View>
        }}
      </WithTheme>
    )
  }
}
