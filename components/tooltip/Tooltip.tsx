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
import { CrossOffset, Placement, TooltipProps, TooltipRef } from './PropsType'
import Wrapper from './Wrapper'
import { normalizePlacement } from './normalize-placement'
import TooltipStyles from './style'

const defaultProps = {
  placement: 'bottom' as Placement,
  defaultVisible: false,
  trigger: 'onPress',
  mode: 'light',
  crossOffset: { top: StatusBar.currentHeight, left: 0 } as CrossOffset,
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

  useEffect(update, [update, floatingStyles, content])
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

  const safeFloatingStyles = useMemo(() => {
    if (floatingStyles.left === 0 && floatingStyles.top === 0) {
      return { display: 'none' } as const
    }
    if (isNaN(floatingStyles.left) || isNaN(floatingStyles.top)) {
      return { display: 'none' } as const
    }
    return floatingStyles
  }, [floatingStyles])

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
            style={{
              marginTop: crossOffset.top,
              marginLeft: crossOffset.left,
            }}
            collapsable={false}>
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
