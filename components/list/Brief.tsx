import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '../style'
import { BriefProps as BriefBasePropsType } from './PropsType'
import ListStyles, { BriefStyle } from './style/index'

export interface BriefProps extends BriefBasePropsType {
  styles?: Partial<BriefStyle>
}

const Brief = React.forwardRef<View, BriefProps>((props, ref) => {
  const { children, style, wrap } = props

  let numberOfLines = {}

  if (wrap === false) {
    numberOfLines = {
      numberOfLines: 1,
    }
  }
  const styles = useTheme({
    styles: props.styles,
    themeStyles: ListStyles,
  })
  return (
    <View style={[styles!.Brief]} ref={ref}>
      <Text style={[styles!.BriefText, style]} {...numberOfLines}>
        {children}
      </Text>
    </View>
  )
})

export default React.memo(Brief)
