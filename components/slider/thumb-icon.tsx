import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemeContext } from '../style'

export const ThumbIcon = () => {
  const theme = useContext(ThemeContext)
  return (
    <View style={style.thumbIcon}>
      <View style={[style.line, { backgroundColor: theme.brand_primary }]} />
      <View
        style={[
          style.line,
          {
            backgroundColor: theme.brand_primary,
            height: '42%',
            marginHorizontal: 3,
          },
        ]}
      />
      <View style={[style.line, { backgroundColor: theme.brand_primary }]} />
    </View>
  )
}

const style = StyleSheet.create({
  thumbIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  line: {
    width: 2,
    height: '30%',
    borderRadius: 2,
  },
})
