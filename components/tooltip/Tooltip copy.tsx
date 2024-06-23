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
import { ThemeContext, useTheme } from '../style'
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

  const theme = React.useContext(ThemeContext)
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
    console.log('asd')
    update()
    // @ts-ignore
    wrapperRef.current?.measure((fx, fy, width, height, px, py) => {
      setMeasure({ fx, fy, width, height, px, py })
    })
  }
  const onBlur = () => setVisible(false)
  const onTrigger = () => setVisible((v) => !v)

  const {
    update,
    refs,
    floatingStyles,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    placement: realPlacement,
  } = useFloating({
    sameScrollView: true,
    placement: normalizePlacement(props.placement),
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

  const arrowPosition = useMemo(() => {
    const side = realPlacement.split('-')[0] as string
    const arrowSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[side] as string
    return {
      left: arrowX || undefined,
      top: arrowY || undefined,
      [arrowSide]: -theme.arrow_size / 2,
    }
  }, [arrowX, arrowY, realPlacement, theme.arrow_size])

  return (
    <>
      <Wrapper
        setReference={(el: any) => (wrapperRef.current = el)}
        onLayout={onLayout}
        onBlur={onBlur}
        trigger={props.trigger}
        onTrigger={onTrigger}>
        {props.children}
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
              backgroundColor: 'red',
            }}
            pointerEvents="none"
            onStartShouldSetResponder={() => false}
          />
          <View
            ref={refs.setFloating}
            collapsable={false}
            style={[styles.tooltip, floatingStyles]}>
            <View style={[styles.arrow, arrowPosition]} ref={arrowRef} />
            <View style={styles.tooltipInner}>
              <AntmView style={styles.content}>{props.content}</AntmView>
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
