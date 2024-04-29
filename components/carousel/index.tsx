import React from 'react'
import {
  LayoutRectangle,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import devWarning from '../_util/devWarning'
import { WithTheme, WithThemeStyles } from '../style'
import CarouselStyles, { CarouselStyle } from './style/index'

export interface CarouselPropsType
  extends WithThemeStyles<CarouselStyle>,
    ScrollViewProps {
  accessibilityLabel?: string
  pageStyle?: ViewStyle
  children?: React.ReactNode

  selectedIndex?: number
  dots?: boolean
  vertical?: boolean
  autoplay?: boolean
  autoplayInterval?: number
  infinite?: boolean
}

export interface CarouselProps extends CarouselPropsType {
  style?: StyleProp<ViewStyle>
  dotStyle?: StyleProp<ViewStyle>
  dotActiveStyle?: StyleProp<ViewStyle>
  pagination?: (props: PaginationProps) => React.ReactNode
  afterChange?: (index: number) => void
}

interface NativeScrollPoint {
  x: number
  y: number
}
interface TargetedEvent {
  target: number
}

export interface CarouselState {
  width: number
  height: number
  selectedIndex: number
  afterSelectedIndex: number
  isScrolling: boolean
  offset: NativeScrollPoint
}

export interface PaginationProps {
  vertical?: boolean
  current: number
  count: number
  styles: ReturnType<typeof CarouselStyles>
  dotStyle?: StyleProp<ViewStyle>
  dotActiveStyle?: StyleProp<ViewStyle>
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
  static defaultProps: CarouselProps = {
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
      isScrolling: false,
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
        this.autoplay()
      } else {
        this.autoplayTimer && clearTimeout(this.autoplayTimer)
      }
    }
    // selectedIndex only take effect once
    // ...

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
        isScrolling: false,
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

  private autoplayTimer: ReturnType<typeof setTimeout>
  private scrollEndTimter: ReturnType<typeof setTimeout>

  componentWillUnmount() {
    this.autoplayTimer && clearTimeout(this.autoplayTimer)
    this.scrollEndTimter && clearTimeout(this.scrollEndTimter)
  }

  onScrollBegin = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.setState(
      {
        isScrolling: true,
      },
      () => {
        if (this.props.onScrollBeginDrag) {
          this.props.onScrollBeginDrag(e)
        }
      },
    )
  }

  onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    e.persist?.()
    // android/web hack
    if (!e.nativeEvent.contentOffset) {
      //@ts-ignore
      const { position } = e.nativeEvent
      e.nativeEvent.contentOffset = {
        x: this.props.vertical ? 0 : position * this.state.width,
        y: this.props.vertical ? position * this.state.height : 0,
      }
    }
    this.autoplay()
    clearTimeout(this.scrollEndTimter)
    this.scrollEndTimter = setTimeout(() => {
      this.updateIndex(e.nativeEvent.contentOffset)

      if (this.props.onMomentumScrollEnd) {
        this.props.onMomentumScrollEnd(e)
      }
    }, 50) //idle time
  }

  onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    e.persist?.()
    const { offset, selectedIndex } = this.state
    const previousOffset = offset
    const newOffset = e.nativeEvent.contentOffset
    if (
      (this.props.vertical
        ? previousOffset.y === newOffset.y
        : previousOffset.x === newOffset.x) &&
      (selectedIndex === 0 || selectedIndex === this.count - 1)
    ) {
      this.setState({
        isScrolling: false,
      })
    }
    if (this.props.onScrollEndDrag) {
      this.props.onScrollEndDrag(e)
    }
  }

  onTouchStartForWeb = () => {
    this.setState({ isScrolling: true })
  }

  onTouchEndForWeb = () => {
    this.autoplay()
  }

  onScrollForWeb = (e: any) => {
    this.onScrollEnd(JSON.parse(JSON.stringify(e)))
  }

  onLayout = (
    e: NativeSyntheticEvent<TargetedEvent & { layout: LayoutRectangle }>,
  ) => {
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
        // web
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
    const { selectedIndex, isScrolling, width, height } = this.state
    if (isScrolling || this.count < 2) {
      return
    }
    const diff = selectedIndex + 1 + (this.props.infinite ? 1 : 0)
    this.scrollview?.current?.scrollTo(
      this.props.vertical
        ? { x: 0, y: diff * height }
        : { x: diff * width, y: 0 },
    )

    this.setState(
      {
        isScrolling: true,
      },
      () => {
        if (Platform.OS !== 'ios') {
          this.onScrollEnd({
            nativeEvent: {
              // @ts-ignore
              position: diff,
            },
          })
        }
      },
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
          {child}
        </View>
      ))
    } else {
      pages = <View style={pageWidth}>{children}</View>
    }
    return (
      <View onLayout={this.onLayout}>
        {this.renderScroll(pages)}
        {dots && this.renderDots(selectedIndex)}
      </View>
    )
  }

  private autoplay = () => {
    this.setState({ isScrolling: false }, () => {
      const { children, autoplay, autoplayInterval, infinite } = this.props
      const { selectedIndex } = this.state
      if (!Array.isArray(children) || !autoplay) {
        return
      }
      clearTimeout(this.autoplayTimer)
      this.autoplayTimer = setTimeout(() => {
        if (!infinite && selectedIndex + 1 === this.count - 1) {
          return
        }
        this.scrollNextPage()
      }, autoplayInterval)
    })
  }

  private renderScroll = (pages: React.ReactNode) => {
    return (
      <ScrollView
        nestedScrollEnabled
        {...this.props}
        horizontal={!this.props.vertical}
        ref={this.scrollview as any}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        removeClippedSubviews={false}
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled={true}
        contentOffset={this.state.offset}
        onScrollBeginDrag={this.onScrollBegin}
        onMomentumScrollEnd={this.onScrollEnd}
        onScrollEndDrag={this.onScrollEndDrag}
        {...(Platform.OS === 'web'
          ? {
              onTouchStart: this.onTouchStartForWeb,
              onTouchEnd: this.onTouchEndForWeb,
              onScroll: this.onScrollForWeb,
              scrollEventThrottle: 0,
            }
          : {})}>
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
