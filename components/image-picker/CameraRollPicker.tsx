/**
 * Copy from https://github.com/jeanpan/react-native-camera-roll-picker
 * Will refactor it later
 */
import React, { Component } from 'react';
import {
  CameraRoll,
  Platform,
  StyleSheet,
  View,
  Text,
  ListView,
  ActivityIndicator,
  GetPhotosReturnType,
} from 'react-native';
import ImageItem from './ImageItem';
export type CameraRollPickerProps = {
  scrollRenderAheadDistance?: number;
  initialListSize?: number;
  pageSize?: number;
  removeClippedSubviews?: boolean;
  groupTypes?:
    | 'Album'
    | 'All'
    | 'Event'
    | 'Faces'
    | 'Library'
    | 'PhotoStream'
    | 'SavedPhotos';
  maximum: number;
  assetType?: 'Photos' | 'Videos' | 'All';
  selectSingleItem?: boolean;
  imagesPerRow: number;
  imageMargin: number;
  containerWidth?: number;
  callback?: (...args: any[]) => any;
  selected?: any[];
  selectedMarker?: JSX.Element;
  backgroundColor?: string;
  emptyText?: string;
  emptyTextStyle?: any;
  loader?: React.ReactNode;
};
export type CameraRollPickerState = {
  selected: any;
  loadingMore: boolean;
  initialLoading: boolean;
  dataSource: any;
  images: any[];
  lastCursor: null;
  noMore: boolean;
};
class CameraRollPicker extends Component<
  CameraRollPickerProps,
  CameraRollPickerState
