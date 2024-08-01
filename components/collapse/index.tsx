import { CollapsePanel, Collapse as InternalCollapse } from './collapse'

type InternalInputType = typeof InternalCollapse

type CompoundedComponent = InternalInputType & {
  Panel: typeof CollapsePanel
}

const Collapse = InternalCollapse as CompoundedComponent

Collapse.Panel = CollapsePanel

export default Collapse
