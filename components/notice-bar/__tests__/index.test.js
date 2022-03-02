import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import renderer from 'react-test-renderer'
import NoticeBar from '../index'
// No need to render Snapshot again, because of `./demo.test.js`

describe('NoticeBar', () => {
  describe('onPress', () => {
    let handleClick
    /** @type {renderer.ReactTestRenderer} */
    let wrapper

    beforeEach(() => {
      handleClick = jest.fn()
      wrapper = renderer.create(
        <NoticeBar mode="closable" onPress={handleClick}>
          Notice: The arrival time of incomes and
        </NoticeBar>,
      )
      wrapper.root.findByType(TouchableWithoutFeedback).props.onPress()
    })

    it('fires onPress event', () => {
      expect(handleClick).toBeCalledWith()
    })

    it('change state', () => {
      expect(wrapper.getInstance().state.show).toBe(false)
    })
  })
})
