import React, { Component } from 'react';
import { Dimensions, Image, ImageStyle, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../icon';
export type ImageItemProps = {
  item?: any;
  selected?: boolean;
  selectedMarker?: JSX.Element;
  imageMargin: number;
  containerWidth?: number;
  imagesPerRow: number;
  onPress?: (...args: any[]) => any;
};
class ImageItem extends Component<ImageItemProps, {}> {
  static defaultProps = {
    item: {},
    selected: false,
  };
  _imageSize: number;
  constructor(props: ImageItemProps) {
    super(props);
  }
  componentWillMount() {
    let { width } = Dimensions.get('window');
    const { imageMargin, imagesPerRow, containerWidth } = this.props;
    if (typeof containerWidth !== 'undefined') {
      width = containerWidth;
    }
    this._imageSize = (width - (imagesPerRow + 1) * imageMargin) / imagesPerRow;
  }
  render() {
    const { item, selected, selectedMarker, imageMargin } = this.props;
    if (!item) {
      return null;
    }
    const marker = selectedMarker ? (
      selectedMarker
    ) : (
      <Icon
        name="check-circle"
        style={[styles.marker]}
      />
    );
    const image = item.node.image;
    return (
      <TouchableOpacity
        style={{ marginBottom: imageMargin, marginRight: imageMargin }}
        onPress={() => this._handleClick(image)}
      >
        <Image
          source={{ uri: image.uri }}
          style={{ height: this._imageSize, width: this._imageSize }}
        />
        {selected ? marker : null}
      </TouchableOpacity>
    );
  }
  _handleClick(item: any) {
    if (this.props.onPress) {
      this.props.onPress(item);
    }
  }
}
const styles = StyleSheet.create<{
  marker: ImageStyle;
}>({
  marker: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
  },
});

export default ImageItem;
