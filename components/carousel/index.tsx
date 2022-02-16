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
import { WithThemeStyles } from '../style'
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
  isScrolling: boolean
  scrollStatus: string
  offset: NativeScrollPoint
  loopJump: boolean
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
class Carousel extends React.Component<CarouselProps, CarouselState> {
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
  scrollview = React.createRef<ScrollView>()
  viewPager = React.createRef<typeof ScrollView>()

  constructor(props: CarouselProps) {
    super(props)
    const { children, selectedIndex } = this.props
    this.count = children ? React.Children.count(children) : 0
    const index =
      this.count > 1 ? Math.min(selectedIndex as number, this.count - 1) : 0
    this.state = {
      width: 0,
      height: 0,
      isScrolling: false,
      scrollStatus: '',
      selectedIndex: index,
      offset: { x: 0, y: 0 },
      loopJump: false,
    }
  }

  componentDidMount() {
    this.autoplay()
  }

  componentWillReceiveProps(nextProps: CarouselProps) {
    const { children, infinite, selectedIndex, vertical } = nextProps
    const { width, height } = this.state
    if (selectedIndex !== this.state.selectedIndex) {
      const index =
        this.count > 1 ? Math.min(selectedIndex as number, this.count - 1) : 0
      const changeOffset = vertical
        ? { x: 0, y: height * (index + (infinite ? 1 : 0)) }
        : { x: width * (index + (infinite ? 1 : 0)), y: 0 }
      this.setState({
        selectedIndex: index,
        offset: changeOffset,
      })
    }
    if (children && React.Children.count(children) === this.count) return
    this.count = React.Children.count(children) || 1
    const offset = vertical
      ? { x: 0, y: height * (infinite ? 1 : 0) }
      : { x: width * (infinite ? 1 : 0), y: 0 }
    this.setState({
      isScrolling: false,
      selectedIndex: 0,
      offset: offset,
    })
  }

  private autoplayTimer: NodeJS.Timeout
  private scrollEndTimter: NodeJS.Timeout

  componentWillUnmount() {
    this.autoplayTimer && clearTimeout(this.autoplayTimer)
    this.scrollEndTimter && clearTimeout(this.scrollEndTimter)
  }

  /**
   * go to index
   * @param index
   */
  public goTo(index: number) {
    this.scrollNextPage()
    this.setState({ selectedIndex: index })
    // @ts-ignore
    this.viewPager.current.setPage(index)
  }

  onScrollBegin = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.setState(
      {
        isScrolling: true,
      },
      () => {
        if (this.props.onScrollBeginDrag) {
          // this.props.onScrollBeginDrag(e, this.state)
          this.props.onScrollBeginDrag(e)
        }
      },
    )
  }

  // TODO: 给android专门定一个onAndroidScrollEnd方法
  onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    e.persist?.()
    this.setState({ isScrolling: false }, () => {
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
          // this.props.onMomentumScrollEnd(e, this.state)
          this.props.onMomentumScrollEnd(e)
        }
      }, 50) //idle time
    })
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
    this.setState({ scrollStatus: 'start', isScrolling: true })
  }

  onTouchEndForWeb = () => {
    if (this.state.scrollStatus === 'start') {
      this.setState({ scrollStatus: 'end', isScrolling: false })
    }
  }

  onScrollForWeb = (e: any) => {
    if (this.state.scrollStatus === 'end') {
      this.setState({ scrollStatus: '' }, () => {
        this.onScrollEnd(JSON.parse(JSON.stringify(e)))
      })
    }
  }

  onLayout = (
    e: NativeSyntheticEvent<TargetedEvent & { layout: LayoutRectangle }>,
  ) => {
    const { selectedIndex, infinite, vertical } = this.props
    const scrollIndex =
      this.count > 1 ? Math.min(selectedIndex as number, this.count - 1) : 0
    const { width, height } = e.nativeEvent.layout
    const offset = vertical
      ? { x: 0, y: height * (scrollIndex + (infinite ? 1 : 0)) }
      : { x: width * (scrollIndex + (infinite ? 1 : 0)), y: 0 }
    this.setState(
      {
        width,
        height,
        offset,
      },
      () => {
        // web
        this.scrollview?.current?.scrollTo({ ...offset, animated: false })
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

    if (!diff) return
    selectedIndex += Math.round(diff / (this.props.vertical ? height : width))
    let loopJump = false
    if (this.props.infinite) {
      loopJump = true
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

    this.setState({
      selectedIndex,
      offset: paramOffset,
      loopJump,
      scrollStatus: 'end',
    })
    if (this.props.afterChange) {
      this.props.afterChange(selectedIndex)
    }
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
    if (isScrolling || this.count < 2) return
    const diff = selectedIndex + 1 + (this.props.infinite ? 1 : 0)
    this.scrollview?.current?.scrollTo(
      this.props.vertical
        ? { x: 0, y: diff * height }
        : { x: diff * width, y: 0 },
    )

    this.setState(
      {
        isScrolling: true,
        scrollStatus: 'end',
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

  autoplay = () => {
    const { children, autoplay, autoplayInterval, infinite } = this.props
    const { isScrolling, selectedIndex } = this.state
    if (!Array.isArray(children) || !autoplay || isScrolling) return
    clearTimeout(this.autoplayTimer)
    this.autoplayTimer = setTimeout(() => {
      if (!infinite && selectedIndex === this.count - 1) {
        return
      }
      this.scrollNextPage()
    }, autoplayInterval)
  }

  _renderScroll = (pages: React.ReactNode) => {
    return (
      <ScrollView
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

  _renderDots = () => {
    return null
  }

  render() {
    const { children, dots, infinite, accessibilityLabel, pageStyle } =
      this.props
    if (!children) return null
    let pages
    const pageWidth = [pageStyle, { width: this.state.width }]
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
        {this._renderScroll(pages)}
        {dots && this._renderDots()}
      </View>
    )
  }
}

export default Carousel
