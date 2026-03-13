import { SectionListData, SectionListProps } from 'react-native'
import { IndexBarStyle } from './style'

export interface IndexBarSectionData {
  key: string
  title: string
  data: any[]
  [key: string]: any
}

export interface IndicatorProps {
  indexes: string[]
  onChange?: (key: string) => void
  styles?: Partial<IndexBarStyle>
}

export interface IndexBarProps
  extends SectionListProps<any, IndexBarSectionData> {
  sections: SectionListData<any, IndexBarSectionData>[]
  sortable?: boolean
  showIndicator?: boolean
  animated?: boolean
  onIndexChange?: (key: string) => void
  styles?: Partial<IndexBarStyle>
}
