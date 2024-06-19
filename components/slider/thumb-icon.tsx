import React from 'react'
import { StyleSheet, View } from 'react-native'

export const ThumbIcon = () => {
  return (
    <View style={style.thumbIcon}>
      <View style={style.line} />
      <View style={[style.line, { height: '42%', marginHorizontal: 3 }]} />
      <View style={style.line} />
    </View>
  )
}

const style = StyleSheet.create({
  thumbIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  line: {
    width: 2,
    height: '30%',
    borderRadius: 2,
    backgroundColor: '#3086ff',
  },
})
