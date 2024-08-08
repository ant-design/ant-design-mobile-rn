import React, { useCallback, useContext, useState } from 'react'
import { ActivityIndicator, LayoutChangeEvent, Text, View } from 'react-native'
import { mergeProps } from '../_util/with-default-props'
import HapticsContext from '../provider/HapticsContext'
import { Theme, ThemeContext, WithThemeStyles, useTheme } from '../style'
import {
  PickerColumn,
  PickerColumnItem,
  PickerValue,
  PickerViewPropsType,
} from './PropsType'
import Wheel from './Wheel'
import PickerViewStyles, { PickerViewStyle } from './style/index'

export type RMCPickerViewProps = Omit<
  PickerViewPropsType,
  'data' | 'cols' | 'cascade' | 'onChange'
> &
  WithThemeStyles<PickerViewStyle> & {
    columns: PickerColumn[]
    handleSelect: (value: PickerValue, index: number) => void
  }

const defaultProps = {
  value: [],
  itemHeight: 0,
  numberOfLines: 1,
  renderMaskTop: (theme: Theme) => (
    <View style={{ flex: 1, opacity: 0.8, backgroundColor: theme.fill_base }} />
  ),
  renderMaskBottom: (theme: Theme) => (
    <View style={{ flex: 1, opacity: 0.8, backgroundColor: theme.fill_base }} />
  ),
}

const RMCPickerView: React.FC<RMCPickerViewProps> = (props) => {
  const p = mergeProps(defaultProps, props)

  const [wheelHeight, setWheelHeight] = useState(0)
  const [stateItemHeight, setItemHeight] = useState(0)
  const itemHeight = p.itemHeight || stateItemHeight

  const wrapperMeasure = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout
    setWheelHeight(height)
  }

  const itemHeightMeasure = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout
    setItemHeight(height)
  }

  const ss = useTheme({
    styles: p.styles,
    themeStyles: PickerViewStyles,
  })
  const theme = useContext(ThemeContext)

  const renderLabel = useCallback(
    (item: PickerColumnItem, itemIndex: number, colIndex: number) => {
      return (
        <View
          key={item.key || item.value}
          style={[ss.itemWrap, { height: itemHeight || 'auto' }]}>
          {p.renderLabel?.(item, itemIndex, colIndex) || (
            <Text
              style={[
                ss.itemStyle,
                p.itemStyle,
                item.value ===
                  (p.value[colIndex] ?? (itemIndex === 0 && item.value)) &&
                  ss.itemActiveStyle,
                { height: 'auto' }, // itemStyle was not allowed to set height
              ]}
              numberOfLines={p.numberOfLines}>
              {item.label}
            </Text>
          )}
        </View>
      )
    },
    [itemHeight, p, ss.itemActiveStyle, ss.itemStyle, ss.itemWrap],
  )

  const onHaptics = useContext(HapticsContext)
  const handleSelect = useCallback(
    (...args) => {
      p.handleSelect.apply(undefined, args)
      onHaptics('picker')
    },
    [onHaptics, p.handleSelect],
  )

  if (itemHeight === 0) {
    return (
      <View onLayout={itemHeightMeasure}>
        {renderLabel(
          {
            value: 'layout',
            label: <>{Array(p.numberOfLines).join('\n')}&#12288;</>,
          },
          0,
          0,
        )}
      </View>
    )
  }

  return (
    <View
      style={[{ height: 7 * itemHeight }, ss.wrappper, p.style]}
      onLayout={wrapperMeasure}>
      <View style={[ss.wheelWrapper, { height: wheelHeight }]}>
        {(p.loading || p.columns?.length === 0) && p.loading !== false
          ? p.loadingContent || (
              <View style={{ flex: 1, alignSelf: 'center' }}>
                <ActivityIndicator animating style={p.indicatorStyle || {}} />
              </View>
            )
          : itemHeight > 0 &&
            wheelHeight > 0 &&
            p.columns.map((column, colIndex) => (
              <Wheel
                key={colIndex}
                index={colIndex}
                column={column}
                value={p.value?.[colIndex]}
                onSelect={handleSelect}
                itemHeight={itemHeight}
                wheelHeight={wheelHeight}
                renderLabel={(item, itemIndex) =>
                  renderLabel(item, itemIndex, colIndex)
                }
              />
            ))}
      </View>
      {/* mask */}
      <View style={ss.mask} pointerEvents="none">
        <View style={ss.maskTop}>{p.renderMaskTop?.(theme)}</View>
        <View style={[ss.maskMiddle, { height: itemHeight }]} />
        <View style={ss.maskBottom}>{p.renderMaskBottom?.(theme)}</View>
      </View>
    </View>
  )
}

RMCPickerView.displayName = 'RMCPickerView'

export default React.memo(RMCPickerView)
