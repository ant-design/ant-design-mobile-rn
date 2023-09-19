import React from 'react'
import { PixelRatio, ScrollView, StyleSheet, Text, View } from 'react-native'
import PickerMixin from './PickerMixin'
import { PickerProps } from './PickerTypes'

const ratio = PixelRatio.get()
const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    left: 0,
    width: '100%',
    borderColor: '#aaa',
    borderTopWidth: 1 / ratio,
    borderBottomWidth: 1 / ratio,
  } as any,

  selectedItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  } as any,

  itemText: {
    fontSize: 20,
    color: '#aaa',
    textAlign: 'center',
  } as any,
})

export interface IPickerProp {
  select: Function
  doScrollingComplete: Function
}

class Picker extends React.Component<IPickerProp & PickerProps, any> {
  scrollBuffer: number
  scrollerRef: ScrollView | null

  state = {
    itemHeight: 0,
  }

  onItemLayout = (e: any) => {
    const { height } = e.nativeEvent.layout
    this.setState({ itemHeight: height }, () => {
      this.props.select(
        this.props.selectedValue,
        this.state.itemHeight,
        this.scrollTo,
      )
    })
  }

  componentDidUpdate() {
    this.props.select(
      this.props.selectedValue,
      this.state.itemHeight,
      this.scrollTo,
    )
  }

  componentWillUnmount() {
    this.clearScrollBuffer()
  }

  clearScrollBuffer() {
    if (this.scrollBuffer) {
      clearTimeout(this.scrollBuffer)
    }
  }

  scrollTo = (y: any) => {
    if (this.scrollerRef) {
      this.scrollerRef.scrollTo({
        y,
        animated: false,
      })
    }
  }

  fireValueChange = (selectedValue: any) => {
    if (
      this.props.selectedValue !== selectedValue &&
      this.props.onValueChange
    ) {
      this.props.onValueChange(selectedValue)
    }
  }

  onScroll = (e: any) => {
    const { y } = e.nativeEvent.contentOffset
    this.clearScrollBuffer()
    this.scrollBuffer = setTimeout(() => {
      this.clearScrollBuffer()
      this.props.doScrollingComplete(
        y,
        this.state.itemHeight,
        this.fireValueChange,
      )
    }, 50) as any
  }

  render() {
    const { itemHeight } = this.state
    const {
      children,
      itemStyle,
      selectedValue,
      style,
      numberOfLines = 1,
    } = this.props
    const items = React.Children.map(children, (item: any, index) => {
      const totalStyle = [styles.itemText]
      if (selectedValue === item.props.value) {
        totalStyle.push(styles.selectedItemText)
      }
      return (
        <View
          key={index}
          style={{
            minHeight: itemHeight,
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Text
            style={[{ includeFontPadding: false }, totalStyle, itemStyle]}
            numberOfLines={numberOfLines}>
            {item.props.label}
          </Text>
        </View>
      )
    })
    return (
      <View style={style}>
        <View
          style={[
            styles.indicator,
            { top: itemHeight * 3, height: itemHeight },
          ]}
        />
        {/* 计算中文占位符换行的高度后，items统一这个高度 */}
        {itemHeight === 0 && (
          <Text
            style={[styles.itemText, itemStyle]}
            onLayout={this.onItemLayout}>
            {Array(numberOfLines).join('\n')}&#12288;
          </Text>
        )}
        <ScrollView
          style={{ height: itemHeight * 7 }}
          ref={(el) => (this.scrollerRef = el)}
          onScroll={this.onScroll}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          renderToHardwareTextureAndroid
          scrollEventThrottle={10}
          needsOffscreenAlphaCompositing
          collapsable
          horizontal={false}
          removeClippedSubviews>
          <View
            style={{
              paddingTop: itemHeight * 3,
              paddingBottom: itemHeight * 3,
            }}>
            {items}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default PickerMixin(Picker)
