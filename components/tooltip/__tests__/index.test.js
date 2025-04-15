import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'
import Provider from '../../provider'
import Tooltip from '../index'

describe('Tooltip', () => {
  it('applies custom arrow styles correctly', () => {
    const inst = renderer.create(
      <Provider>
        <Tooltip
          content="Tooltip content"
          placement="bottom"
          visible={true}
          styles={{
            arrow: {
              borderBottomColor: 'red',
            },
          }}>
          <Text>Tooltip</Text>
        </Tooltip>
      </Provider>,
    )
    const arrow = inst.root.findByProps({ testID: 'tooltip-arrow' })

    const extractBorderBottomColors = (styles) => {
      const colors = []
      const traverseStyles = (style) => {
        if (Array.isArray(style)) {
          style.forEach(traverseStyles)
        } else if (
          style &&
          typeof style === 'object' &&
          style.borderBottomColor
        ) {
          colors.push(style.borderBottomColor)
        }
      }
      traverseStyles(styles)
      return colors
    }
    const borderBottomColors = extractBorderBottomColors(arrow.props.style)
    const lastBorderColor = borderBottomColors[borderBottomColors.length - 1]
    expect(lastBorderColor).toEqual('red')
  })
})
