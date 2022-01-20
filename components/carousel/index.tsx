import React from 'react'
import {
  LayoutRectangle,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  TargetedEvent,
  TextInputScrollEventData,
  View,
  ViewStyle,
} from 'react-native'
import { WithThemeStyles } from '../style'
import CarouselStyles, { CarouselStyle } from './style/index'

export interface CarouselPropsType
  extends WithThemeStyles<CarouselStyle>,
    ScrollViewProps {
  accessibilityLabel?: string
  bounces?: boolean
  hasDots?: boolean
  pageStyle?: ViewStyle
  children?: React.ReactNode
  infinite?: boolean
  selectedIndex?: number
  dots?: boolean
  vertical?: boolean
  autoplay?: boolean
  autoplayInterval?: number
}

export interface CarouselProps extends CarouselPropsType {
  style?: StyleProp<ViewStyle>
  dotStyle?: StyleProp<ViewStyle>
  dotActiveStyle?: StyleProp<ViewStyle>
  pagination?: (props: any) => React.ReactNode
  afterChange?: (index: number) => void
}

export interface CarouselState {
  width: number
  selectedIndex: number
  isScrolling: boolean
  offset: { x: number; y: number }
  autoplayStop: boolean
  loopJump: boolean
  scrollStatus: string
  children: any
}

export interface PaginationProps {
  vertical?: boolean
  current: number
  count: number
  styles: ReturnType<typeof CarouselStyles>
  dotStyle?: StyleProp<ViewStyle>
  dotActiveStyle?: StyleProp<ViewStyle>
}
class Carousel extends React.Component<CarouselProps, CarouselState> {
  static defaultProps: CarouselProps = {
    accessibilityLabel: 'Carousel',
    bounces: true,
    hasDots: true,
    autoplay: false,
    autoplayInterval: 2000,
    selectedIndex: 0,
    // dots: defaultDot,
    dotStyle: {},
    dotActiveStyle: {},
    pageStyle: {},
  }

  private count: number
  scrollview: any

  constructor(props: CarouselProps) {
    super(props)
    const { children, selectedIndex } = this.props
    this.count = children ? React.Children.count(children) : 0
    const index =
      this.count > 1 ? Math.min(selectedIndex || 0, this.count - 1) : 0
    this.state = {
      width: 0,
      isScrolling: false,
      selectedIndex: index,
      offset: { x: 0, y: 0 },
      autoplayStop: false,
      loopJump: false,
      scrollStatus: '',
      children: props.children,
    }
  }

  componentDidMount() {
    this.autoplay()
  }

  componentWillReceiveProps(nextProps: CarouselProps) {
    const { children, infinite, selectedIndex } = nextProps
    const { width } = this.state
    if (selectedIndex !== this.state.selectedIndex) {
      const index =
        this.count > 1 ? Math.min(selectedIndex || 0, this.count - 1) : 0
      const changeOffset = width * (index + (infinite ? 1 : 0))
      this.setState(
        {
          selectedIndex: index,
          offset: { x: changeOffset, y: 0 },
        },
        this.updateOffset,
      )
    }
    if (children && React.Children.count(children) === this.count) return
    this.count = React.Children.count(children) || 1
    const offset = width * (infinite ? 1 : 0)
    this.setState(
      {
        autoplayStop: false,
        isScrolling: false,
        selectedIndex: 0,
        offset: { x: offset, y: 0 },
      },
      this.updateOffset,
    )
  }

  private autoplayTimer: NodeJS.Timeout
  private scrollEndTimter: NodeJS.Timeout
  private firstScrollTimer: NodeJS.Timeout

  componentWillUnmount() {
    this.autoplayTimer && clearTimeout(this.autoplayTimer)
    this.scrollEndTimter && clearTimeout(this.scrollEndTimter)
    this.firstScrollTimer && clearTimeout(this.firstScrollTimer)
  }
  componentDidUpdate(prevProps: CarouselProps) {
    if (
      prevProps.autoplay !== undefined &&
      prevProps.autoplay !== this.props.autoplay
    ) {
      this.autoplay()
    }
  }

  /**
   * go to index
   * @param index
   */
  public goTo(index: number) {
    this.scrollNextPage()
    // this.setState({ selectedIndex: index })
    // @ts-ignore
    // this.viewPager.current.setPage(index)
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

  onScrollEnd = (e: NativeSyntheticEvent<TextInputScrollEventData>) => {
    this.setState({ isScrolling: false })
    this.updateIndex(e.nativeEvent.contentOffset)
    this.scrollEndTimter = setTimeout(() => {
      this.autoplay()
      if (this.props.onMomentumScrollEnd) {
        // this.props.onMomentumScrollEnd(e, this.state)
      }
    })
  }

  onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { offset, selectedIndex } = this.state
    const previousOffset = offset.x
    const newOffset = e.nativeEvent.contentOffset.x
    if (
      previousOffset === newOffset &&
      (selectedIndex === 0 || selectedIndex === this.count - 1)
    ) {
      this.setState({
        isScrolling: false,
      })
    }
    if (this.props.onScrollEndDrag) {
      // this.props.onScrollEndDrag(e, this.state)
    }
  }

