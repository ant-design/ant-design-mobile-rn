import { TextStyle, ViewStyle } from 'react-native';
import variables from '../../style/themes/default';

export interface ICheckboxStyle {
  wrapper: ViewStyle;
  icon: TextStyle;
  iconRight: TextStyle;
  agreeItem: ViewStyle;
  agreeItemCheckbox: TextStyle;
  checkboxItemCheckbox: TextStyle;
}

export default {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: variables.icon_size_sm,
    height: variables.icon_size_sm,
  },
  iconRight: {
    marginLeft: variables.h_spacing_md,
  },
  agreeItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeItemCheckbox: {
    marginLeft: variables.h_spacing_lg,
    marginRight: variables.h_spacing_md,
  },
  checkboxItemCheckbox: {
    marginRight: variables.h_spacing_md,
    alignSelf: 'center',
  },
};
