import React, { useCallback, useMemo, useRef } from 'react'
import {
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
  Text,
  View,
} from 'react-native'
import { useTheme } from '../style'
import Indicator from './Indicator'
import { IndexBarProps, IndexBarSectionData } from './PropsType'
import IndexBarStyles from './style/index'

const IndexBar: React.FC<IndexBarProps> = ({
  sections,
  renderItem,
  renderSectionHeader,
  keyExtractor,
  onIndexChange,
  animated = false,
  showIndicator = true,
  showsVerticalScrollIndicator = false,
  stickySectionHeadersEnabled = false,
  bounces = false,
  style,
  styles,
  ...restProps
}) => {
  const themeStyles = useTheme({
    styles,
    themeStyles: IndexBarStyles,
  })
  const sectionListRef = useRef<SectionList<any, IndexBarSectionData>>(null)

  const memoAvailableIndexes = useMemo<string[]>(() => {
    if (!sections || sections.length === 0) {
      return []
    }
    return sections
      .map((section) => section.key)
      .sort((a, b) => a.localeCompare(b))
  }, [sections])

  const _showIndicator = showIndicator && memoAvailableIndexes?.length > 0

  const _onIndexChange = useCallback(
    (key: string, index: number) => {
      if (typeof onIndexChange === 'function') {
        onIndexChange(key, index)
      }
      sectionListRef.current?.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        animated,
      })
    },
    [onIndexChange, animated],
  )

  // ========== memoRenderItem ============
  const memoRenderItem = useCallback(
    (params: SectionListRenderItemInfo<any, IndexBarSectionData>) => {
      if (typeof renderItem === 'function') {
        return renderItem(params)
      }
      return (
        <View
          style={[
            themeStyles.item,
            params.index === params.section.data.length - 1 &&
              themeStyles.itemLast,
          ]}>
          <Text style={themeStyles.itemTitle}>{params.item}</Text>
        </View>
      )
    },
    [renderItem, themeStyles.item, themeStyles.itemLast, themeStyles.itemTitle],
  )

  // ========== memoRenderSectionHeader ============
  const memoRenderSectionHeader = useCallback(
    (params: { section: SectionListData<any, IndexBarSectionData> }) => {
      if (typeof renderSectionHeader === 'function') {
        return renderSectionHeader(params)
      }
      return (
        <View style={themeStyles.sectionHeader}>
          <Text style={themeStyles.sectionHeaderTitle}>
            {params.section.title}
          </Text>
        </View>
      )
    },
    [
      renderSectionHeader,
      themeStyles.sectionHeader,
      themeStyles.sectionHeaderTitle,
    ],
  )

  // ========== memoKeyExtractor ============
  const memoKeyExtractor = useCallback(
    (item: string, index: number) => {
      if (typeof keyExtractor === 'function') {
        return keyExtractor(item, index)
      }
      return item + index
    },
    [keyExtractor],
  )

  return (
    <View style={[themeStyles.container, style]}>
      <SectionList
        ref={sectionListRef}
        sections={sections}
        renderItem={memoRenderItem}
        renderSectionHeader={memoRenderSectionHeader}
        keyExtractor={memoKeyExtractor}
        style={themeStyles.listContainer}
        {...restProps}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        stickySectionHeadersEnabled={stickySectionHeadersEnabled}
        bounces={bounces}
      />
      {_showIndicator && (
        <View style={themeStyles.indicatorPosition}>
          <Indicator
            indexes={memoAvailableIndexes}
            styles={themeStyles}
            onChange={_onIndexChange}
          />
        </View>
      )}
    </View>
  )
}

export default IndexBar
