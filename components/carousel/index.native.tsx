import React from 'react';
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  InteractionManager,
} from 'react-native';
import { CarouselPropsType } from './PropsType';
import CarouselStyle from './style/index.native';

export interface CarouselProps extends CarouselPropsType {
  bounces?: boolean;
  onScrollBeginDrag?: (
    event: NativeSyntheticEvent<NativeScrollEvent>,
    state: CarouselState,
    carousel: Carousel,
  ) => void;
  onMomentumScrollEnd?: (
    event: NativeSyntheticEvent<NativeScrollEvent>,
    state: CarouselState,
    carousel: Carousel,
  ) => void;
  styles?: any;
  style?: StyleProp<ViewStyle>;
  dotStyle?: StyleProp<ViewStyle>;
  dotActiveStyle?: StyleProp<ViewStyle>;
  pagination?: (props: PaginationProps) => React.ReactNode;
  afterChange?: (index: number) => void;
}
export interface CarouselOffset {
  x: number;
  y: number;
}
export interface CarouselState {
  width: number;
  height: number;
  selectedIndex: number;
  isScrolling: boolean;
  autoplayEnd: boolean;
  loopJump: boolean;
  offset: CarouselOffset;
}

export interface PaginationProps {
  styles: any;
  vertical?: boolean;
  current: number;
  count: number;
  dotStyle?: StyleProp<ViewStyle>;
  dotActiveStyle?: StyleProp<ViewStyle>;
}
const CarouselStyles = StyleSheet.create<any>(CarouselStyle);

const defaultPagination = (props: PaginationProps) => {
  const { styles, current, vertical, count, dotStyle, dotActiveStyle } = props;
  const positionStyle = vertical ? 'paginationY' : 'paginationX';
  const flexDirection = vertical ? 'column' : 'row';
  const arr: any = [];
  for (let i = 0; i < count; i++) {
    arr.push(
      <View
        key={`dot-${i}`}
        // tslint:disable-next-line:jsx-no-multiline-js
        style={[
          styles.pointStyle,
          styles.spaceStyle,
          dotStyle,
          i === current && styles.pointActiveStyle,
          i === current && dotActiveStyle,
        ]}
      />,
    );
  }
  return (
    <View style={[styles.pagination, styles[positionStyle]]}>
      <View style={{ flexDirection }}>{arr}</View>
    </View>
  );
};

class Carousel extends React.Component<CarouselProps, CarouselState> {
  static defaultProps: CarouselProps = {
    bounces: true,
    infinite: false,
    dots: true,
    autoplay: false,
    autoplayInterval: 3000,
    selectedIndex: 0,
    vertical: false,
    styles: CarouselStyles,
    pagination: defaultPagination,
    dotStyle: {},
    dotActiveStyle: {},
  };

  private scrollviewRef: any;
  private autoplayTimer: number;
  private androidScrollEndTimer: number;
  private scrollEndTimter: number;

  constructor(props: CarouselProps) {
    super(props);
    const { children, selectedIndex } = this.props;
    const count = this.getChildrenCount(children);
    const index = count > 1 ? Math.min(selectedIndex as number, count - 1) : 0;
    this.state = {
      width: 0,
      height: 0,
      isScrolling: false,
      autoplayEnd: false,
      loopJump: false,
      selectedIndex: index,
      offset: { x: 0, y: 0 },
    };
  }
  getChildrenCount = (children: React.ReactNode) => {
    const count = children ? React.Children.count(children) || 1 : 0;
    return count;
  }
  componentDidMount() {
    this.autoplay();
  }

  componentWillUnmount() {
    clearTimeout(this.autoplayTimer);
    clearTimeout(this.androidScrollEndTimer);
    clearTimeout(this.scrollEndTimter);
  }

  loopJump = () => {
    const { loopJump, selectedIndex, width, height } = this.state;
    const { infinite, vertical } = this.props;
    // iOS 通过 contentOffet 可以平滑过度，不需要做处理
    if (loopJump && Platform.OS === 'android') {
      const index = selectedIndex + (infinite ? 1 : 0);
      let x = 0;
      let y = 0;
      if (vertical) {
        y = height * index;
      } else {
        x = width * index;
      }

      // FIXME: not work well in android when horizontal
      setTimeout(() => {
        this.scrollviewRef.scrollTo({ x, y, animated: false });
      }, 10);
    }
  }

