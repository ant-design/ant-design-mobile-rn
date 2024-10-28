import type { FC, ReactNode } from 'react'
import React, { useMemo } from 'react'
import { View } from 'react-native'
import AntmView from '../view'
import { SliderStyle } from './style'

export type SliderMarks = {
  [key: number]: ReactNode
}

type MarksProps = {
  marks: SliderMarks
  max: number
  min: number
  styles: Pick<SliderStyle, 'markText' | 'mark'>
}

const Marks: FC<MarksProps> = ({ marks, max, min, styles }) => {
  const marksKeys = Object.keys(marks)

  const range = max - min
  const elements = useMemo(
    () =>
      marksKeys
        .map(parseFloat)
        .sort((a, b) => a - b)
        .filter((point) => point >= min && point <= max)
        .map((point) => {
          const markPoint = marks[point]
          if (!markPoint && markPoint !== 0) {
            return null
          }
          const style = { left: `${((point - min) / range) * 100}%` }
          return (
            <View style={[{ position: 'absolute' }, style]} key={point}>
              <AntmView style={styles.markText}>{markPoint}</AntmView>
            </View>
          )
        }),
    [marks, marksKeys, max, min, range, styles.markText],
  )

  return <View style={styles.mark}>{elements}</View>
}

export default Marks
