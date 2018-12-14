import React, { Component } from 'react';
import { CameraRoll, GetPhotosParamType, StyleSheet, View, ViewStyle } from 'react-native';
import ListView from '../list-view';
import ImageItem from './ImageItem';

export interface CameraRollPickerStyle {
  wrapper: ViewStyle;
  row: ViewStyle;
  marker: ViewStyle;
  spinner: ViewStyle;
}
const styles = StyleSheet.create<CameraRollPickerStyle>({
  wrapper: {
    flex: 1,
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
  spinner: {},
});

export interface CameraRollPickerProps extends GetPhotosParamType {
  maximum: number;
  selectSingleItem?: boolean;
  imagesPerRow: number;
  imageMargin: number;
  containerWidth?: number;
  callback?: (...args: any[]) => any;
  selected?: any[];
  selectedMarker?: JSX.Element;
  backgroundColor?: string;
}
export type CameraRollPickerState = {
  selected: any;
  images: any[];
};
class CameraRollPicker extends Component<
  CameraRollPickerProps,
  CameraRollPickerState
> {
  static defaultProps = {
    groupTypes: 'SavedPhotos',
    maximum: 15,
    imagesPerRow: 6,
    imageMargin: 4,
    first: 50,
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
  };
  after: string | undefined;
  constructor(props: CameraRollPickerProps) {
    super(props);
    this.state = {
      images: [],
      selected: this.props.selected,
    };
  }

  componentWillReceiveProps(nextProps: CameraRollPickerProps) {
    this.setState({
      selected: nextProps.selected,
    });
  }

  onFetch = async (_ = 1, startFetch: any, abortFetch: () => void) => {
    try {
      const {
        assetType,
        groupTypes,
        first,
        groupName,
        mimeTypes,
      } = this.props;

      const res = await CameraRoll.getPhotos({
        first,
        after: this.after,
        assetType: assetType,
        groupTypes: groupTypes,
        groupName,
        mimeTypes,
      });
      if (res) {
        const data = res.edges;
        if (res.page_info) {
          this.after = res.page_info.has_next_page
            ? res.page_info.end_cursor
            : '';
        }
        startFetch(data, first);
      }
    } catch (err) {
      if (__DEV__) {
        // tslint:disable-next-line:no-console
        console.error(err);
      }
      abortFetch(); // manually stop the refresh or pagination if it encounters network error
    }
  };
  render() {
    const { imageMargin, backgroundColor, imagesPerRow } = this.props;

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
        <ListView
          onFetch={this.onFetch}
          refreshable={false}
          numColumns={imagesPerRow}
          renderItem={item => this._renderImage(item)}
        />
      </View>
    );
  }
  _renderImage = (item: any) => {
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
        onPress={this._selectImage.bind(this)}
      />
    );
  };

  _selectImage(image: { uri: any }) {
    const { maximum, callback, selectSingleItem } = this.props;
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

export default CameraRollPicker;
