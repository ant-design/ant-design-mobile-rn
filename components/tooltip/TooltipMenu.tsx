import React, { forwardRef, memo, useMemo } from 'react'
import { View } from 'react-native'
import { TooltipMenuProps, TooltipRef } from './PropsType'
import Tooltip from './Tooltip'

const TooltipMenu = forwardRef<TooltipRef, TooltipMenuProps>((props, ref) => {
  const overlay = useMemo(() => {
    return <View />
  }, [])
  return <Tooltip {...props} content={overlay} ref={ref} />
})

TooltipMenu.displayName = 'Tooltip.Menu'

export default memo(TooltipMenu)
