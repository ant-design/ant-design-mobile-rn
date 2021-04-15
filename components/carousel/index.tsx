import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import ViewPager, { PagerViewProps } from 'react-native-pager-view';
import { WithTheme, WithThemeStyles } from '../style';
import CarouselStyles, { CarouselStyle } from './style/index';

export interface CarouselPropsType extends WithThemeStyles<CarouselStyle> {
  selectedIndex?: number;
  dots?: boolean;
  vertical?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  infinite?: boolean;
}

export interface CarouselProps extends CarouselPropsType {
  style?: StyleProp<ViewStyle>;
  dotStyle?: StyleProp<ViewStyle>;
  dotActiveStyle?: StyleProp<ViewStyle>;
  pagination?: (props: PaginationProps) => React.ReactNode;
  afterChange?: (index: number) => void;
}

export interface CarouselState {
  selectedIndex: number;
  isScrolling: boolean;
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

  constructor(props: CarouselProps) {
    super(props);
    const { children, selectedIndex } = this.props;
    const count = this.getChildrenCount(children);
    const index = count > 1 ? Math.min(selectedIndex as number, count - 1) : 0;
    this.state = {
      isScrolling: false,
      selectedIndex: index,
    };
  }
  componentDidMount() {
    this.autoplay();
  }

  componentWillUnmount() {
    clearTimeout(this.autoplayTimer);
  }
  componentDidUpdate(prevProps: CarouselProps) {
    if (
      prevProps.autoplay !== undefined &&
      prevProps.autoplay !== this.props.autoplay
    ) {
      this.autoplay(!this.props.autoplay);
    }
  }
  /**
   * go to index
   * @param index
   */
  public goTo(index: number) {
    this.setState({ selectedIndex: index });
    // @ts-ignore
    this.viewPager.current.setPage(index);
  }

  render() {
    const { selectedIndex } = this.state;
    const { dots, children, vertical } = this.props;

    if (!children) {
      return (
        <Text style={{ backgroundColor: 'white' }}>
          You are supposed to add children inside Carousel
        </Text>
      );
    }

    const count = this.getChildrenCount(children);
    let pages: React.ReactFragment;

    if (count > 1) {
      const childrenArray = React.Children.toArray(children);

      pages = childrenArray.map((page, i) => {
        return (
          // when vertical, use the height of the first child as the height of the Carousel
          <View key={i}>{page}</View>
        );
      });
    } else {
      pages = <View>{children}</View>;
    }
    const vpProps: PagerViewProps = {
      initialPage: selectedIndex,
      showPageIndicator: false,
      children: pages,
      onPageSelected: e => {
        this.setState({ selectedIndex: e.nativeEvent.position });
        this.autoplay();
        if (this.props.afterChange) {
          this.props.afterChange(e.nativeEvent.position);
        }
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
      <WithTheme themeStyles={CarouselStyles} styles={this.props.styles}>
        {styles => (
          <View style={[styles.wrapperStyle]}>
            <ViewPager
              {...vpProps}
              style={this.props.style}
              // Lib does not support dynamically orientation change
              orientation={vertical ? 'vertical' : 'horizontal'}
              // Lib does not support dynamically transitionStyle change
              transitionStyle="scroll"
              ref={this.viewPager as any}
            >
              {pages}
            </ViewPager>
            {dots && this.renderDots(selectedIndex)}
          </View>
        )}
      </WithTheme>
    );
  }
  private getChildrenCount = (children: React.ReactNode) => {
    const count = children ? React.Children.count(children) || 1 : 0;
    return count;
  };

  private autoplay = (stop = false) => {
    if (stop) {
      clearTimeout(this.autoplayTimer);
      return;
    }
    const { children, autoplay, infinite, autoplayInterval } = this.props;
    const { isScrolling, selectedIndex } = this.state;
    const count = this.getChildrenCount(children);
    if (!Array.isArray(children) || !autoplay || isScrolling) {
      return;
    }

    clearTimeout(this.autoplayTimer);

    this.autoplayTimer = setTimeout(() => {
      let newIndex = selectedIndex < count ? selectedIndex + 1 : 0;
      if (selectedIndex === count - 1) {
        newIndex = 0;
        if (!infinite) {
          clearTimeout(this.autoplayTimer);
          return;
        }
      }
      this.goTo(newIndex);
    }, autoplayInterval);
  };

  private renderDots = (index: number) => {
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
}

export default Carousel;
