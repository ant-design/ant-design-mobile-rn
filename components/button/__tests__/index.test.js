import React from 'react'
import { TouchableHighlight } from 'react-native'
import renderer from 'react-test-renderer'
import Button from '../index'
// No need to render Snapshot again, because of `./demo.test.js`
// TODO: add tests for render props
describe('Button', () => {
  describe('pressIn', () => {
    let handlePressIn
    /** @type {renderer.ReactTestRenderer} */
    let wrapper

    beforeEach(() => {
      handlePressIn = jest.fn()
      wrapper = renderer.create(<Button onPressIn={handlePressIn}>foo</Button>)
      wrapper.root.findByType(TouchableHighlight).props.onPressIn()
    })

    it('fires pressIn event', () => {
      expect(handlePressIn).toBeCalledWith()
    })

    it('change pressIn state', () => {
      expect(wrapper.getInstance().state.pressIn).toBe(true)
    })
  })

  describe('pressOut', () => {
    let handlePressOut
    /** @type {renderer.ReactTestRenderer} */
    let wrapper

    beforeEach(() => {
      handlePressOut = jest.fn()
      wrapper = renderer.create(
        <Button onPressOut={handlePressOut}>foo</Button>,
      )
      wrapper.getInstance().state.pressIn = true
      wrapper.root.findByType(TouchableHighlight).props.onPressOut()
    })

    it('fires pressOut event', () => {
      expect(handlePressOut).toBeCalledWith()
    })

    it('set pressIn state', () => {
      expect(wrapper.getInstance().state.pressIn).toBe(false)
    })
  })

  describe('showUnderlay', () => {
    let handleShowUnderlay
    /** @type {renderer.ReactTestRenderer} */
    let wrapper
    beforeEach(() => {
      handleShowUnderlay = jest.fn()
      wrapper = renderer.create(
        <Button onShowUnderlay={handleShowUnderlay}>foo</Button>,
      )
      wrapper.root.findByType(TouchableHighlight).props.onShowUnderlay()
    })

    it('fires showUnderlay event', () => {
      expect(handleShowUnderlay).toBeCalledWith()
    })

    it('set touchIt state', () => {
      expect(wrapper.getInstance().state.touchIt).toBe(true)
    })
  })

  describe('hideUnderlay', () => {
    let handleHideUnderlay
    /** @type {renderer.ReactTestRenderer} */
    let wrapper

    beforeEach(() => {
      handleHideUnderlay = jest.fn()
      wrapper = renderer.create(
        <Button onHideUnderlay={handleHideUnderlay}>foo</Button>,
      )
      wrapper.getInstance().state.touchIt = true

      wrapper.root.findByType(TouchableHighlight).props.onHideUnderlay()
    })

    it('fires hideUnderlay event', () => {
      expect(handleHideUnderlay).toBeCalledWith()
    })

    it('change touchIt state', () => {
      expect(wrapper.getInstance().state.touchIt).toBe(false)
    })
  })

  // https://github.com/airbnb/enzyme/issues/386
  describe('disabled', () => {
    /** @type {renderer.ReactTestRenderer} */
    let wrapper
    const onPressIn = jest.fn()

    beforeEach(() => {
      wrapper = renderer.create(
        <Button disabled onPressIn={onPressIn}>
          foo
        </Button>,
      )
    })

    it.only('pressIn not change pressIn state', () => {
      wrapper.root.findByType(Button).props.onPressIn()
      expect(onPressIn).toBeCalledWith()
    })

    it('pressOut not change pressIn state', () => {
      wrapper.getInstance().pressIn = true
      wrapper.root.findByType(TouchableHighlight).props.onPressOut()
      expect(wrapper.getInstance().state.pressIn).toBe(true)
    })

    it('showUnderlay not change touchIt state', () => {
      wrapper.root.findByType(TouchableHighlight).props.onShowUnderlay()
      expect(wrapper.getInstance().state.touchIt).toBe(false)
    })

    it('hideUnderlay not change touchIt state', () => {
      wrapper.getInstance().state.touchIt = true
      wrapper.root.findByType(TouchableHighlight).props.onHideUnderlay()
      expect(wrapper.getInstance().state.touchIt).toBe(true)
    })
  })
})
