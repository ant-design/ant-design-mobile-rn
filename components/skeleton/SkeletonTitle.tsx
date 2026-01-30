import React from 'react'
import { useTheme } from '../style'
import { SkeletonTitleProps } from './PropsType'
import InternalSkeleton from './Skeleton'
import SkeletonStyles from './style'

const InternalSkeletonTitle: React.FC<SkeletonTitleProps> = (props) => {
  const { animated, style, styles: customStyles, ...restProps } = props

  const themeStyles = useTheme({
    styles: customStyles,
    themeStyles: SkeletonStyles,
  })

  return (
    <InternalSkeleton
      animated={animated}
      style={[themeStyles.skeletonTitle, style]}
      styles={customStyles}
      {...restProps}
    />
  )
}

const SkeletonTitle = React.memo(
  InternalSkeletonTitle,
) as typeof InternalSkeletonTitle

SkeletonTitle.displayName = 'SkeletonTitle'

export default SkeletonTitle
