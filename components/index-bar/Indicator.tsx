import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { PanResponder, Text, View } from 'react-native'
import { IndicatorProps } from './PropsType'

const Indicator: React.FC<IndicatorProps> = ({ indexes, styles, onChange }) => {
  const height = useRef<number>(0)
  const timeRef = useRef<number>(0)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isInteracting, setInteracting] = useState(false)

  // ========== _onPanResponderFinish ============
  const _onPanResponderFinish = useCallback(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
    timeRef.current = setTimeout(() => {
      setInteracting(false)
    }, 200)
  }, [])

  // ========== panResponder ============
  const panResponder = useMemo(() => {
    const calculateIndex = (y: number) => {
      if (!height.current || indexes.length === 0) {
        return -1
      }

      const calculatedIndex = Math.floor((y / height.current) * indexes.length)

      return Math.max(0, Math.min(calculatedIndex, indexes.length - 1))
    }

    const handleChange = (newIndex: number) => {
      if (newIndex >= 0 && newIndex < indexes.length) {
        setActiveIndex(newIndex)
        onChange?.(indexes[newIndex])
      }
    }

    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e) => {
        setInteracting(true)
        const newIndex = calculateIndex(e.nativeEvent.locationY)
        handleChange(newIndex)
      },
      onPanResponderMove: (e) => {
        const newIndex = calculateIndex(e.nativeEvent.locationY)
        handleChange(newIndex)
      },
      onPanResponderRelease: () => {
        _onPanResponderFinish()
      },
      onPanResponderTerminate: () => {
        _onPanResponderFinish()
      },
    })
  }, [indexes, onChange, _onPanResponderFinish])

  useEffect(() => {
    return () => {
      clearTimeout(timeRef.current)
    }
  }, [])

  return (
    <View
      style={styles?.indicatorContainer}
      {...panResponder.panHandlers}
      onLayout={(e) => {
        height.current = e.nativeEvent.layout.height
      }}>
      {indexes.map((key, idx) => {
        const isActive = idx === activeIndex
        return (
          <View
            style={styles?.indicatorBox}
            key={key + idx}
            pointerEvents="none">
            {isInteracting && isActive && (
              <View
                style={[
                  styles?.indicatorTextContainer,
                  styles?.indicatorScaleTextContainer,
                ]}>
                <Text
                  style={[styles?.indicatorText, styles?.indicatorScaleText]}>
                  {key}
                </Text>
              </View>
            )}
            <View
              style={[
                styles?.indicatorTextContainer,
                isActive && styles?.activeIndicatorTextContainer,
              ]}>
              <Text
                style={[
                  styles?.indicatorText,
                  isActive && styles?.activeIndicatorText,
                ]}>
                {key}
              </Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default React.memo(Indicator)
