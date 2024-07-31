import type { ReactNode } from 'react'
import { ListItemStyle, ListStyle } from '../list/style'

type ValueProps<T> = {
  activeKey?: T
  defaultActiveKey?: T
  onChange?: (activeKey: T) => void
  arrow?: ReactNode | ((active: boolean) => ReactNode)
}
export type CollapseProps = (
  | ({
      accordion?: false
    } & ValueProps<string[]>)
  | ({
      accordion: true
    } & ValueProps<string | null>)
) & {
  children?: ReactNode
  styles?: Partial<ListStyle & ListItemStyle>
}

export type CollapsePanelProps = {
  arrow?: ReactNode | ((active: boolean) => ReactNode)
  children?: ReactNode
  destroyOnClose?: boolean
  disabled?: boolean
  forceRender?: boolean
  key: string
  onPress?: (event: any) => void
  title: ReactNode
  styles?: Partial<ListItemStyle>
}
