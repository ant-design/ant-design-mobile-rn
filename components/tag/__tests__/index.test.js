import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Tag from '../index';

// No need to render Snapshot again, because of `./demo.test.js`

describe('Tag', () => {
  it('small size does not have closeDom', () => {
    const wrapper = shallow(<Tag small closable>Basic</Tag>);
    expect(wrapper.find('TouchableWithoutFeedback')).toHaveLength(1);
    expect(wrapper.containsMatchingElement(<Text>x</Text>)).toBeFalsy();
  });

  it('onChange then selected', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Tag onChange={onChange}>Basic</Tag>);
    expect(wrapper.state('selected')).toEqual(false);
    wrapper.find('TouchableWithoutFeedback').at(0).simulate('press');
    expect(wrapper.state('selected')).toEqual(true);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('onClose and removed', () => {
    const onClose = jest.fn();
    const afterClose = jest.fn();
    const wrapper = shallow(<Tag closable onClose={onClose} afterClose={afterClose}>Basic</Tag>);
    expect(wrapper.find('TouchableWithoutFeedback')).toHaveLength(2);
    expect(wrapper.state('closed')).toEqual(false);
    wrapper.find('TouchableWithoutFeedback').at(1).simulate('press');
    expect(onClose).toHaveBeenCalled();
    expect(wrapper.state('closed')).toEqual(true);
    expect(afterClose).toHaveBeenCalled();
    expect(wrapper.find('TouchableWithoutFeedback')).toHaveLength(0);
  });

  it('onLongPress then callback', () => {
    const onLongPress = jest.fn();
    const wrapper = shallow(<Tag onLongPress={onLongPress}>Basic</Tag>);
    wrapper.find('TouchableWithoutFeedback').at(0).simulate('longPress');
    expect(onLongPress).toHaveBeenCalledWith();
  });
});
