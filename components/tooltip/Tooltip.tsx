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
import React, { useImperativeHandle, useMemo, useRef, useState } from 'react'
import { View } from 'react-native'
import { mergeProps } from '../_util/with-default-props'
import Portal from '../portal'
import { useTheme } from '../style'
import AntmView from '../view'
import { Placement, TooltipProps, TooltipRef } from './PropsType'
import Wrapper from './Wrapper'
import { normalizePlacement } from './normalize-placement'
import TooltipStyles from './style'

const defaultProps = {
  placement: 'bottom' as Placement,
  defaultVisible: false,
  trigger: 'onPress',
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

  const [visible, setVisible] = useMergedState<boolean>(false, {
    value: props.visible,
    defaultValue: props.defaultVisible,
    onChange: props.onVisibleChange,
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

  const arrowRef = useRef<View>(null)
  // TODO
  const wrapperRef = useRef<any>(null)

  const [measure, setMeasure] = useState<any>({})
  const onLayout = () => {
    // @ts-ignore
    wrapperRef.current?.measure((fx, fy, width, height, px, py) => {
      setMeasure({ fx, fy, width, height, px, py })
    })
  }
  const onBlur = () => setVisible(false)
  const onTrigger = () => setVisible((v) => !v)

  const {
    refs,
    floatingStyles,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    placement: realPlacement,
  } = useFloating({
    sameScrollView: true,
    placement: normalizePlacement(props.placement),
    middleware: [
      offset(12),
      shift({
        padding: 2,
        crossAxis: false,
        limiter: limitShift(),
      }),
      flip(),
      hide(),
      arrow({
        element: arrowRef,
        padding: 6,
      }),
    ],
  })

  const arrowPosition = useMemo(() => {
    const side = realPlacement.split('-')[0] as string
    const arrowSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[side] as string
    // TODo-luokun" arrow width
    // arrowRef.current?.measure((fx, fy, width, height, px, py) => {
    //   setMeasure({ fx, fy, width, height, px, py })
    // })
    return {
      left: arrowX || undefined,
      top: arrowY || undefined,
      [arrowSide]: -4,
    }
  }, [arrowX, arrowY, realPlacement])

  return (
    <>
      <Wrapper
        setReference={(el: any) => (wrapperRef.current = el)}
        onLayout={onLayout}
        onBlur={onBlur}
        trigger={props.trigger}
        onTrigger={onTrigger}>
        {children}
      </Wrapper>
      {Boolean(measure.width && visible) && (
        <Portal>
          <View
            ref={refs.setReference}
            style={{
              position: 'absolute',
              width: measure.width,
              height: measure.height,
              left: measure.px,
              top: measure.py,
            }}
            pointerEvents="none"
            onStartShouldSetResponder={() => false}
          />
          <View
            ref={refs.setFloating}
            collapsable={false}
            style={floatingStyles}>
            <View style={[styles.tooltipArrow, arrowPosition]} ref={arrowRef} />
            <View style={styles.tooltip}>
              <AntmView style={styles.tooltipContent}>{props.content}</AntmView>
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
