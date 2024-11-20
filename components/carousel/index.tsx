import React from 'react'
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  View,
} from 'react-native'
import devWarning from '../_util/devWarning'
import { WithTheme } from '../style'
import { CarouselProps, PaginationProps } from './PropsType'
import CarouselStyles from './style/index'
// fix: Compatible History
export { CarouselProps, PaginationProps } from './PropsType'

interface NativeScrollPoint {
  x: number
  y: number
}

export interface CarouselState {
  width: number
  height: number
  selectedIndex: number
  afterSelectedIndex: number
  offset: NativeScrollPoint
}

const defaultPagination = (props: PaginationProps) => {
  const { styles, current, vertical, count, dotStyle, dotActiveStyle } = props
  const positionStyle = vertical ? 'paginationY' : 'paginationX'
  const flexDirection = vertical ? 'column' : 'row'
  const arr: any = []
  for (let i = 0; i < count; i++) {
    arr.push(
      <View
        key={`dot-${i}`}
        style={[
          styles.pointStyle,
          styles.spaceStyle,
          dotStyle,
          i === current && styles.pointActiveStyle,
          i === current && dotActiveStyle,
        ]}
      />,
    )
  }
  return (
    <View style={[styles.pagination, styles[positionStyle]]}>
      <View style={{ flexDirection }}>{arr}</View>
    </View>
  )
}
class Carousel extends React.PureComponent<CarouselProps, CarouselState> {
  static defaultProps = {
    accessibilityLabel: 'Carousel',
    pageStyle: {},

    infinite: false,
    dots: true,
    autoplay: false,
    autoplayInterval: 3000,
    selectedIndex: 0,
    vertical: false,
    pagination: defaultPagination,
    dotStyle: {},
    dotActiveStyle: {},
  }

  private count: number
  private scrollview = React.createRef<ScrollView>()

  constructor(props: CarouselProps) {
    super(props)
    const { children, selectedIndex } = this.props
    this.count = children ? React.Children.count(children) : 0
    const index =
      (this.count > 1 && Math.min(selectedIndex as number, this.count - 1)) || 0
    this.state = {
      width: 0,
      height: 0,
      selectedIndex: index,
      afterSelectedIndex: -1,
      offset: { x: 0, y: 0 },
    }
  }

  componentDidMount() {
    this.autoplay()
  }

  UNSAFE_componentWillReceiveProps(nextProps: CarouselProps) {
    const { autoplay, children, infinite, vertical } = nextProps
    const { width, height } = this.state
    if (autoplay !== this.props.autoplay) {
      if (autoplay) {
        this.autoplay(autoplay)
      } else {
        this.clearTimeout()
      }
    }

    if (
      children &&
      React.Children.count(children) === this.count &&
      infinite === this.props.infinite
    ) {
      return
    }
    this.count = React.Children.count(children) || 1
    const offset = vertical
      ? { x: 0, y: height * (infinite ? 1 : 0) }
      : { x: width * (infinite ? 1 : 0), y: 0 }
    this.setState(
      {
        afterSelectedIndex: -1,
        selectedIndex: 0,
        offset: offset,
      },
      () => {
        this.scrollview?.current?.scrollTo(offset)
        this.autoplay()
      },
    )
  }

  private autoplayTimer: ReturnType<typeof setTimeout> | undefined
  private isScrolling: boolean | undefined

  componentWillUnmount() {
    this.clearTimeout()
  }

  /**
   * Plathform: iOS & android
   * 手势介入时: onScrollBeginDrag -> onScrollEndDrag
   * **/
  private onScrollBeginDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.isScrolling = true

