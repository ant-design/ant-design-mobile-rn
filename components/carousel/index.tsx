import React from 'react'
import {
  LayoutRectangle,
  NativeScrollEvent,
  NativeSyntheticEvent,
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
  selectedIndex: number
  isScrolling: boolean
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
  scrollview: any
  viewPager = React.createRef<typeof ScrollView>()

  constructor(props: CarouselProps) {
    super(props)
    const { children, selectedIndex } = this.props
    this.count = children ? React.Children.count(children) : 0
    const index =
      this.count > 1 ? Math.min(selectedIndex as number, this.count - 1) : 0
    this.state = {
      width: 0,
      isScrolling: false,
      selectedIndex: index,
      offset: { x: 0, y: 0 },
      loopJump: false,
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
        this.count > 1 ? Math.min(selectedIndex as number, this.count - 1) : 0
      const changeOffset = width * (index + (infinite ? 1 : 0))
      this.setState({
        selectedIndex: index,
        offset: { x: changeOffset, y: 0 },
      })
    }
    if (children && React.Children.count(children) === this.count) return
    this.count = React.Children.count(children) || 1
    const offset = width * (infinite ? 1 : 0)
    this.setState({
      isScrolling: false,
      selectedIndex: 0,
      offset: { x: offset, y: 0 },
    })
  }

  private autoplayTimer: NodeJS.Timeout
  private androidScrollEndTimer: NodeJS.Timeout
  private scrollEndTimter: NodeJS.Timeout
  private firstScrollTimer: NodeJS.Timeout
  private loopJumpTimer: NodeJS.Timeout

  componentWillUnmount() {
    this.autoplayTimer && clearTimeout(this.autoplayTimer)
    this.androidScrollEndTimer && clearTimeout(this.androidScrollEndTimer)
    this.scrollEndTimter && clearTimeout(this.scrollEndTimter)
    this.firstScrollTimer && clearTimeout(this.firstScrollTimer)
    this.loopJumpTimer && clearTimeout(this.loopJumpTimer)
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
    this.setState({ isScrolling: false })
    // android hack
    // if (!e.nativeEvent.contentOffset) {
    //   const { position } = e.nativeEvent
    //   e.nativeEvent.contentOffset = {
    //     x: position * this.state.width,
    //     y: 0,
    //   }
    // }
    this.updateIndex(e.nativeEvent.contentOffset)
    this.scrollEndTimter = setTimeout(() => {
      this.autoplay()
      if (this.props.onMomentumScrollEnd) {
        // this.props.onMomentumScrollEnd(e, this.state)
        this.props.onMomentumScrollEnd(e)
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
      this.props.onScrollEndDrag(e)
    }
  }

  onLayout = (
    e: NativeSyntheticEvent<TargetedEvent & { layout: LayoutRectangle }>,
  ) => {
    const { selectedIndex, infinite } = this.props
    const scrollIndex =
      this.count > 1 ? Math.min(selectedIndex as number, this.count - 1) : 0
    const { width } = e.nativeEvent.layout
    const offset = width * (scrollIndex + (infinite ? 1 : 0))
    this.setState({
      width,
      offset: { x: offset, y: 0 },
    })
  }

  updateIndex = (currentOffset: NativeScrollPoint) => {
    const paramOffset = currentOffset
    let { selectedIndex } = this.state
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
    this.setState({
      selectedIndex,
      offset: paramOffset,
      loopJump,
    })
    if (this.props.afterChange) {
      this.props.afterChange(selectedIndex)
    }
  }

  scrollNextPage = () => {
    const { selectedIndex, isScrolling, width } = this.state
    if (isScrolling || this.count < 2) return
    const diff = selectedIndex + 1 + (this.props.infinite ? 1 : 0)
    const offsetX = diff * width

    this.scrollview && this.scrollview.scrollTo({ x: offsetX, y: 0 })
    this.setState({
      isScrolling: true,
    })
    // if (Platform.OS === 'android') {
    //   this.androidScrollEndTimer = setTimeout(() => {
    //     this.onScrollEnd({
    //       nativeEvent: {
    //         position: diff,
    //       },
    //     })
    //   }, 0)
    // }
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
        contentOffset={this.state.offset}
        onScrollBeginDrag={this.onScrollBegin}
        onMomentumScrollEnd={this.onScrollEnd}
        onScrollEndDrag={this.onScrollEndDrag}>
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
