import React from 'react'
import { Animated, Dimensions, LayoutChangeEvent } from 'react-native'
import Carousel from '../carousel/index'
import { WithTheme, WithThemeStyles } from '../style'
import View from '../view'
import { DefaultTabBar } from './DefaultTabBar'
import { PropsType, TabData } from './PropsType'
import TabsStyles, { TabsStyle } from './style/tabs'

export interface StateType {
  currentTab: number
  scrollX: Animated.Value
  scrollValue: Animated.Value
  containerWidth: number
  containerHeight: number
  selectedIndex: number
}

let instanceId: number = 0
export interface TabsProps extends PropsType, WithThemeStyles<TabsStyle> {}
export class Tabs extends React.PureComponent<TabsProps, StateType> {
  static defaultProps: PropsType = {
    tabBarPosition: 'top',
    initialPage: 0,
    swipeable: true,
    animated: true,
    prerenderingSiblingsNumber: 1,
    tabs: [],
    destroyInactiveTab: false,
    usePaged: true,
    tabDirection: 'horizontal',
    distanceToChangeTab: 0.3,
    style: {},
  }
  static DefaultTabBar = DefaultTabBar

  carousel: Carousel | null

  protected instanceId: number
  protected prevCurrentTab: number
  protected tabCache: { [index: number]: React.ReactNode } = {}

  constructor(props: PropsType) {
    super(props)

    const width = Dimensions.get('window').width
    const pageIndex = this.getTabIndex(props)
    this.state = {
      currentTab: pageIndex,
      scrollX: new Animated.Value(pageIndex * width),
      scrollValue: new Animated.Value(pageIndex),
      containerWidth: width,
      containerHeight: 0,
      selectedIndex: 0,
    }
    this.instanceId = instanceId++
  }

  componentDidMount() {
    this.prevCurrentTab = this.state.currentTab
    this.state.scrollX.addListener(({ value }) => {
      const scrollValue = value / this.state.containerWidth
      this.state.scrollValue.setValue(scrollValue)
    })
  }

  renderContent = (getSubElements = this.getSubElements()) => {
    const { tabs, usePaged, destroyInactiveTab } = this.props
    const { containerHeight = 0, containerWidth = 0, currentTab } = this.state
    const content = tabs.map((tab, index) => {
      const key = tab.key || `tab_${index}`

      // update tab cache
      if (this.shouldRenderTab(index)) {
        this.tabCache[index] = this.getSubElement(tab, index, getSubElements)
      } else if (destroyInactiveTab) {
        this.tabCache[index] = undefined
      }

      return (
        <View
          key={key}
          style={[
            { width: containerWidth },
            containerHeight ? { height: containerHeight } : { flex: 1 },
          ]}>
          {this.tabCache[index]}
        </View>
      )
    })

    return (
      <Carousel
        key="$content"
        keyboardDismissMode="on-drag"
        pagination={() => null}
        selectedIndex={currentTab}
        afterChange={(index: number) => {
          typeof this.props.onChange === 'function' &&
            this.props.onChange(tabs[index], index)

          this.setState({ currentTab: index }, () => {
            this.state.scrollX.setValue(index * this.state.containerWidth)
          })
        }}
        scrollEnabled={this.props.swipeable || usePaged}
        style={{
          height: containerHeight,
          width: containerWidth,
        }}
        ref={(ref) => (this.carousel = ref)}>
        {content}
      </Carousel>
    )
  }

