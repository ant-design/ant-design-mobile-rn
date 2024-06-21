import InternalTooltip from './Tooltip'
import TooltipMenu from './TooltipMenu'
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
}

const Tooltip = InternalTooltip as CompoundedComponent

Tooltip.Menu = TooltipMenu

export default Tooltip
