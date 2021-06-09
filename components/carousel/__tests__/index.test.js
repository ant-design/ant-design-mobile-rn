import { render } from '@testing-library/react-native'
import React from 'react'
import { View } from 'react-native'
import Carousel from '../index'

// No need to render Snapshot again, because of `./demo.test.js`

describe('Carousel.RN', () => {
  it('has no dots', async () => {
    const { container } = render(
      <Carousel dots={false}>
        <View>abc</View>
      </Carousel>,
    )
    // only has `ScrollView`
    expect(container.findAll((x) => x.type === 'RNCViewPager')).toHaveLength(1)
  })
})
