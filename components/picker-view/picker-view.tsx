import React from 'react'
import { ActivityIndicator, LayoutChangeEvent, Text, View } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import {
  PickerColumn,
  PickerColumnItem,
  PickerValue,
  PickerViewPropsType,
} from './PropsType'
import Wheel from './Wheel'
import pickerViewStyles, { PickerViewStyle } from './style/index'

export type RMCPickerViewProps = Omit<
  PickerViewPropsType,
  'data' | 'cols' | 'cascade' | 'onChange'
> &
  WithThemeStyles<PickerViewStyle> & {
    columns: PickerColumn[]
    handleSelect: (value: PickerValue, index: number) => void
  }
export default class RMCPickerView extends React.Component<
  RMCPickerViewProps,
  any
> {
  static defaultProps = {
    value: [],
    itemHeight: 0,
    numberOfLines: 1,
    renderMaskTop: () => (
      <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.8)' }} />
    ),
    renderMaskBottom: () => (
      <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.8)' }} />
    ),
  }

  constructor(props: RMCPickerViewProps) {
    super(props)
    this.state = {
      itemHeight: 0,
      wheelHeight: 0,
    }
  }

  wrapperMeasure = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout
    this.setState({ wheelHeight: height })
  }

  itemHeightMeasure = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout
    this.setState({ itemHeight: height })
  }

  renderLabel = (item: PickerColumnItem, index: number) => {
    return (
      <View
        key={item.key || item.value}
        style={[
          {
            height: this.props.itemHeight || this.state.itemHeight || 'auto',
            overflow: 'hidden',
            justifyContent: 'center',
          },
        ]}>
        {this.props.renderLabel?.(item, index) || (
          <Text
            style={[
              {
                fontSize: 16,
                color: '#333',
                textAlign: 'center',
                includeFontPadding: false,
                padding: 8,
              },
              this.props.itemStyle,
              // itemStyle was not allowed to set height
              { height: 'auto' },
            ]}
            numberOfLines={this.props.numberOfLines}>
            {item.label}
          </Text>
        )}
      </View>
    )
  }

  renderMask = (s: PickerViewStyle) => (
    <View style={s.mask} pointerEvents="none">
      <View style={s.maskTop}>{this.props.renderMaskTop?.()}</View>
      <View
        style={[
          s.maskMiddle,
          { height: this.props.itemHeight || this.state.itemHeight },
        ]}
      />
      <View style={s.maskBottom}>{this.props.renderMaskBottom?.()}</View>
    </View>
  )

  render() {
    const { wheelHeight } = this.state
    const {
      style,
      styles,
      columns,
      value,
      loading,
      indicatorStyle,
      numberOfLines,
      handleSelect,
      loadingContent,
    } = this.props
    const itemHeight = this.props.itemHeight || this.state.itemHeight
    return (
      <WithTheme themeStyles={pickerViewStyles} styles={styles}>
        {(s) =>
          // {/* 计算中文占位符换行的高度后，items统一这个高度 */}
          itemHeight === 0 ? (
            <View onLayout={this.itemHeightMeasure}>
              {this.renderLabel(
                {
                  value: 'layout',
                  label: <>{Array(numberOfLines).join('\n')}&#12288;</>,
                },
                0,
              )}
            </View>
          ) : (
            <View
              style={[{ height: 7 * itemHeight }, s.wrappper, style]}
              onLayout={this.wrapperMeasure}>
              <View style={[s.wheelWrapper, { height: wheelHeight }]}>
                {(loading || columns?.length === 0) && loading !== false
                  ? loadingContent || (
                      <View style={{ flex: 1, alignSelf: 'center' }}>
                        <ActivityIndicator
                          animating
                          style={indicatorStyle || {}}
                        />
                      </View>
                    )
                  : itemHeight > 0 &&
                    wheelHeight > 0 &&
                    columns.map((column, index) => (
                      <Wheel
                        key={index}
                        index={index}
                        column={column}
                        value={value?.[index]}
                        onSelect={handleSelect}
                        itemHeight={itemHeight}
                        wheelHeight={wheelHeight}
                        renderLabel={this.renderLabel}
                      />
                    ))}
              </View>
              {/* mask */}
              {this.renderMask(s)}
            </View>
          )
        }
      </WithTheme>
    )
  }
}
