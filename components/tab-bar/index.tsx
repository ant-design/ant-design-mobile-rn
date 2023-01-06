import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { WithTheme } from '../style'
import { TabBarProps } from './PropsType'
import TabBarStyles, { TabBarStyle } from './style/index'
import TabBarItem from './TabBarItem'
export interface TabBarNativeProps extends TabBarProps {
  styles?: TabBarStyle
  children: React.ReactElement<TabBarItem>[] | React.ReactElement<TabBarItem>
}

class TabBar extends React.Component<TabBarNativeProps, any> {
  static defaultProps = {
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888',
  }

  static Item = TabBarItem

  getPanes(styles: ReturnType<typeof TabBarStyles>, content: boolean) {
    const { tintColor, unselectedTintColor, children } = this.props
    // ios 规则： selected 为多个则只选中最后一个， selected 为 0 个则选中第一个;
    let selectedIndex = 0
    ;[].concat(children as any).forEach((child: any, idx: number) => {
      if (child.props.selected) {
        selectedIndex = idx
      }
    })
    const newChildren: any[] = []
    React.Children.map(children, (child: any, idx) => {
      if (content && selectedIndex === idx) {
        newChildren.push(
          <View
            key={idx}
            style={[
              styles.contentItem,
              idx === selectedIndex ? styles.contentItemSelected : undefined,
            ]}>
            {child.props.children}
          </View>,
        )
      } else {
        newChildren.push(
          React.cloneElement(child, {
            key: idx,
            tintColor,
            unselectedTintColor,
            styles,
          }),
        )
      }
    })
    if (content) {
      return newChildren.filter((_, i) => i === selectedIndex)
    }

    return newChildren
  }

  render() {
    const style = { backgroundColor: this.props.barTintColor }
    return (
      <SafeAreaView style={[{ flex: 1 }, style]}>
        <WithTheme styles={this.props.styles} themeStyles={TabBarStyles}>
          {(styles) => (
            <View style={styles.tabbar}>
              <View style={styles.content}>{this.getPanes(styles, true)}</View>
              <View style={[style, styles.tabs]}>
                {this.getPanes(styles, false)}
              </View>
            </View>
          )}
        </WithTheme>
      </SafeAreaView>
    )
  }
}

export default TabBar
