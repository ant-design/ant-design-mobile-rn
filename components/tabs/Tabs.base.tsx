import React from 'react';
import { PropsType, TabData } from './PropsType';

export class StateType {
  currentTab: number;
}

let instanceId: number = 0;

export abstract class Tabs<
  P extends PropsType = PropsType,
  S extends StateType = StateType
> extends React.PureComponent<P, S> {
  static defaultProps = {
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
  } as PropsType;

  protected instanceId: number;
  protected prevCurrentTab: number;
  protected tabCache: { [index: number]: React.ReactNode } = {};

  /** compatible for different between react and preact in `setState`. */
  private nextCurrentTab: number;

  constructor(props: P) {
    super(props);

    this.state = {
      currentTab: this.getTabIndex(props),
    } as any;
    this.nextCurrentTab = this.state.currentTab;
    this.instanceId = instanceId++;
  }

  getTabIndex(props: P) {
    const { page, initialPage, tabs } = props;
    const param = (page !== undefined ? page : initialPage) || 0;

    let index = 0;
    if (typeof (param as any) === 'string') {
      tabs.forEach((t, i) => {
        if (t.key === param) {
          index = i;
        }
      });
    } else {
      index = (param as number) || 0;
    }
    return index < 0 ? 0 : index;
  }

  isTabVertical = (direction = (this.props as PropsType).tabDirection) =>
    direction === 'vertical';

  shouldRenderTab = (idx: number) => {
    const { prerenderingSiblingsNumber = 0 } = this.props as PropsType;
    const { currentTab = 0 } = (this.state as any) as StateType;

    return (
      currentTab - prerenderingSiblingsNumber <= idx &&
      idx <= currentTab + prerenderingSiblingsNumber
    );
  };

  componentWillReceiveProps(nextProps: P) {
    if (this.props.page !== nextProps.page && nextProps.page !== undefined) {
      this.goToTab(this.getTabIndex(nextProps), true);
    }
  }

  componentDidMount() {
    this.prevCurrentTab = this.state.currentTab;
  }

  componentDidUpdate() {
    this.prevCurrentTab = this.state.currentTab;
  }

  getOffsetIndex = (
    current: number,
    width: number,
    threshold = this.props.distanceToChangeTab || 0,
  ) => {
    const ratio = Math.abs(current / width);
    const direction = ratio > this.state.currentTab ? '<' : '>';
    const index = Math.floor(ratio);
    switch (direction) {
      case '<':
        return ratio - index > threshold ? index + 1 : index;
      case '>':
        return 1 - ratio + index > threshold ? index : index + 1;
      default:
        return Math.round(ratio);
    }
  };

  goToTab(index: number, force = false, newState: any = {}) {
    if (!force && this.nextCurrentTab === index) {
      return false;
    }
    this.nextCurrentTab = index;
    const { tabs, onChange } = this.props as P;
    if (index >= 0 && index < tabs.length) {
      if (!force) {
        // tslint:disable-next-line:no-unused-expression
        onChange && onChange(tabs[index], index);
        if (this.props.page !== undefined) {
          return false;
        }
      }

      this.setState({
        currentTab: index,
        ...newState,
      });
    }
    return true;
  }

  tabClickGoToTab(index: number) {
    this.goToTab(index);
  }

  getTabBarBaseProps() {
    const { currentTab } = this.state;

    const {
      animated,
      onTabClick,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarPosition,
      tabBarTextStyle,
      tabBarUnderlineStyle,
      tabs,
    } = this.props;
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
      tabs,
      instanceId: this.instanceId,
    };
  }

  renderTabBar(tabBarProps: any, DefaultTabBar: React.ComponentClass) {
    const { renderTabBar } = this.props as P;
    if (renderTabBar === false) {
      return null;
    } else if (renderTabBar) {
      // return React.cloneElement(this.props.renderTabBar(props), props);
      return renderTabBar(tabBarProps);
    } else {
      return <DefaultTabBar {...tabBarProps} />;
    }
  }

  getSubElements = () => {
    const { children } = this.props;
    const subElements: { [key: string]: React.ReactNode } = {};

    return (defaultPrefix: string = '$i$-', allPrefix: string = '$ALL$') => {
      if (Array.isArray(children)) {
        children.forEach((child: any, index) => {
          if (child.key) {
            subElements[child.key] = child;
          }
          subElements[`${defaultPrefix}${index}`] = child;
        });
      } else if (children) {
        subElements[allPrefix] = children;
      }
      return subElements;
    };
  };

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
    const key = tab.key || `${defaultPrefix}${index}`;
    const elements = subElements(defaultPrefix, allPrefix);
    let component = elements[key] || elements[allPrefix];
    if (component instanceof Function) {
      component = component(tab, index);
    }
    return component || null;
  }
}
