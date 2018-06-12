import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../index';

// No need to render Snapshot again, because of `./demo.test.native.js`

describe('SearchBar', () => {
  describe('test some events', () => {
    let handler;
    let wrapper;

    beforeEach(() => {
      handler = jest.fn();
    });

    it('fires onChange event', () => {
      wrapper = shallow(<SearchBar onChange={handler} />);
      wrapper.find('TextInput').simulate('changeText', 'foo');
      expect(handler).toBeCalledWith('foo');
    });

    it('fires onFocus event', () => {
      wrapper = shallow(<SearchBar onFocus={handler} />);
      wrapper.find('TextInput').simulate('focus');
      expect(handler).toBeCalledWith();
    });

    it('fires onBlur event', () => {
      wrapper = shallow(<SearchBar onBlur={handler} />);
      wrapper.find('TextInput').simulate('blur');
      expect(handler).toBeCalledWith();
    });

    it('fires onCancel event', () => {
      wrapper = shallow(<SearchBar value="test" showCancelButton onCancel={handler} />);
      wrapper.find('Text').simulate('press');
      expect(handler).toBeCalledWith('test');
    });
  });
});
