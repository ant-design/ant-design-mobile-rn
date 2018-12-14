import React from 'react';
import { Platform } from 'react-native';
import { UltimateListView } from 'react-native-ultimate-listview';

export interface ListViewProps<T> {
  children?: React.ReactNode;
  onFetch: (
    currentPage: number,
    startFetch: () => any,
    abortFetch: () => void,
  ) => void;
  pageSize?: number;
  renderItem: (
    item: T,
    index: number,
    separators: {
      highlight: () => void;
      unhighlight: () => void;
      updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
    },
  ) => React.ReactElement<any> | null;
  emptyView?: () => React.ReactNode;
  afterFetch?: () => void;
  numColumns?: number;
  keyExtractor: (item: T, index: number) => string;
}
export interface ListViewState {}
class ListView<T> extends React.PureComponent<ListViewProps<T>, ListViewState> {
  ulv: { refresh: () => void };

  refresh = () => {
    if (this.ulv) {
      this.ulv.refresh();
    }
  };
  render() {
    const { renderItem, ...props } = this.props;

    return (
      <UltimateListView
        key="ant-list-view"
        refreshableMode={Platform.OS === 'ios' ? 'advanced' : 'basic'}
        numColumns={1}
        {...props}
        item={renderItem} // this takes two params (item, index)
        ref={(ref: { refresh: () => void }) => (this.ulv = ref)}
      />
    );
  }
}

export default ListView;
