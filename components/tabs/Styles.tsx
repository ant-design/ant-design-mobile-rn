import { ViewStyle } from "react-native";

export default {
  Tabs: {
    container: {
      flex: 1,
    } as ViewStyle,
    topTabBarSplitLine: {
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
    } as ViewStyle,
    bottomTabBarSplitLine: {
      borderTopColor: '#eee',
      borderTopWidth: 1,
    } as ViewStyle,
  },
  TabBar: {
    container: {
      height: 43.5,
    },
    tabs: {
      flex: 1,
      flexDirection: 'row',
      height: 43.5,
      backgroundColor: '#fff',
      justifyContent: 'space-around',
    } as ViewStyle,
    tab: {
      height: 43.5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 2,
      paddingLeft: 2,
      flexDirection: 'row',
    } as ViewStyle,
    underline: {
      height: 2,
      backgroundColor: '#108ee9',
    } as ViewStyle,
    textStyle: {
      fontSize: 15,
    } as ViewStyle,
    activeTextColor: '#108ee9',
    inactiveTextColor: '#000',
  },
};