> {
  static defaultProps = {
    scrollRenderAheadDistance: 500,
    initialListSize: 1,
    pageSize: 3,
    removeClippedSubviews: true,
    groupTypes: 'SavedPhotos',
    maximum: 15,
    imagesPerRow: 3,
    imageMargin: 5,
    selectSingleItem: false,
    assetType: 'Photos',
    backgroundColor: 'white',
    selected: [],
    callback: function(selectedImages: any, currentImage: any) {
      // tslint:disable-next-line:no-console
      console.log(currentImage);
      // tslint:disable-next-line:no-console
      console.log(selectedImages);
    },
    emptyText: 'No photos.',
  };
  constructor(props: CameraRollPickerProps) {
    super(props);
    this.state = {
      images: [],
      selected: this.props.selected,
      lastCursor: null,
      initialLoading: true,
      loadingMore: false,
      noMore: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
  }
  componentWillMount() {
    this.fetch();
  }
  componentWillReceiveProps(nextProps: CameraRollPickerProps) {
    this.setState({
      selected: nextProps.selected,
    });
  }
  fetch() {
    if (!this.state.loadingMore) {
      this.setState({ loadingMore: true }, () => {
        this._fetch();
      });
    }
  }
  _fetch() {
    const { groupTypes, assetType } = this.props;
    const fetchParams: any = {
      first: 1000,
      groupTypes: groupTypes,
      assetType: assetType,
    };
    if (Platform.OS === 'android') {
      // not supported in android
      delete fetchParams.groupTypes;
    }
    if (this.state.lastCursor) {
      fetchParams.after = this.state.lastCursor;
    }
    CameraRoll.getPhotos(fetchParams).then(
      data => this._appendImages(data),
      // tslint:disable-next-line:no-console
      e => console.log(e),
    );
  }
  _appendImages(data: GetPhotosReturnType) {
    const assets = data.edges;
    const newState: any = {
      loadingMore: false,
      initialLoading: false,
    };
    if (!data.page_info.has_next_page) {
      newState.noMore = true;
    }
    if (assets.length > 0) {
      newState.lastCursor = data.page_info.end_cursor;
      newState.images = this.state.images.concat(assets);
      newState.dataSource = this.state.dataSource.cloneWithRows(
        this._nEveryRow(newState.images, this.props.imagesPerRow),
      );
    }
    this.setState(newState);
  }
  render() {
    const { dataSource } = this.state;
    const {
      scrollRenderAheadDistance,
      initialListSize,
      pageSize,
      removeClippedSubviews,
      imageMargin,
      backgroundColor,
      emptyText,
      emptyTextStyle,
      loader,
    } = this.props;
    if (this.state.initialLoading) {
      return (
        <View style={[styles.loader, { backgroundColor }]}>
          {loader || <ActivityIndicator />}
        </View>
      );
    }
    const listViewOrEmptyText =
      dataSource.getRowCount() > 0 ? (
        <ListView
          style={{ flex: 1 }}
          scrollRenderAheadDistance={scrollRenderAheadDistance}
          initialListSize={initialListSize}
          pageSize={pageSize}
          removeClippedSubviews={removeClippedSubviews}
          // tslint:disable-next-line:jsx-no-bind
          renderFooter={this._renderFooterSpinner.bind(this)}
          // tslint:disable-next-line:jsx-no-bind
          onEndReached={this._onEndReached.bind(this)}
          dataSource={dataSource}
          renderRow={rowData => this._renderRow(rowData)}
        />
      ) : (
        <Text style={[{ textAlign: 'center' }, emptyTextStyle]}>
          {emptyText}
        </Text>
      );
    return (
      <View
        style={[
          styles.wrapper,
          {
            padding: imageMargin,
            paddingRight: 0,
            backgroundColor: backgroundColor,
          },
        ]}
      >
        {listViewOrEmptyText}
      </View>
    );
  }
  _renderImage(item: any) {
    const { selected } = this.state;
    const {
      imageMargin,
      selectedMarker,
      imagesPerRow,
      containerWidth,
    } = this.props;
    const uri = item.node.image.uri;
    const isSelected =
      this._arrayObjectIndexOf(selected, 'uri', uri) >= 0 ? true : false;
    return (
      <ImageItem
        key={uri}
        item={item}
        selected={isSelected}
        imageMargin={imageMargin}
        selectedMarker={selectedMarker}
        imagesPerRow={imagesPerRow}
        containerWidth={containerWidth}
        // tslint:disable-next-line:jsx-no-bind
        onClick={this._selectImage.bind(this)}
      />
    );
  }
  _renderRow(rowData: any) {
    const items = rowData.map((item: any) => {
      if (item === null) {
        return null;
      }
      return this._renderImage(item);
    });
    return <View style={styles.row}>{items}</View>;
  }
  _renderFooterSpinner() {
    if (!this.state.noMore) {
      return <ActivityIndicator style={styles.spinner} />;
    }
    return null;
  }
  _onEndReached() {
    if (!this.state.noMore) {
      this.fetch();
    }
  }
  _selectImage(image: { uri: any }) {
    const { maximum, imagesPerRow, callback, selectSingleItem } = this.props;
    const selected = this.state.selected;
    const index = this._arrayObjectIndexOf(selected, 'uri', image.uri);
    if (index >= 0) {
      selected.splice(index, 1);
    } else {
      if (selectSingleItem) {
        selected.splice(0, selected.length);
      }
      if (selected.length < maximum!) {
        selected.push(image);
      }
    }
    this.setState({
      selected: selected,
      dataSource: this.state.dataSource.cloneWithRows(
        this._nEveryRow(this.state.images, imagesPerRow),
      ),
    });
    callback!(selected, image);
  }
  _nEveryRow(data: any, n: number) {
    const result = [];
    let temp = [];
    for (let i = 0; i < data.length; ++i) {
      if (i > 0 && i % n === 0) {
        result.push(temp);
        temp = [];
      }
      temp.push(data[i]);
    }
    if (temp.length > 0) {
      while (temp.length !== n) {
        temp.push(null);
      }
      result.push(temp);
    }
    return result;
  }
  _arrayObjectIndexOf(array: any, property: string, value: any) {
    return array
      .map((o: any) => {
        return o[property];
      })
      .indexOf(value);
  }
}
const styles = StyleSheet.create<any>({
  wrapper: {
    flexGrow: 1,
  },
  loader: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  marker: {
    position: 'absolute',
    top: 5,
    backgroundColor: 'transparent',
  },
});

export default CameraRollPicker;
