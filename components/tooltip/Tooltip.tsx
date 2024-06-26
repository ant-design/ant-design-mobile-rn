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
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { View } from 'react-native'
import { mergeProps } from '../_util/with-default-props'
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
    destroyOnHide,
    // getContainer?: GetContainer
    // stopPropagation?: PropagationEvent[]
    style,
  } = props

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

  const arrowRef = useRef<View>(null)

  const onTrigger = () => setVisible((v) => !v)

  const [reference, setReference] = useState<any>()
  const [floating, setFloating] = useState<any>()

  const {
    floatingStyles,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    placement: realPlacement,
    update,
  } = useFloating({
    sameScrollView: true,
    placement: normalizePlacement(placement),
    elements: {
      reference,
      floating,
    },
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

  // useEffect(() => {
  //   update()
  // }, [update, reference, floating])

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
        setReference={(el) => setReference(el)}
        trigger={trigger}
        onLayout={(e) => {
          console.log(e.nativeEvent.layout, 'asd')
          // update()
        }}
        onTrigger={onTrigger}>
        {children}
      </Wrapper>
      {!(!visible && destroyOnHide) && (
        <View
          ref={(el) => {
            console.log(el)
            // setTimeout(() => {
            setFloating(el)
            // }, 1500)
          }}
          collapsable={false}
          style={[
            ss.tooltip,
            floatingStyles,
            style,
            !visible && !destroyOnHide && { display: 'none' },
          ]}>
          <View style={[ss.arrow, arrowPosition]} ref={arrowRef} />
          <AntmView style={[ss.content]}>{content}</AntmView>
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