  autoplay = () => {
    const { children, autoplay, infinite, autoplayInterval } = this.props;
    const { isScrolling, autoplayEnd, selectedIndex } = this.state;
    const count = this.getChildrenCount(children);
    if (!Array.isArray(children) || !autoplay || isScrolling || autoplayEnd) {
      return;
    }

    clearTimeout(this.autoplayTimer);

    this.autoplayTimer = setTimeout(() => {
      if (!infinite && selectedIndex === count - 1) {
        // !infinite && last one, autoplay end
        return this.setState({ autoplayEnd: true });
      }
      this.scrollNextPage();
    }, autoplayInterval);
  }

  onScrollBegin = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.setState(
      {
        isScrolling: true,
      },
      () => {
        if (this.props.onScrollBeginDrag) {
          this.props.onScrollBeginDrag(e, this.state, this);
        }
      },
    );
  }

  onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.setState({ isScrolling: false });
    // android incompatible
    if (!e.nativeEvent.contentOffset) {
      // kind of hack ? see: line 282
      const position = (e.nativeEvent as any).position;
      (e.nativeEvent as any).contentOffset = {
        x: position * this.state.width,
        y: position * this.state.height,
      };
    }

    this.updateIndex(e.nativeEvent.contentOffset);

    this.scrollEndTimter = setTimeout(() => {
      this.autoplay();
      this.loopJump();
      if (this.props.onMomentumScrollEnd) {
        this.props.onMomentumScrollEnd(e, this.state, this);
      }
    });
  }

  onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { offset, selectedIndex } = this.state;
    const { vertical, children } = this.props;

    const previousOffset = vertical ? offset.y : offset.x;
    const newOffset = vertical ? e.nativeEvent.contentOffset.y : e.nativeEvent.contentOffset.x;
    const count = this.getChildrenCount(children);

    if (
      previousOffset === newOffset &&
      (selectedIndex === 0 || selectedIndex === count - 1)
    ) {
      this.setState({
        isScrolling: false,
      });
    }

    // pagingEnabled: Vertical pagination is not supported on Android.
    // implement android vertical paging
    // if upgrade rn to 0.53, can use snapToInterval to implement vertical paging
    this.paging(e.nativeEvent.contentOffset.y);
  }

  paging = (offsetY: number) => {
    const { height } = this.state;
    const { vertical, infinite } = this.props;
    if (Platform.OS === 'android' && vertical) {
      const selectedIndex = Math.round(offsetY / height) - (infinite ? 1 : 0);
      this.scrollviewRef.scrollTo({ x: 0, y: (selectedIndex + (infinite ? 1 : 0)) * height });

      // if drag ScrollView, not slide ScrollView, onScrollEnd is not triggered, so need to manually trigger onScrollEnd
      if (Platform.OS === 'android' && vertical) {
        this.onScrollEnd({
          nativeEvent: {
            position: selectedIndex + (infinite ? 1 : 0),
          },
        } as any);
      }
    }
  }

  updateIndex = (offset: CarouselOffset) => {
    const { vertical, children, infinite, afterChange } = this.props;
    const { offset: { x, y }, height, width } = this.state;
    let { selectedIndex } = this.state;

    const diff = vertical ? (offset.y - y) : (offset.x - x);
    const step = vertical ? height : width;
    let loopJump = false;

    const count = this.getChildrenCount(children);

    // Do nothing if offset no change.
    if (!diff) {
      return;
    }

    selectedIndex = selectedIndex + Math.round(diff / step);

    if (infinite) {
      if (selectedIndex <= -1) {
        selectedIndex = count - 1;
        if (vertical) {
          offset.y = step * count;
        } else {
          offset.x = step * count;
        }
        loopJump = true;
      } else if (selectedIndex >= count) {
        selectedIndex = 0;
        if (vertical) {
          offset.y = step;
        } else {
          offset.x = step;
        }
        loopJump = true;
      }
    }

    this.setState({
      selectedIndex,
      offset,
      loopJump,
    });

    if (afterChange) {
      afterChange(selectedIndex);
    }
  }

  scrollNextPage = () => {
    const { isScrolling, selectedIndex, width, height } = this.state;
    const { children, infinite, vertical } = this.props;
    const count = this.getChildrenCount(children);
    if (isScrolling || count < 2) {
      return;
    }

    const diff = (infinite ? 1 : 0) + selectedIndex + 1;

    if (vertical) {
      this.scrollviewRef.scrollTo({ x: 0, y: diff * height });
    } else {
      this.scrollviewRef.scrollTo({ x: diff * width, y: 0 });
    }

    this.setState({
      isScrolling: true,
      autoplayEnd: false,
    });

    // trigger onScrollEnd manually in android
    if (Platform.OS === 'android') {
      this.androidScrollEndTimer = setTimeout(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff,
          },
        } as any);
      }, 0);
    }
  }

  renderContent = (pages: React.ReactNode) => {
    const others = {
      onScrollBeginDrag: this.onScrollBegin,
      onMomentumScrollEnd: this.onScrollEnd,
      onScrollEndDrag: this.onScrollEndDrag,
    };
    return (
      <ScrollView
        ref={el => (this.scrollviewRef = el)}
        {...this.props}
        horizontal={!this.props.vertical}
        pagingEnabled
        bounces={!!this.props.bounces}
        scrollEventThrottle={100}
        removeClippedSubviews={false}
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={this.props.style}
        contentOffset={this.state.offset}
        {...others}
      >
        {pages}
      </ScrollView>
    );
  }

  renderDots = (index: number) => {
    const {
      children,
      vertical,
      styles,
      pagination,
      dotStyle,
      dotActiveStyle,
    } = this.props;
    const count = this.getChildrenCount(children);
    return pagination
      ? pagination({
          styles,
          vertical,
          current: index,
          count,
          dotStyle,
          dotActiveStyle,
        })
      : null;
  }

  onLayout = (e: LayoutChangeEvent) => {
    // for horizontal, get width, scollTo
    // for vertical, get height, scollTo
    const { children, infinite, vertical } = this.props;
    const count = this.getChildrenCount(children);
    const selectedIndex =
      count > 1 ? Math.min(this.props.selectedIndex as number, count - 1) : 0;
    const width = e.nativeEvent.layout.width;
    const offsetX = vertical ? 0 : (width * (selectedIndex + (infinite ? 1 : 0)));
    const offsetY = vertical ? (this.state.height * (selectedIndex + (infinite ? 1 : 0))) : 0;

    this.setState(
      {
        width,
        offset: { x: offsetX, y: offsetY },
      },
      () => {
        if (Platform.OS === 'android') {
          // scrollview has a layout animation when create, must delay to call scrollTo after the animation
          InteractionManager.runAfterInteractions(
            () => this.scrollviewRef.scrollTo({ x: offsetX, y: offsetY, animated: false }),
          );
        }
      },
    );
  }

  onChildLayout = (e: LayoutChangeEvent) => {
    if (this.props.vertical) {
      this.setState({ height: e.nativeEvent.layout.height });
    }
  }

  render() {
    const { width, height, selectedIndex } = this.state;
    const { dots, infinite, children } = this.props;

    if (!children) {
      return (
        <Text style={{ backgroundColor: 'white' }}>
          You are supposed to add children inside Carousel
        </Text>
      );
    }

    const pageStyle = { width };
    const count = this.getChildrenCount(children);
    let pages: React.ReactFragment;

    // For make infinite at least count > 1
    if (count > 1) {
      // TODO: infinite
      const childrenArray = React.Children.toArray(children);

      if (infinite) {
        childrenArray.unshift(childrenArray[count - 1]);
        childrenArray.push(childrenArray[1]);
      }

      pages = childrenArray.map((page, i) => {
        return (
          // when vertical, use the height of the first child as the height of the Carousel
          <View style={pageStyle} key={i} onLayout={i === 0 ? this.onChildLayout : () => {}}>
            {page}
          </View>
        );
      });
    } else {
      pages = <View style={pageStyle} onLayout={this.onChildLayout}>{children}</View>;
    }

    return (
      <View onLayout={this.onLayout} style={height > 0 ? { height } : {}}>
        {this.renderContent(pages)}
        {dots && this.renderDots(selectedIndex)}
      </View>
    );
  }
}

export default Carousel;
