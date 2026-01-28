import React, { useCallback, useMemo, useState } from 'react'
import { Dimensions, Image, LayoutChangeEvent, Text, View } from 'react-native'
import { useTheme } from '../style'

import WatermarkStyle from './style'

import { WatermarkProps } from './PropsType'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

const Watermark: React.FC<WatermarkProps> = ({
  content,
  contentStyle,
  image,
  imageStyle,
  height = 64,
  width = 120,
  gapX = 0,
  gapY = 0,
  rotate = -22,
  foreground = true,
  children,
  style,
  ...rest
}) => {
  const styles = useTheme({
    styles: rest.styles,
    themeStyles: WatermarkStyle,
  })
  const [layout, setLayout] = useState<{ width: number; height: number }>({
    width: windowWidth,
    height: windowHeight,
  })
  const onChildrenLayout = useCallback((event: LayoutChangeEvent) => {
    setLayout(event.nativeEvent.layout)
  }, [])

  const _width = width + gapX * 2
  const _height = height + gapY * 2
  const count =
    parseInt(String(layout.width / _width), 10) *
    parseInt(String(layout.height / _height), 10)

  // ========== watermarkDom ============
  const watermarkDom = useMemo(() => {
    let innerDom = null
    const _content = typeof content === 'string' ? [content] : content
    if (Array.isArray(_content) && _content.length > 0) {
      innerDom = (
        <>
          {_content.map((item, index) => {
            return (
              <Text
                key={'watermark_txt' + index}
                style={[
                  { color: 'rgba(0, 0, 0, .15)', fontSize: 14 },
                  contentStyle,
                ]}>
                {item}
              </Text>
            )
          })}
        </>
      )
    } else {
      if (typeof image === 'string') {
        innerDom = (
          <Image
            source={{ uri: image }}
            style={[{ height: 32, width: 60 }, imageStyle]}
          />
        )
      } else if (React.isValidElement(image)) {
        innerDom = image
      }
    }
    return innerDom
  }, [content, contentStyle, image, imageStyle])

  // ========== renderWatermark ============
  const renderWatermark = useCallback(() => {
    if (!watermarkDom || isNaN(count) || count <= 0) {
      return null
    }
    const _zIndex = foreground ? 1 : -1
    return (
      <View
        style={[styles.wmContainer, { zIndex: _zIndex }]}
        pointerEvents={'none'}>
        {Array.from({ length: count }).map((_, index) => {
          return (
            <View
              key={'watermark_item' + index}
              style={[
                styles.wmItem,
                {
                  height: _height,
                  width: _width,
                  transform: [{ rotate: rotate + 'deg' }],
                },
              ]}>
              {watermarkDom}
            </View>
          )
        })}
      </View>
    )
  }, [
    watermarkDom,
    count,
    foreground,
    styles.wmContainer,
    styles.wmItem,
    _height,
    _width,
    rotate,
  ])

  return (
    <View style={[styles.container, style, { overflow: 'hidden' }]}>
      {renderWatermark()}
      <View onLayout={onChildrenLayout} style={{ zIndex: 0 }}>
        {children}
      </View>
    </View>
  )
}

export default Watermark