  // 在ScrollView下会拿不到正确高度
  // 所以先展示第一个拿到高度后再以第一个高度为基准渲染整个Carousel
  handleLayout1 = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout
    requestAnimationFrame(() => {
      this.setState({ containerHeight: height })
    })
  }

  handleLayout2 = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout
    requestAnimationFrame(() => {
      this.scrollTo(this.state.currentTab, false)
    })
    if (Math.round(width) !== Math.round(this.state.containerWidth)) {
      this.setState({ containerWidth: width })
    }
  }

  scrollTo = (index: number, animated = true) => {
    if (this.carousel) {
      this.carousel.goTo(index, animated)
    }
  }

  render() {
    const {
      children,
      tabBarPosition,
      noRenderContent,
      keyboardShouldPersistTaps,
    } = this.props
    const { scrollX, scrollValue, containerWidth, containerHeight } = this.state

    const tabBarProps = {
      ...this.getTabBarBaseProps(),

      keyboardShouldPersistTaps,
      scrollX: scrollX,
      scrollValue: scrollValue,
      containerWidth: containerWidth,
    }

    return (
      <WithTheme styles={this.props.styles} themeStyles={TabsStyles}>
        {(styles) => {
          const content = [
            <View
              key="$tabbar"
              style={
                tabBarPosition === 'top'
                  ? styles.topTabBarSplitLine
                  : styles.bottomTabBarSplitLine
              }>
              {this.renderTabBar(tabBarProps, DefaultTabBar)}
            </View>,
            !noRenderContent && this.renderContent(),
          ]

          if (containerHeight === 0 && Array.isArray(children)) {
            return (
              <View
                style={[
                  { flexDirection: 'row' },
                  styles.container,
                  this.props.style,
                ]}
                onLayout={this.handleLayout1}>
                {React.Children.toArray(children)[0]}
              </View>
            )
          }

          return (
            <View
              style={[styles.container, this.props.style]}
              onLayout={this.handleLayout2}>
              {tabBarPosition === 'top' ? content : content.reverse()}
            </View>
          )
        }}
      </WithTheme>
    )
  }
  getTabIndex(props: PropsType) {
    const { page, initialPage, tabs } = props
    const param = (page !== undefined ? page : initialPage) || 0

    let index = 0
    if (typeof (param as any) === 'string') {
      tabs.forEach((t, i) => {
        if (t.key === param) {
          index = i
        }
      })
    } else {
      index = (param as number) || 0
    }
    return index < 0 ? 0 : index
  }

  isTabVertical = (direction = this.props.tabDirection) =>
    direction === 'vertical'

  shouldRenderTab = (idx: number) => {
    const { prerenderingSiblingsNumber = 0 } = this.props
    const { currentTab = 0 } = this.state

    return (
      currentTab - prerenderingSiblingsNumber <= idx &&
      idx <= currentTab + prerenderingSiblingsNumber
    )
  }

  UNSAFE_componentWillReceiveProps(nextProps: PropsType) {
    if (this.props.page !== nextProps.page && nextProps.page !== undefined) {
      this.goToTab(this.getTabIndex(nextProps))
    }
  }

  componentDidUpdate() {
    this.prevCurrentTab = this.state.currentTab
  }

  getOffsetIndex = (
    current: number,
    width: number,
    threshold = this.props.distanceToChangeTab || 0,
  ) => {
    const ratio = Math.abs(current / width)
    const direction = ratio > this.state.currentTab ? '<' : '>'
    const index = Math.floor(ratio)
    switch (direction) {
      case '<':
        return ratio - index > threshold ? index + 1 : index
      case '>':
        return 1 - ratio + index > threshold ? index : index + 1
      default:
        return Math.round(ratio)
    }
  }

  goToTab(index: number) {
    if (this.carousel) {
      this.carousel.goTo(index)
    }
    this.setState({ currentTab: index }, () => {
      this.state.scrollX.setValue(index * this.state.containerWidth)
    })
  }

  tabClickGoToTab(index: number) {
    this.goToTab(index)
  }

  getTabBarBaseProps() {
    const { currentTab } = this.state

    const {
      animated,
      onTabClick,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarPosition,
      tabBarTextStyle,
      tabBarUnderlineStyle,
      renderTab,
      renderUnderline,
      tabs,
    } = this.props
    return {
      activeTab: currentTab,
      animated: !!animated,
      goToTab: this.tabClickGoToTab.bind(this),
      onTabClick,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarPosition,
      tabBarTextStyle,
      tabBarUnderlineStyle,
      renderTab,
      renderUnderline,
      tabs,
      instanceId: this.instanceId,
    }
  }

  renderTabBar(tabBarProps: any, DefaultTabBar: React.ComponentClass) {
    const { renderTabBar } = this.props
    if (renderTabBar === false) {
      return null
    } else if (renderTabBar) {
      return renderTabBar(tabBarProps)
    } else {
      return <DefaultTabBar {...tabBarProps} />
    }
  }

  getSubElements = () => {
    const { children } = this.props
    const subElements: { [key: string]: React.ReactNode } = {}

    return (defaultPrefix: string = '$i$-') => {
      if (Array.isArray(children)) {
        children.forEach((child: any, index) => {
          if (child.key) {
            subElements[child.key] = child
          }
          subElements[`${defaultPrefix}${index}`] = child
        })
      }
      return subElements
    }
  }

  getSubElement(
    tab: TabData,
    index: number,
    subElements: (
      defaultPrefix: string,
      allPrefix: string,
    ) => { [key: string]: any },
    defaultPrefix: string = '$i$-',
    allPrefix: string = '$ALL$',
  ) {
    const key = tab.key || `${defaultPrefix}${index}`
    const elements = subElements(defaultPrefix, allPrefix)
    let component = elements[key] || elements[allPrefix]
    if (component instanceof Function) {
      component = component(tab, index)
    }
    return component || null
  }
}
