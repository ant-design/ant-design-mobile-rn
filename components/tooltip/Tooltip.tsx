import {
  autoPlacement,
  flip,
  hide,
  limitShift,
  offset,
  shift,
  useFloating,
} from '@floating-ui/react-native'
import React from 'react'
import { Text, View } from 'react-native'
import { mergeProps } from '../_util/with-default-props'
import { useTheme } from '../style'
import { Placement, TooltipProps, TooltipRef } from './PropsType'
import { normalizePlacement } from './normalize-placement'
import TooltipStyles from './style'

const defaultProps = {
  placement: 'bottom' as Placement,
  defaultVisible: false,
  stopPropagation: ['click'],
  getContainer: () => document.body,
  mode: 'light',
}

const InternalTooltip: React.ForwardRefRenderFunction<
  TooltipRef,
  TooltipProps
> = (p, ref) => {
  const props = mergeProps(defaultProps, p)
  const { children } = props

  const styles = useTheme({
    styles: props.styles,
    themeStyles: TooltipStyles,
  })

  const placement = normalizePlacement(props.placement)

  const isOpen = true
  const { refs, floatingStyles } = useFloating({
    placement,
    middleware: [
      autoPlacement(),
      offset(12),
      shift({
        padding: 4,
        crossAxis: false,
        limiter: limitShift(),
      }),
      flip(),
      hide(),
      // arrow({
      //   element: arrowElement,
      //   padding: convertPx(12),
      // }),
    ],
  })
  return (
    <>
      {/*
       * react-native not suppport `useClick(context)`.
       * So we must add `View` wrapper to setReference
       * @link: https://github.com/floating-ui/floating-ui/issues/2128
       */}
      <View ref={refs.setReference} style={props.style}>
        {children}
      </View>
      {isOpen && (
        <View
          ref={refs.setFloating}
          collapsable={false}
          style={[styles.tooltip, floatingStyles]}>
          <Text>Floating</Text>
        </View>
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
