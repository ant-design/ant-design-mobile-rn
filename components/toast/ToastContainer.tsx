import type { FC } from 'react'
import React, { useEffect, useMemo } from 'react'
import {
  ActivityIndicator,
  Animated,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import { mergeProps } from '../_util/with-default-props'
import Icon, { IconNames } from '../icon'
import { useTheme } from '../style'
import { ToastProps } from './PropsType'
import ToastStyles from './style'

const defaultProps = {
  duration: 3,
  mask: true,
  onClose() {},
}

const ToastContainer: FC<ToastProps> = (p) => {
  const props = mergeProps(defaultProps, p)
  const {
    icon,
    type = '',
    mask,
    duration,
    content,
    onAnimationEnd,
    onClose,
    position,
  } = props

  const anim = React.useRef<Animated.CompositeAnimation | null>()
  const fadeAnim = React.useRef(new Animated.Value(0))

  useEffect(() => {
    if (anim.current) {
      anim.current = null
    }
    const animArr = [
      Animated.timing(fadeAnim.current, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(duration * 1000),
    ]
    if (duration > 0) {
      animArr.push(
        Animated.timing(fadeAnim.current, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      )
    }
    anim.current = Animated.sequence(animArr)
    anim.current.start(() => {
      if (duration > 0) {
        anim.current = null
        if (onAnimationEnd) {
          onAnimationEnd()
        }
      }
    })

    return () => {
      if (anim.current) {
        anim.current.stop()
        anim.current = null
      }

      if (onClose) {
        onClose()
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const styles = useTheme({
    styles: props.styles,
    themeStyles: ToastStyles,
  })

  const iconDom = useMemo(() => {
    let typeTemp = type
    if (type === 'info' && typeof icon === 'string') {
      if (['success', 'fail', 'offline', 'loading'].includes(icon)) {
        typeTemp = icon
      }
    }
    switch (typeTemp) {
      case 'loading':
        return (
          <ActivityIndicator
            animating
            style={[styles.centering]}
            color="white"
            size="large"
          />
        )
      case 'info':
        return icon
      default:
        const iconType: {
          [key: string]: IconNames
        } = {
          success: 'check-circle',
          fail: 'close-circle',
          offline: 'frown',
        }
        return (
          <Icon
            name={iconType[type]}
            style={styles.image}
            color="white"
            size={36}
          />
        )
    }
  }, [icon, styles.centering, styles.image, type])

  const positionStyle: ViewStyle = useMemo(() => {
    switch (position) {
      case 'top':
        return {
          justifyContent: 'flex-start',
          marginTop: '20%',
        }
      case 'bottom':
        return {
          justifyContent: 'flex-end',
          marginBottom: '20%',
        }
      default:
        return {
          justifyContent: 'center',
        }
    }
  }, [position])

  return (
    <View
      style={[positionStyle, styles.container]}
      pointerEvents={mask ? undefined : 'box-none'}>
      <View style={[styles.innerContainer]}>
        <Animated.View style={{ opacity: fadeAnim.current }}>
          <View
            style={[
              styles.innerWrap,
              iconDom ? styles.iconToast : styles.textToast,
            ]}>
            {iconDom}
            {React.isValidElement(content) ? (
              content
            ) : (
              <Text style={styles.content}>{content}</Text>
            )}
          </View>
        </Animated.View>
      </View>
    </View>
  )
}

export default ToastContainer
