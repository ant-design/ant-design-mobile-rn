import React from 'react'
import { TextInput } from 'react-native'
import renderer from 'react-test-renderer'
import SearchBar from '../index'

// No need to render Snapshot again, because of `./demo.test.js`

describe('SearchBar', () => {
  describe('test some events', () => {
    let handler
    /** @type {renderer.ReactTestRenderer} */
    let wrapper

    beforeEach(() => {
      handler = jest.fn()
    })

    it('fires onChange event', () => {
      wrapper = renderer.create(<SearchBar onChange={handler} />)
      wrapper.root.findByType(TextInput).props.onChangeText('foo')
      expect(handler).toBeCalledWith('foo')
    })

    it('fires onFocus event', () => {
      wrapper = renderer.create(<SearchBar onFocus={handler} />)
      wrapper.root.findByType(TextInput).props.onFocus()
      expect(handler).toBeCalledWith(undefined)
    })

    it('fires onBlur event', () => {
      wrapper = renderer.create(<SearchBar onBlur={handler} />)
      wrapper.root.findByType(TextInput).props.onBlur()
      expect(handler).toBeCalledWith(undefined)
    })

    it('fires onCancel event', () => {
      wrapper = renderer.create(
        <SearchBar value="test" showCancelButton onCancel={handler} />,
      )
      wrapper.root.instance.onCancel()
      expect(handler).toBeCalledWith('test')
    })
  })
})
