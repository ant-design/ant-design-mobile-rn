import * as RN from 'react-native';

export default {
  Tabs: {
    container: {
      flex: 1,
    } as RN.ViewStyle,
    topTabBarSplitLine: {
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
    } as RN.ViewStyle,
    bottomTabBarSplitLine: {
      borderTopColor: '#eee',
      borderTopWidth: 1,
    } as RN.ViewStyle,
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
    } as RN.ViewStyle,
    tab: {
      height: 43.5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 2,
      paddingLeft: 2,
      flexDirection: 'row',
    } as RN.ViewStyle,
    underline: {
      height: 2,
      backgroundColor: '#108ee9',
    } as RN.ViewStyle,
    textStyle: {
      fontSize: 15,
    } as RN.ViewStyle,
    activeTextColor: '#108ee9',
    inactiveTextColor: '#000',
  },
};
