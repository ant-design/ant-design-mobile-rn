import React from 'react'
import { View } from 'react-native'
import { useTheme } from '../style'
import { SkeletonParagraphProps } from './PropsType'
import InternalSkeleton from './Skeleton'
import SkeletonStyles from './style'

const InternalSkeletonParagraph: React.FC<SkeletonParagraphProps> = (props) => {
  const {
    animated,
    lineCount = 4,
    style,
    styles: customStyles,
    ...restProps
  } = props

  const themeStyles = useTheme({
    styles: customStyles,
    themeStyles: SkeletonStyles,
  })

  const _lineCount = typeof lineCount === 'number' ? Math.max(lineCount, 1) : 4
  return (
    <View style={[themeStyles.skeletonParagraph, style]} {...restProps}>
      {Array.from({ length: _lineCount }).map((_, index) => {
        const isLastLine = index === _lineCount - 1
        return (
          <InternalSkeleton
            key={index}
            animated={animated}
            style={[
              themeStyles.skeletonParagraphLine,
              isLastLine && themeStyles.skeletonParagraphLastLine,
            ]}
            styles={customStyles}
          />
        )
      })}
    </View>
  )
}

const SkeletonParagraph = React.memo(
  InternalSkeletonParagraph,
) as typeof InternalSkeletonParagraph

SkeletonParagraph.displayName = 'SkeletonParagraph'

export default SkeletonParagraph
