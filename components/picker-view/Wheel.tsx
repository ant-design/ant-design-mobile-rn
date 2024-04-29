import type { ReactNode } from 'react'
import React from 'react'
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  View,
} from 'react-native'

type ColumnItem = {
  label: string | ReactNode
  value: string | number
}
type Value = string | number

type Props = {
  index: number
  column: ColumnItem[]
  value?: Value
  onSelect: (value: Value, index: number) => void
  renderLabel: (item: ColumnItem, index: number) => ReactNode
  itemHeight: number
  wheelHeight: number
}

class Wheel extends React.Component<Props> {
  scrollerRef: any

  scrollBuffer: number

  selectValue: any
  isScrolling: boolean

  componentDidMount() {
    const { value, column, itemHeight } = this.props
    setTimeout(() => {
      this.scrollTo(this.getSelectIndex(column, value) * itemHeight)
    })
  }

  shouldComponentUpdate(nextProps: Props) {
    const { value, column, itemHeight, wheelHeight } = nextProps
    if (
      value !== this.props.value ||
      itemHeight !== this.props.itemHeight ||
      wheelHeight !== this.props.wheelHeight
    ) {
      this.scrollTo(this.getSelectIndex(column, value) * itemHeight)
      return true
    }
    return column !== this.props.column
  }

  componentDidUpdate(prevProps: Props) {
    const { column } = prevProps
    if (column !== this.props.column) {
      this.scrollTo(
        this.getSelectIndex(this.props.column, this.props.value) *
          this.props.itemHeight,
      )
    }
  }

  scrollTo = (y: any) => {
    this.scrollerRef?.scrollTo?.({
      y,
      animated: false,
    })
  }

  getSelectIndex(column: ColumnItem[], value?: Value) {
    return Math.max(
      column.findIndex((item) => item.value === value),
      0,
    )
  }

  handleSelect = () => {
    if (this.props.value !== this.selectValue && this.props.onSelect) {
      this.props.onSelect(this.selectValue, this.props.index)
    }

    setTimeout(() => {
      this.scrollTo(
        this.getSelectIndex(this.props.column, this.props.value) *
          this.props.itemHeight,
      )
    })
  }

  onScrollEndForWeb = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    e.persist?.()
    let contentOffset = e.nativeEvent.contentOffset
    // android/web hack
    if (!contentOffset) {
      //@ts-ignore
      const { position } = e.nativeEvent
      contentOffset = {
        x: 0,
        y: position * this.props.itemHeight,
      }
    }

    const selectIndex = Math.round(contentOffset.y / this.props.itemHeight)
    if (this.props.column[selectIndex]) {
      this.selectValue = this.props.column[selectIndex].value
      if (!this.isScrolling) {
        this.updateSelectThrottle()
      }
    }
  }

  /*** for web event ***/
  onTouchStartForWeb = () => {
    this.isScrolling = true
  }
  onTouchEndForWeb = () => {
    this.isScrolling = false
    this.updateSelectThrottle()
  }
  onScrollForWeb = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.onScrollEndForWeb(e)
  }
  updateSelectThrottle = () => {
    clearTimeout(this.scrollBuffer)
    this.scrollBuffer = setTimeout(() => {
      this.handleSelect()
    }, 100) //idle time
  }

  onMomentumScrollBegin = () => {
    this.isScrolling = true
  }
  onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    e.persist?.()
    if (this.isScrolling) {
      let contentOffset = e.nativeEvent.contentOffset
      // android/web hack
      if (!contentOffset) {
        //@ts-ignore
        const { position } = e.nativeEvent
        contentOffset = {
          x: 0,
          y: position * this.props.itemHeight,
        }
      }
      const selectIndex = Math.round(contentOffset.y / this.props.itemHeight)
      if (this.props.column[selectIndex]) {
        this.selectValue = this.props.column[selectIndex].value
        this.handleSelect()
      }
    }
    this.isScrolling = false
  }

  renderItems = () => {
    const { column, renderLabel, itemHeight, wheelHeight } = this.props
    return (
      <View
        style={{
          paddingVertical: (wheelHeight - itemHeight) / 2,
        }}>
        {column.map((item, index) => renderLabel(item, index))}
      </View>
    )
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        nestedScrollEnabled
        horizontal={false}
        ref={(el: any) => (this.scrollerRef = el)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled={false}
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled={true}
        decelerationRate="fast"
        snapToInterval={this.props.itemHeight}
        {...(Platform.OS === 'web'
          ? {
              onTouchStart: this.onTouchStartForWeb,
              onTouchEnd: this.onTouchEndForWeb,
              onScroll: this.onScrollForWeb,
              scrollEventThrottle: 16,
            }
          : {
              onMomentumScrollBegin: this.onMomentumScrollBegin,
              onMomentumScrollEnd: this.onMomentumScrollEnd,
            })}>
        {this.renderItems()}
      </ScrollView>
    )
  }
}

export default Wheel