    if (this.props.onScrollBeginDrag) {
      this.props.onScrollBeginDrag(e)
    }
  }
  private onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.isScrolling = false
    // fix: drag page in Perfect fit
    this.onScrollAnimationEnd(
      JSON.parse(JSON.stringify(e.nativeEvent.contentOffset)),
    )

    if (this.props.onScrollEndDrag) {
      this.props.onScrollEndDrag(e)
    }
  }

  /**
   * Plathform: web
   * 手势介入时: onTouchStart -> onScroll…onScroll(只要动了就会触发) -> onTouchEnd -> onScroll(动画结束时触发)
   * autoplay: [onScroll...onScroll] -> onScroll(动画结束时触发)
   * **/
  private onTouchStartForWeb = (e: GestureResponderEvent) => {
    this.isScrolling = true
    if (this.props.onTouchStart) {
      this.props.onTouchStart(e)
    }
  }
  private onTouchEndForWeb = (e: GestureResponderEvent) => {
    this.isScrolling = false
    if (this.props.onTouchEnd) {
      this.props.onTouchEnd(e)
    }
  }

  private onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    // Simulate infinite pages
    if (this.props.infinite) {
      const contentOffset = JSON.parse(
        JSON.stringify(e.nativeEvent.contentOffset),
      )
      const { width, height } = this.state

      const offset = this.props.vertical ? 'y' : 'x'
      const maxOffset =
        (this.props.vertical ? height : width) * (this.count + 1)

      if (contentOffset[offset] <= 0) {
        contentOffset[offset] = 0
        this.updateIndex(contentOffset)
      } else if (contentOffset[offset] >= maxOffset) {
        contentOffset[offset] = maxOffset
        this.updateIndex(contentOffset)
      }
    }

    this.onScrollAnimationEnd(
      JSON.parse(JSON.stringify(e.nativeEvent.contentOffset)),
    )

    if (this.props.onScroll) {
      this.props.onScroll(e)
    }
  }
  /**
   * 所有scroll事件结束时触发
   * **/
  private onScrollAnimationEnd = (currentOffset: NativeScrollPoint) => {
    const { x, y } = currentOffset
    const { width, height } = this.state
    // 🌟 fix: `onMomentumScrollEnd` & `onScrollAnimationEnd` not support for web & android 🌟
    const isScrollAnimationEnd =
      !this.isScrolling &&
      (this.props.vertical ? y / height : x / width) % 1 === 0

    if (isScrollAnimationEnd) {
      this.updateIndex(currentOffset)
      this.autoplay()
      if (this.props.onScrollAnimationEnd) {
        this.props.onScrollAnimationEnd()
      }
    }
  }

  private clearTimeout = () => {
    if (this.autoplayTimer) {
      clearTimeout(this.autoplayTimer)
      this.autoplayTimer = undefined
    }
  }

  private onLayout = (e: LayoutChangeEvent) => {
    const { selectedIndex, infinite, vertical } = this.props
    const scrollIndex =
      (this.count > 1 && Math.min(selectedIndex as number, this.count - 1)) || 0
    const { width, height } = e.nativeEvent.layout
    const offset = vertical
      ? {
          x: 0,
          y: height * (scrollIndex + (infinite && this.count > 1 ? 1 : 0)),
        }
      : {
          x: width * (scrollIndex + (infinite && this.count > 1 ? 1 : 0)),
          y: 0,
        }
    this.setState(
      {
        width,
        height,
        offset,
      },
      () => {
        // web & android
        this.scrollview?.current?.scrollTo({ ...offset, animated: false })
        this.autoplay()
      },
    )
  }

  updateIndex = (currentOffset: NativeScrollPoint) => {
    const paramOffset = currentOffset

    let { selectedIndex } = this.state
    const { offset, width, height } = this.state

    const diff = this.props.vertical
      ? paramOffset.y - offset.y
      : paramOffset.x - offset.x

    if (!diff) {
      return
    }
    selectedIndex += Math.round(diff / (this.props.vertical ? height : width))
    if (this.props.infinite) {
      if (selectedIndex <= -1) {
        selectedIndex = this.count - 1
        if (this.props.vertical) {
          paramOffset.y = height * this.count
        } else {
          paramOffset.x = width * this.count
        }
      } else if (selectedIndex >= this.count) {
        selectedIndex = 0
        if (this.props.vertical) {
          paramOffset.y = height
        } else {
          paramOffset.x = width
        }
      }

      if (this.props.vertical) {
        if (paramOffset.y === height) {
          this.scrollToStart()
        } else if (paramOffset.y === this.count * height) {
          this.scrollToEnd()
        }
      } else {
        if (paramOffset.x === width) {
          this.scrollToStart()
        } else if (paramOffset.x === this.count * width) {
          this.scrollToEnd()
        }
      }
    }

    this.setState(
      {
        selectedIndex,
        offset: paramOffset,
      },
      () => {
        if (
          this.props.afterChange &&
          this.state.selectedIndex !== this.state.afterSelectedIndex
        ) {
          this.setState({ afterSelectedIndex: selectedIndex }, () => {
            this.props.afterChange?.(selectedIndex)
          })
        }
      },
    )
  }

  scrollToStart = () => {
    this.scrollview?.current?.scrollTo({
      x: this.props.vertical ? 0 : this.state.width,
      y: this.props.vertical ? this.state.height : 0,
      animated: false,
    })
  }

  scrollToEnd = () => {
    this.scrollview?.current?.scrollTo({
      x: this.props.vertical ? 0 : this.state.width * this.count,
      y: this.props.vertical ? this.state.height * this.count : 0,
      animated: false,
    })
  }

  scrollNextPage = () => {
    const { selectedIndex, width, height } = this.state
    if (this.isScrolling || this.count < 2) {
      return
    }
    const diff = selectedIndex + 1 + (this.props.infinite ? 1 : 0)
    this.scrollview?.current?.scrollTo(
      this.props.vertical
        ? { x: 0, y: diff * height }
        : { x: diff * width, y: 0 },
    )
  }

  /**
   * go to index
   * @param index
   * @param animated
   */
  public goTo(index: number, animated?: boolean) {
    const { width, height } = this.state

    const count = this.props.infinite ? this.count - 1 : this.count
    if (typeof index !== 'number' || index < 0 || index > count) {
      return devWarning(
        false,
        'Carousel',
        `function goTo(index): ${'`index`'} must be between 0 - ${count} numbers`,
      )
    }

    this.scrollview?.current?.scrollTo({
      x: this.props.vertical
        ? 0
        : (index + (this.props.infinite ? 1 : 0)) * width,
      y: this.props.vertical
        ? (index + (this.props.infinite ? 1 : 0)) * height
        : 0,
      animated,
    })
  }

  lazyLoad(child: React.ReactNode, index: number) {
    const { infinite, lazy, renderLazyPlaceholder } = this.props
    const { selectedIndex } = this.state
    if (!lazy) {
      return child
    }
    if (
      lazy &&
      typeof lazy === 'boolean' &&
      selectedIndex === index - (infinite ? 1 : 0)
    ) {
      return child
    }

    if (
      lazy &&
      typeof lazy === 'function' &&
      lazy(index - (infinite ? 1 : 0))
    ) {
      return child
    }

    return renderLazyPlaceholder?.(index)
  }

  render() {
    const { children, dots, infinite, accessibilityLabel, pageStyle } =
      this.props
    const { width, height, selectedIndex } = this.state
    if (!children) {
      return null
    }
    let pages
    const pageWidth = [pageStyle, { width, height }]
    if (this.count > 1) {
      const childrenArray = React.Children.toArray(children)
      if (infinite) {
        childrenArray.unshift(childrenArray[this.count - 1])
        childrenArray.push(childrenArray[1])
      }
      pages = childrenArray.map((child, index) => (
        <View
          key={`carousel_${index}`}
          accessibilityLabel={`${accessibilityLabel}_${index}`}
          style={pageWidth}>
          {this.lazyLoad(child, index)}
        </View>
      ))
    } else {
      pages = <View style={pageWidth}>{children}</View>
    }
    return (
      <View onLayout={this.onLayout} style={this.props.style}>
        {this.renderScroll(pages)}
        {dots && this.renderDots(selectedIndex)}
      </View>
    )
  }

  private autoplay = (autoplay = this.props.autoplay) => {
    const { children, autoplayInterval } = this.props
    if (!Array.isArray(children) || !autoplay) {
      return
    }
    this.clearTimeout()
    this.autoplayTimer = setTimeout(() => {
      this.scrollNextPage()
    }, autoplayInterval)
  }

  private renderScroll = (pages: React.ReactNode) => {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled={true}
        disableIntervalMomentum={false}
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={Platform.OS === 'web' ? 0 : 16}
        {...this.props}
        style={undefined}
        ref={this.scrollview as any}
        horizontal={!this.props.vertical}
        pagingEnabled={true}
        contentOffset={this.state.offset}
        onScrollBeginDrag={this.onScrollBeginDrag}
        onScrollEndDrag={this.onScrollEndDrag}
        onScroll={this.onScroll}
        onTouchStart={this.onTouchStartForWeb}
        onTouchEnd={this.onTouchEndForWeb}
        onScrollAnimationEnd={undefined}>
        {pages}
      </ScrollView>
    )
  }

  private renderDots = (index: number) => {
    const { vertical, pagination, dotStyle, dotActiveStyle } = this.props
    if (!pagination) {
      return null
    }
    return (
      <WithTheme themeStyles={CarouselStyles} styles={this.props.styles}>
        {(styles) => {
          return pagination({
            styles,
            vertical,
            current: index,
            count: this.count,
            dotStyle,
            dotActiveStyle,
          })
        }}
      </WithTheme>
    )
  }
}

export default Carousel
