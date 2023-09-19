import React, { isValidElement } from 'react'
import {
  Animated,
  Dimensions,
  LayoutChangeEvent,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { Theme, WithTheme, WithThemeStyles } from '../style'
import { TabBarPropsType, TabData } from './PropsType'
import TabBarStyles, { TabBarStyle } from './style'

const WINDOW_WIDTH = Dimensions.get('window').width

export interface PropsType
  extends TabBarPropsType,
    WithThemeStyles<TabBarStyle> {
  scrollValue?: any
  tabStyle?: ViewStyle
  tabsContainerStyle?: ViewStyle
  keyboardShouldPersistTaps?: boolean
}

export interface StateType {
  _leftTabUnderline: Animated.Value
  _widthTabUnderline: Animated.Value
  _containerWidth: number
  _tabContainerWidth: number
}
export class DefaultTabBar extends React.PureComponent<PropsType, StateType> {
  static defaultProps = {
    animated: true,
    tabs: [],
    goToTab: () => {},
    activeTab: 0,
    page: 5,
    tabBarUnderlineStyle: {},
    tabBarBackgroundColor: '#fff',
    tabBarActiveTextColor: '',
    tabBarInactiveTextColor: '',
    tabBarTextStyle: {},
  }

  _tabsMeasurements: any[] = []
  _tabContainerMeasurements: any
  _containerMeasurements: any
  _scrollView: ScrollView
  _newLineLeft: number

  constructor(props: PropsType) {
    super(props)
    this.state = {
      _leftTabUnderline: new Animated.Value(0),
      _widthTabUnderline: new Animated.Value(0),
      _containerWidth: WINDOW_WIDTH,
      _tabContainerWidth: WINDOW_WIDTH,
    }
  }

  componentDidMount() {
    this.props.scrollValue.addListener(this.updateView)
  }

  updateView = (offset: any) => {
    const position = Math.floor(offset.value)
    const pageOffset = offset.value % 1
    const tabCount = this.props.tabs.length
    const lastTabPosition = tabCount - 1

    if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
      return
    }

    if (
      this.necessarilyMeasurementsCompleted(
        position,
        position === lastTabPosition,
      )
    ) {
      this.updateTabPanel(position, pageOffset)
      this.updateTabUnderline(position, pageOffset, tabCount)
    }
  }

  necessarilyMeasurementsCompleted(position: number, isLastTab: boolean) {
    return (
      this._tabsMeasurements[position] &&
      (isLastTab || this._tabsMeasurements[position + 1]) &&
      this._tabContainerMeasurements &&
      this._containerMeasurements
    )
  }

  updateTabPanel(position: number, pageOffset: number) {
    const containerWidth = this._containerMeasurements.width
    const tabWidth = this._tabsMeasurements[position].width
    const nextTabMeasurements = this._tabsMeasurements[position + 1]
    const nextTabWidth = (nextTabMeasurements && nextTabMeasurements.width) || 0
    const tabOffset = this._tabsMeasurements[position].left
    const absolutePageOffset = pageOffset * tabWidth
    let newScrollX = tabOffset + absolutePageOffset

    newScrollX -=
      (containerWidth -
        (1 - pageOffset) * tabWidth -
        pageOffset * nextTabWidth) /
      2
    newScrollX = newScrollX >= 0 ? newScrollX : 0

    if (Platform.OS === 'android') {
      this._scrollView?.scrollTo({ x: newScrollX, y: 0 })
    } else {
      const rightBoundScroll =
        this._tabContainerMeasurements.width - this._containerMeasurements.width
      newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX
      this._scrollView?.scrollTo({ x: newScrollX, y: 0 })
    }
  }

  updateTabUnderline(position: number, pageOffset: number, tabCount: number) {
    if (position >= 0 && position <= tabCount - 1) {
      const nowLeft = this._tabsMeasurements[position].left
      const nowRight = this._tabsMeasurements[position].right
      const nextTabLeft = this._tabsMeasurements[position + 1]?.left || 0
      const nextTabRight = this._tabsMeasurements[position + 1]?.right || 0

      const newLineLeft = pageOffset * nextTabLeft + (1 - pageOffset) * nowLeft
      const newLineRight =
        pageOffset * nextTabRight + (1 - pageOffset) * nowRight

      if (this._newLineLeft === newLineLeft) {
        return
      }
      this._newLineLeft = newLineLeft
      if (this.props.animated) {
        Animated.timing(this.state._leftTabUnderline, {
          toValue: newLineLeft,
          useNativeDriver: false,
        }).start()
        Animated.timing(this.state._widthTabUnderline, {
          toValue: newLineRight - newLineLeft,
          useNativeDriver: false,
        }).start()
      } else {
        this.state._leftTabUnderline.setValue(newLineLeft)
        this.state._widthTabUnderline.setValue(newLineRight - newLineLeft)
      }
    }
  }

  onPress = (index: number) => {
    const { goToTab, onTabClick, tabs } = this.props
    // tslint:disable-next-line:no-unused-expression
    onTabClick && onTabClick(tabs[index], index)
    // tslint:disable-next-line:no-unused-expression
    goToTab && goToTab(index)
  }

  renderTab = (
    tab: TabData,
    index: number,
    width: number,
    onLayoutHandler: any,
    styles: ReturnType<typeof TabBarStyles>,
    theme: Theme,
  ) => {
    const {
      tabBarActiveTextColor: activeTextColor,
      tabBarInactiveTextColor: inactiveTextColor,
      tabBarTextStyle: textStyle,
      activeTab,
      renderTab,
    } = this.props
    const isTabActive = activeTab === index
    const textColor = isTabActive
      ? activeTextColor || theme.activeTextColor
      : inactiveTextColor || theme.inactiveTextColor

    return (
      <TouchableOpacity
        activeOpacity={1}
        key={`${tab.title}_${index}`}
        accessible
        accessibilityRole="button"
        onPress={() => this.onPress(index)}
        onLayout={onLayoutHandler}>
        <View
          style={{
            ...StyleSheet.flatten(styles.tab),
            minWidth: width,
            ...this.props.tabStyle,
          }}>
          {renderTab ? (
            renderTab(tab)
          ) : isValidElement(tab.title) ? (
            tab.title
          ) : (
            <Text
              style={[
                {
                  color: textColor,
                  ...StyleSheet.flatten(styles.textStyle),
                },
                textStyle,
              ]}>
              {tab.title}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    )
  }

  measureTab = (page: number, event: any) => {
    const { x, width, height } = event.nativeEvent.layout
    this._tabsMeasurements[page] = { left: x, right: x + width, width, height }
    this.updateView({ value: this.props.scrollValue._value })
  }

  getTabs = (styles: TabBarStyle, theme: Theme) => {
    const { tabs, page = 0 } = this.props
    return tabs.map((name, index) => {
      let tab = { title: name } as TabData
      if (tabs.length - 1 >= index) {
        tab = tabs[index]
      }
      const tabWidth = this.state._containerWidth / Math.min(page, tabs.length)

      return this.renderTab(
        tab,
        index,
        tabWidth,
        this.measureTab.bind(this, index),
        styles,
        theme,
      )
    })
  }

  getUnderLine = (styles: TabBarStyle) => {
    const { tabBarUnderlineStyle, renderUnderline } = this.props

    const tabUnderlineStyle = {
      position: 'absolute',
      bottom: 0,
      ...StyleSheet.flatten(styles.underline),
      ...StyleSheet.flatten(tabBarUnderlineStyle),
    }

    const dynamicTabUnderline = {
      left: this.state._leftTabUnderline,
      width: this.state._widthTabUnderline,
    }
    const underlineProps = {
      style: {
        ...dynamicTabUnderline,
        ...tabUnderlineStyle,
      },
    }
    return renderUnderline ? (
      renderUnderline(underlineProps.style)
    ) : (
      //@ts-ignore
      <Animated.View {...underlineProps} />
    )
  }

  render() {
    const {
      tabs,
      page = 0,
      tabBarBackgroundColor,
      tabsContainerStyle,
      keyboardShouldPersistTaps,
    } = this.props
    return (
      <WithTheme styles={this.props.styles} themeStyles={TabBarStyles}>
        {(styles, theme) => {
          return (
            <View
              style={[
                styles.container,
                {
                  backgroundColor: tabBarBackgroundColor,
                },
              ]}
              onLayout={this.onContainerLayout}>
              <ScrollView
                ref={(scrollView: any) => {
                  this._scrollView = scrollView
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                directionalLockEnabled
                bounces={false}
                scrollsToTop={false}
                scrollEnabled={tabs.length > page}
                keyboardShouldPersistTaps={keyboardShouldPersistTaps}
                renderToHardwareTextureAndroid>
                <View
                  style={[
                    styles.tabs,
                    tabsContainerStyle,
                    { backgroundColor: tabBarBackgroundColor },
                  ]}
                  onLayout={this.onTabContainerLayout}>
                  {this.getTabs(styles, theme)}
                  {this.getUnderLine(styles)}
                </View>
              </ScrollView>
            </View>
          )
        }}
      </WithTheme>
    )
  }

  onTabContainerLayout = (e: LayoutChangeEvent) => {
    this._tabContainerMeasurements = e.nativeEvent.layout
    const width = this._tabContainerMeasurements.width
    // fix: https://github.com/ant-design/ant-design-mobile-rn/issues/162
    // if (width < WINDOW_WIDTH) {
    // width = WINDOW_WIDTH;
    // }
    this.setState({ _tabContainerWidth: width })
    this.updateView({ value: this.props.scrollValue._value })
  }

  onContainerLayout = (e: LayoutChangeEvent) => {
    this._containerMeasurements = e.nativeEvent.layout
    this.setState({ _containerWidth: this._containerMeasurements.width })
    this.updateView({ value: this.props.scrollValue._value })
  }
}
