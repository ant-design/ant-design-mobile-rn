import React from 'react'
import { LayoutChangeEvent, View } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import StepsItem from './StepsItem'
import StepsStyles, { StepsStyle } from './style/index'

export interface StepsProps extends WithThemeStyles<StepsStyle> {
  direction?: 'vertical' | 'horizontal'
  size?: string
  finishIcon?: string
  children: React.ReactElement<any>[]
  current?: number
}

export default class Steps extends React.Component<StepsProps, any> {
  static Step: typeof StepsItem

  static defaultProps = {
    direction: '',
  }

  constructor(props: StepsProps) {
    super(props)
    this.state = {
      wrapWidth: 0,
    }
  }

  onLayout = (e: LayoutChangeEvent) => {
    this.setState({
      wrapWidth: e.nativeEvent.layout.width,
    })
  }

  render() {
    const children = this.props.children
    const direction = this.props.direction === 'horizontal' ? 'row' : 'column'
    return (
      <WithTheme styles={this.props.styles} themeStyles={StepsStyles}>
        {(styles) => (
          <View
            style={{ flexDirection: direction }}
            onLayout={(e) => {
              this.onLayout(e)
            }}>
            {React.Children.map(children, (ele, idx) => {
              let errorTail = -1
              if (idx < children.length - 1) {
                const status = children[idx + 1].props.status
                if (status === 'error') {
                  errorTail = idx
                }
              }
              return React.cloneElement(ele as any, {
                index: idx,
                last: idx === (children as any[]).length - 1,
                direction: this.props.direction,
                current: this.props.current,
                width:
                  (1 / ((children as any[]).length - 1)) * this.state.wrapWidth,
                size: this.props.size,
                finishIcon: this.props.finishIcon,
                errorTail,
                styles,
              })
            })}
          </View>
        )}
      </WithTheme>
    )
  }
}

Steps.Step = StepsItem
