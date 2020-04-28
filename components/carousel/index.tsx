import ViewPager, { ViewPagerProps } from '@react-native-community/viewpager';
import React from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, StyleProp, Text, View, ViewStyle } from 'react-native';
import { WithTheme, WithThemeStyles } from '../style';
import CarouselStyles, { CarouselStyle } from './style/index';

export interface CarouselPropsType extends WithThemeStyles<CarouselStyle> {
  selectedIndex?: number;
  dots?: boolean;
  vertical?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  infinite?: boolean;
  initialSlideWidth?: number;
}

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
  vertical?: boolean;
  current: number;
  count: number;
  styles: ReturnType<typeof CarouselStyles>;
  dotStyle?: StyleProp<ViewStyle>;
  dotActiveStyle?: StyleProp<ViewStyle>;
}

const defaultPagination = (props: PaginationProps) => {
  const { styles, current, vertical, count, dotStyle, dotActiveStyle } = props;
  const positionStyle = vertical ? 'paginationY' : 'paginationX';
  const flexDirection = vertical ? 'column' : 'row';
  const arr: any = [];
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
    pagination: defaultPagination,
    dotStyle: {},
    dotActiveStyle: {},
  };
  viewPager = React.createRef<typeof ViewPager>();

  private autoplayTimer: number;
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
  };
  componentDidMount() {
    this.autoplay();
  }

  componentWillUnmount() {
    clearTimeout(this.autoplayTimer);
    clearTimeout(this.scrollEndTimter);
  }

  autoplay = (stop = false) => {
    if (stop) {
      clearTimeout(this.autoplayTimer);

      return;
    }
    const { children, autoplay, autoplayInterval } = this.props;
    const { isScrolling, autoplayEnd, selectedIndex } = this.state;
    const count = this.getChildrenCount(children);
    if (!Array.isArray(children) || !autoplay || isScrolling || autoplayEnd) {
      return;
    }

    clearTimeout(this.autoplayTimer);

    this.autoplayTimer = setTimeout(() => {
      let newIndex = selectedIndex < count ? selectedIndex + 1 : 0;

      if (selectedIndex === count - 1) {
        // !infinite && last one, autoplay end
        newIndex = 0;
      }
      this.setState({ selectedIndex: newIndex });
      // @ts-ignore
      this.viewPager.current.setPage(newIndex);
    }, autoplayInterval);
  };

  renderDots = (index: number) => {
    const {
      children,
      vertical,
      pagination,
      dotStyle,
      dotActiveStyle,
    } = this.props;
    if (!pagination) {
      return null;
    }
    const count = this.getChildrenCount(children);
    return (
      <WithTheme themeStyles={CarouselStyles} styles={this.props.styles}>
        {styles => {
          return pagination({
            styles,
            vertical,
            current: index,
            count,
            dotStyle,
            dotActiveStyle,
          });
        }}
      </WithTheme>
    );
  };

  render() {
    const { width, selectedIndex } = this.state;
    const { dots, children, vertical } = this.props;

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

    if (count > 1) {
      const childrenArray = React.Children.toArray(children);

      pages = childrenArray.map((page, i) => {
        return (
          // when vertical, use the height of the first child as the height of the Carousel
          <View style={pageStyle} key={i} collapsable={false}>
            {page}
          </View>
        );
      });
    } else {
      pages = (
        <View style={pageStyle} collapsable={false}>
          {children}
        </View>
      );
    }
    const vpProps: ViewPagerProps = {
      initialPage: selectedIndex,

      showPageIndicator: false,

      style: this.props.style,
      onPageSelected: e => {
        this.setState({ selectedIndex: e.nativeEvent.position });
        this.autoplay();
      },
      onPageScrollStateChanged: e => {
        switch (e.nativeEvent.pageScrollState) {
          case 'dragging':
            this.autoplay(true);
            this.setState({ isScrolling: true });
            break;

          case 'idle':
          case 'settling':
            this.autoplay();
            this.setState({ isScrolling: false });
          default:
            break;
        }
      },
    };
    return (
      <View>
        {vertical ? (
          <ViewPager
            {...vpProps}
            // Lib does not support dynamically orientation change
            orientation="vertical"
            // Lib does not support dynamically transitionStyle change
            transitionStyle="scroll"
            ref={this.viewPager as any}
          >
            {pages}
          </ViewPager>
        ) : (
          <ViewPager
            {...vpProps}
            // Lib does not support dynamically orientation change
            orientation="horizontal"
            // Lib does not support dynamically transitionStyle change
            transitionStyle="scroll"
            ref={this.viewPager as any}
          >
            {pages}
          </ViewPager>
        )}
        {dots && this.renderDots(selectedIndex)}
      </View>
    );
  }
}

export default Carousel;
