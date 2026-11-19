import {
  arrow,
  flip,
  hide,
  limitShift,
  offset,
  shift,
  useFloating,
} from '@floating-ui/react-native'

import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { mergeProps } from '../_util/with-default-props'
import { ThemeContext, useTheme } from '../style'
import AntmView from '../view'

import useClickAway from '../_util/hooks/useClickAway'
import useScroll from '../_util/hooks/useScroll'
import Portal from '../portal'
import { CrossOffset, Placement, TooltipProps, TooltipRef } from './PropsType'
import Wrapper from './Wrapper'
import { normalizePlacement } from './normalize-placement'
import TooltipStyles from './style'

/**
 * @floating-ui/react-native@0.10.7+ adds `StatusBar.currentHeight` on Android
 * when `sameScrollView` is false. On RN 0.86+, `measureInWindow` already
 * includes that inset (facebook/react-native#56056), so cancel the duplicate
 * (floating-ui#3543).
 */
function getAndroidStatusBarOvershift(): number {
  if (Platform.OS !== 'android') {
    return 0
  }
  const minor = Platform.constants?.reactNativeVersion?.minor ?? 0
  if (minor < 86) {
    return 0
  }
  return StatusBar.currentHeight ?? 0
}

const defaultProps = {
  placement: 'bottom' as Placement,
  defaultVisible: false,
  trigger: 'onPress',
  mode: 'light',
  // StatusBar is handled by floating-ui / RN version logic above — do not
  // default-crossOffset it again (that used to double-shift Android).
  crossOffset: { top: 0, left: 0 } as CrossOffset,
}

const InternalTooltip: React.ForwardRefRenderFunction<
  TooltipRef,
  TooltipProps
> = (p, ref) => {
  const props = mergeProps(defaultProps, p)

  const {
    mode,
    crossOffset,
    styles,
    visible: pvisible,
    defaultVisible,
    onVisibleChange,
    placement,
    children,
    trigger,
    content,
    style,
  } = props

  const arrowRef = useRef<View>(null)
  const theme = React.useContext(ThemeContext)
  const [visible, setVisible] = useMergedState<boolean>(false, {
    value: pvisible,
    defaultValue: defaultVisible,
    onChange: onVisibleChange,
  })
  // Portal lives under Stack content, not the window origin.
  // floating-ui + sameScrollView:false returns window coords; convert them.
  const [portalOrigin, setPortalOrigin] = useState({ x: 0, y: 0 })

  useImperativeHandle(
    ref,
    () => ({
      show: () => setVisible(true),
      hide: () => setVisible(false),
      visible,
    }),
    [setVisible, visible],
  )

  const {
    update,
    refs,
    floatingStyles,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    placement: realPlacement,
    scrollProps,
  } = useFloating({
    sameScrollView: false, // Rendering outside the page（in portal)
    placement: normalizePlacement(placement),
    middleware: [
      offset(theme.tooltip_arrow_size),
      shift({
        padding: 2,
        crossAxis: false,
        limiter: limitShift(),
      }),
      flip(),
      hide(),
      arrow({
        element: arrowRef,
        padding: theme.tooltip_arrow_size,
      }),
    ],
  })

  const syncPortalOrigin = useCallback(() => {
    const node = refs.offsetParent.current
    if (!node) {
      return
    }
    node.measureInWindow((x: number, y: number) => {
      setPortalOrigin((prev) =>
        prev.x === x && prev.y === y ? prev : { x, y },
      )
    })
  }, [refs.offsetParent])

  const setOffsetParent = useCallback(
    (node: View | null) => {
      // Must use the setter so floating-ui state tracks offsetParent.
      refs.setOffsetParent(node)
      if (node) {
        requestAnimationFrame(() => {
          node.measureInWindow((x: number, y: number) => {
            setPortalOrigin({ x, y })
          })
        })
      }
    },
    [refs],
  )

  useEffect(() => {
    if (visible) {
      syncPortalOrigin()
      update()
    }
  }, [update, floatingStyles, content, visible, syncPortalOrigin])
  // Replace `useLayoutEffect(update)` to improve performance
  useScroll(scrollProps.onScroll)
  const [{ stopPropagation }] = useClickAway(() => {
    setVisible(false)
  })

  const onTrigger = () => {
    stopPropagation()
    setVisible((v) => !v)
  }

  const arrowPosition = useMemo(() => {
    const side = realPlacement.split('-')[0] as string
    const arrowSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[side] as string
    const arrowRotate = {
      top: '0deg',
      bottom: '180deg',
      left: '270deg',
      right: '90deg',
    }[side] as string
    return {
      left: arrowX || undefined,
      top: arrowY || undefined,
      [arrowSide]: -theme.tooltip_arrow_size * 2,
      borderTopColor: mode === 'dark' ? theme.tooltip_dark : theme.fill_base,
      transform: [{ rotate: arrowRotate }],
    }
  }, [
    arrowX,
    arrowY,
    mode,
    realPlacement,
    theme.fill_base,
    theme.tooltip_arrow_size,
    theme.tooltip_dark,
  ])

  const TooltipStylesMemo = useCallback(() => {
    return TooltipStyles(theme, mode)
  }, [mode, theme])

  const ss = useTheme({
    styles,
    themeStyles: TooltipStylesMemo,
  })

  const androidStatusBarOvershift = useMemo(
    () => getAndroidStatusBarOvershift(),
    [],
  )

  const safeFloatingStyles = useMemo(() => {
    if (floatingStyles.left === 0 && floatingStyles.top === 0) {
      return { display: 'none' } as const
    }
    if (isNaN(floatingStyles.left) || isNaN(floatingStyles.top)) {
      return { display: 'none' } as const
    }
    return {
      ...floatingStyles,
      left:
        floatingStyles.left -
        portalOrigin.x +
        (crossOffset?.left ?? 0),
      top:
        floatingStyles.top -
        portalOrigin.y -
        androidStatusBarOvershift +
        (crossOffset?.top ?? 0),
    }
  }, [
    androidStatusBarOvershift,
    crossOffset?.left,
    crossOffset?.top,
    floatingStyles,
    portalOrigin.x,
    portalOrigin.y,
  ])

  return (
    <>
      <Wrapper
        setReference={refs.setReference}
        onLayout={update}
        trigger={trigger}
        onTrigger={onTrigger}>
        {children}
      </Wrapper>
      {!!visible && (
        <Portal>
          <View
            ref={setOffsetParent}
            onLayout={() => {
              syncPortalOrigin()
              update()
            }}
            pointerEvents="box-none"
            collapsable={false}
            style={StyleSheet.absoluteFill}>
            <View
              ref={refs.setFloating}
              onLayout={update}
              collapsable={false}
              style={[ss.tooltip, safeFloatingStyles, style]}>
              <View
                style={[arrowPosition, ss.arrow]}
                ref={arrowRef}
                collapsable={false}
              />
              <AntmView style={ss.tooltipText}>{content}</AntmView>
            </View>
          </View>
        </Portal>
      )}
    </>
  )
}

const Tooltip = React.forwardRef<TooltipRef, TooltipProps>(
  InternalTooltip,
) as ((
  props: React.PropsWithChildren<TooltipProps> &
    React.RefAttributes<TooltipRef>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>

Tooltip.displayName = 'Tooltip'

export default React.memo(Tooltip)
