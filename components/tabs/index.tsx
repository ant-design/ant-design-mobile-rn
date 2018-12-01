import React from "react";

import TabsProps from "./PropsType";
import Styles from "./style/index";
import { DefaultTabBar } from "./DefaultTabBar";
import RMCTabs from './Tabs'
export default class Tabs extends React.PureComponent<TabsProps, {}> {
  public static DefaultTabBar = DefaultTabBar;

  static defaultProps = {};
  tabsRef: RMCTabs | null;

  renderTabBar = (props: any) => {
    const { renderTab } = this.props;
    return (
      <DefaultTabBar
        styles={Styles as any}
        {...props}
        renderTab={renderTab}
      />
    );
  };
  render() {
    return (
      <RMCTabs
        styles={Styles as any}
        renderTabBar={this.renderTabBar}
        {...this.props}
        ref={ref=> this.tabsRef = ref}
      />
    );
  }
}
