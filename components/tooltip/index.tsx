import { onScrollEmit } from '../_util/hooks/useScroll'
import InternalTooltip from './Tooltip'
import { TooltipMenu } from './TooltipMenu'
export type {
  Action,
  DeprecatedPlacement,
  Placement,
  TooltipMenuProps,
  TooltipProps,
  TooltipRef,
} from './PropsType'

type InternalTooltipType = typeof InternalTooltip

type CompoundedComponent = InternalTooltipType & {
  Menu: typeof TooltipMenu
  // @floating-ui/react-native UseFloatingReturn
  scrollProps: {
    onScroll: (event: {
      nativeEvent: {
        contentOffset: {
          x: number
          y: number
        }
      }
    }) => void
    scrollEventThrottle: 16
  }
}

const Tooltip = InternalTooltip as CompoundedComponent

Tooltip.Menu = TooltipMenu
Tooltip.scrollProps = {
  onScroll: onScrollEmit,
  scrollEventThrottle: 16,
}

export default Tooltip