  onLayout = (
    e: NativeSyntheticEvent<TargetedEvent & { layout: LayoutRectangle }>,
  ) => {
    const { selectedIndex, infinite } = this.props
    const scrollIndex =
      this.count > 1 ? Math.min(selectedIndex || 0, this.count - 1) : 0
    const { width } = e.nativeEvent.layout
    const offset = width * (scrollIndex + (infinite ? 1 : 0))
    this.setState(
      {
        width,
        offset: { x: offset, y: 0 },
      },
      this.updateOffset,
    )
  }

  updateIndex = (currentOffset: { x: number; y: number }) => {
    const paramOffset = currentOffset
    let { selectedIndex, children } = this.state
    const { offset, width } = this.state
    const diff = currentOffset.x - offset.x
    if (!diff) return
    selectedIndex += Math.round(diff / width)
    let loopJump = false
    if (this.props.infinite) {
      loopJump = true
      if (selectedIndex <= -1) {
        selectedIndex = this.count - 1
        paramOffset.x = width * this.count
      } else if (selectedIndex >= this.count) {
        selectedIndex = 0
        paramOffset.x = width
      }
    }
    let childrenArray = React.Children.toArray(children)
    childrenArray.push(childrenArray[0])
    childrenArray.splice(0, 1)
    // childrenArray.unshift(childrenArray[childrenArray.length - 1])
    // childrenArray.pop()
    this.setState(
      {
        children: childrenArray,
        selectedIndex,
        offset: paramOffset,
        loopJump,
      },
      this.scrollLastPage,
    )
    if (this.props.afterChange) {
      this.props.afterChange(selectedIndex)
    }
  }

  updateOffset = () => {
    this.scrollview && this.scrollview.scrollTo(this.state.offset)
  }

  scrollNextPage = () => {
    const { selectedIndex, isScrolling, width } = this.state
    if (isScrolling || this.count < 2) return
    const diff = selectedIndex + 1 + (this.props.infinite ? 1 : 0)
    const offsetX = diff * width
    this.scrollview && this.scrollview.scrollTo({ x: offsetX, y: 0 })
    this.setState({
      isScrolling: true,
      autoplayStop: false,
    })
  }

  scrollLastPage = () => {
    const { selectedIndex, isScrolling, width } = this.state
    if (isScrolling || this.count < 2) return
    const diff = selectedIndex - 1 + (this.props.infinite ? 1 : 0)
    const offsetX = diff * width
    this.scrollview && this.scrollview.scrollTo({ x: offsetX, y: 0 })
    this.setState({
      isScrolling: true,
      autoplayStop: false,
    })
  }

  autoplay = () => {
    const { children, autoplay, autoplayInterval, infinite } = this.props
    const { isScrolling, autoplayStop, selectedIndex } = this.state
    if (!Array.isArray(children) || !autoplay || isScrolling || autoplayStop)
      return
    clearTimeout(this.autoplayTimer)
    this.autoplayTimer = setTimeout(() => {
      if (!infinite && selectedIndex === this.count - 1) {
        this.setState({
          autoplayStop: true,
        })
        return
      }
      this.scrollNextPage()
    }, autoplayInterval)
  }

  private timer: NodeJS.Timeout

  _renderScroll = (pages: React.ReactNode) => {
    return (
      <ScrollView
        {...this.props}
        horizontal={!this.props.vertical}
        ref={
          /* istanbul ignore next */ (ref) => {
            this.scrollview = ref
          }
        }
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        removeClippedSubviews={false}
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled={true}
        contentContainerStyle={this.props.style}
        contentOffset={this.state.offset}
        onScrollBeginDrag={this.onScrollBegin}
        onMomentumScrollEnd={this.onScrollEnd}
        onScrollEndDrag={this.onScrollEndDrag}
        onTouchStart={() => {
          this.setState({ scrollStatus: 'start' })
        }}
        onTouchEnd={() => {
          if (this.state.scrollStatus === 'start') {
            this.setState({ scrollStatus: 'end' })
          }
        }}
        onScroll={(e: any) => {
          if (this.state.scrollStatus === 'start') {
          } else if (this.state.scrollStatus === 'end') {
            this.setState({ scrollStatus: '' })
            this.onScrollEnd(JSON.parse(JSON.stringify(e)))
          }
        }}
        scrollEventThrottle={0}
        bounces={!!this.props.bounces}>
        {pages}
      </ScrollView>
    )
  }

  render() {
    const { infinite, accessibilityLabel, pageStyle } = this.props
    const { children, selectedIndex } = this.state
    if (!children) return null
    let pages
    const pageWidth = [pageStyle, { width: this.state.width }]
    if (this.count > 1) {
      let childrenArray = React.Children.toArray(children)

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
        {/* {hasDots && this._renderDots()} */}
      </View>
    )
  }
}

export default Carousel
