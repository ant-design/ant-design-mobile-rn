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
} from 'react'
import { StatusBar, View } from 'react-native'
import { mergeProps } from '../_util/with-default-props'
import { ThemeContext, useTheme } from '../style'
import AntmView from '../view'

import useClickAway from '../_util/hooks/useClickAway'
import useScroll from '../_util/hooks/useScroll'
import Portal from '../portal'
import { Placement, TooltipProps, TooltipRef } from './PropsType'
import Wrapper from './Wrapper'
import { normalizePlacement } from './normalize-placement'
import TooltipStyles from './style'

const defaultProps = {
  placement: 'bottom' as Placement,
  defaultVisible: false,
  trigger: 'onPress',
  mode: 'light',
}

const InternalTooltip: React.ForwardRefRenderFunction<
  TooltipRef,
  TooltipProps
> = (p, ref) => {
  const props = mergeProps(defaultProps, p)

  const {
    mode,
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
      offset(theme.arrow_size),
      shift({
        padding: 2,
        crossAxis: false,
        limiter: limitShift(),
      }),
      flip(),
      hide(),
      arrow({
        element: arrowRef,
        padding: theme.arrow_size,
      }),
    ],
  })

  useEffect(update, [update, floatingStyles])
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
    const arrowBorder = {
      top: 'borderTopColor',
      right: 'borderRightColor',
      bottom: 'borderBottomColor',
      left: 'borderLeftColor',
    }[side] as string
    const arrowSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[side] as string
    return {
      left: arrowX || undefined,
      top: arrowY || undefined,
      [arrowSide]: -theme.arrow_size * 2,
      [arrowBorder]: mode === 'dark' ? theme.tooltip_dark : '#ffffff',
    }
  }, [
    arrowX,
    arrowY,
    mode,
    realPlacement,
    theme.arrow_size,
    theme.tooltip_dark,
  ])

  const TooltipStylesMemo = useCallback(() => {
    return TooltipStyles(theme, mode)
  }, [mode, theme])

  const ss = useTheme({
    styles,
    themeStyles: TooltipStylesMemo,
  })

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
            ref={refs.offsetParent}
            style={{ marginTop: StatusBar.currentHeight }}>
            <View
              ref={refs.setFloating}
              onLayout={update}
              collapsable={false}
              style={[ss.tooltip, floatingStyles, style]}>
              <View
                style={[ss.arrow, arrowPosition]}
                ref={arrowRef}
                collapsable={false}
              />
              <AntmView style={ss.content}>{content}</AntmView>
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
