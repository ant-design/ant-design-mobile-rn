import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, { useMemo } from 'react'
import { I18nManager, PanResponder, View } from 'react-native'
import { WithTheme } from '../style'
import AnimatedIcon from './AnimatedIcon'
import { defaultAnimationConfig } from './constants'
import { AnimationOptions, RateProps } from './PropsType'
import RateIcon from './RateIcon'
import RateStyle from './style'
import { getStars } from './utils'

const Rate = ({
  value,
  defaultValue = 0,
  count = 5,
  readOnly = false,
  allowHalf = false,
  allowClear = false,
  allowSwiping = false,
  iconName = 'star',
  iconType = 'fill',
  iconSize = 32,
  color,
  emptyColor,
  animationConfig = false,
  style,
  iconStyle,
  onRatingStart,
  onRatingEnd,
  onChange,
}: RateProps) => {
  const width = React.useRef<number>(0)
  const startRating = React.useRef<number>(-1)
  const endRating = React.useRef<number>(-1)
  const [isInteracting, setInteracting] = React.useState(false)
  const [internalValue, setInternalValue] = useMergedState(defaultValue, {
    value,
    onChange,
  })
  const valueRef = React.useRef(internalValue)
  valueRef.current = internalValue

  const prevRating = React.useRef<number>(internalValue)

  // ========== memoAnimationOptions ============
  const memoAnimationOptions = useMemo<AnimationOptions>(() => {
    if (typeof animationConfig === 'boolean' || animationConfig == null) {
      return { need: !!animationConfig, config: defaultAnimationConfig }
    }
    return {
      need: true,
      config: {
        ...defaultAnimationConfig,
        ...animationConfig,
      },
    }
  }, [animationConfig])

  // ========== panResponder ============
  const panResponder = React.useMemo(() => {
    const calculateRating = (x: number, isRTL = I18nManager.isRTL) => {
      if (!width.current) {
        return valueRef.current
      }

      if (isRTL) {
        return calculateRating(width.current - x, false)
      }
      const newRating = Math.max(
        0,
        Math.min(Math.round((x / width.current) * count * 2 + 0.2) / 2, count),
      )

      return allowHalf ? newRating : Math.ceil(newRating)
    }

    const handleChange = (newRating: number, needHistory: boolean = false) => {
      if (needHistory && newRating !== prevRating.current) {
        prevRating.current = newRating
      }
      if (newRating !== valueRef.current) {
        setInternalValue(newRating)
      }
    }

    const handleClear = () => {
      if (allowClear && valueRef.current > 0) {
        prevRating.current = -1
        setInternalValue(0)
      }
    }

    const handleReset = () => {
      endRating.current = -1
      startRating.current = -1
      setTimeout(() => {
        setInteracting(false)
      }, defaultAnimationConfig.delay)
    }

    return PanResponder.create({
      onStartShouldSetPanResponder: () => !readOnly,
      onStartShouldSetPanResponderCapture: () => !readOnly,
      onMoveShouldSetPanResponder: () => !readOnly,
      onMoveShouldSetPanResponderCapture: () => !readOnly,
      onPanResponderMove: (e) => {
        if (allowSwiping) {
          const newRating = calculateRating(e.nativeEvent.locationX)
          endRating.current = newRating
          handleChange(newRating)
        }
      },
      onPanResponderStart: (e) => {
        const newRating = calculateRating(e.nativeEvent.locationX)
        startRating.current = newRating
        onRatingStart?.(newRating)
        handleChange(newRating)
        setInteracting(true)
      },
      onPanResponderEnd: (e) => {
        let _endRating = endRating.current
        if (_endRating === -1) {
          _endRating = calculateRating(e.nativeEvent.locationX)
          endRating.current = _endRating
        }
        const newRating = allowSwiping ? _endRating : startRating.current
        if (
          allowClear &&
          !allowSwiping &&
          prevRating.current >= 0 &&
          Math.abs(newRating - prevRating.current) < 0.5
        ) {
          handleClear()
          onRatingEnd?.(0)
        } else {
          handleChange(newRating, true)
          onRatingEnd?.(newRating)
        }
        handleReset()
      },
      onPanResponderTerminate: () => {
        // called when user drags outside of the component
        onRatingEnd?.(endRating.current)
        handleReset()
      },
    })
  }, [
    count,
    readOnly,
    allowHalf,
    allowClear,
    allowSwiping,
    setInternalValue,
    onRatingStart,
    onRatingEnd,
  ])

  return (
    <WithTheme themeStyles={RateStyle}>
      {(styles, theme) => (
        <View style={style}>
          <View
            style={styles.rateContainer}
            {...panResponder.panHandlers}
            onLayout={(e) => {
              width.current = e.nativeEvent.layout.width
            }}>
            {getStars(internalValue, count).map((starType, i) => {
              return (
                <AnimatedIcon
                  key={i}
                  active={
                    memoAnimationOptions.need &&
                    isInteracting &&
                    internalValue - i >= 0.5
                  }
                  config={memoAnimationOptions.config}
                  style={{ ...styles.icon, ...iconStyle }}>
                  <RateIcon
                    type={starType}
                    name={iconName}
                    size={iconSize || theme.rate_icon_size}
                    color={
                      starType === 'empty'
                        ? emptyColor || theme.color_rate_empty
                        : color || theme.color_rate_full
                    }
                    emptyColor={emptyColor || theme.color_rate_empty}
                    isFill={iconType === 'fill'}
                  />
                </AnimatedIcon>
              )
            })}
          </View>
        </View>
      )}
    </WithTheme>
  )
}

export default Rate
