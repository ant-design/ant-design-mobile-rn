import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import renderer from 'react-test-renderer';
import Tag from '../index';
// No need to render Snapshot again, because of `./demo.test.js`

describe('Tag', () => {
  it('small size does not have closeDom', () => {
    const inst = renderer.create(
      <Tag small closable>Basic</Tag>,
    );
    inst.root.findAllByType(TouchableWithoutFeedback);
    expect(inst.root.findAllByType(TouchableWithoutFeedback)).toHaveLength(1);
    expect(inst.root.findByType(Text).children === 'x').toBeFalsy();
  });

  it('onChange then selected', () => {
    const onChange = jest.fn();
    const inst = renderer.create(
      <Tag onChange={onChange}>Basic</Tag>,
    );
    expect(inst.getInstance().state.selected).toEqual(false);
    inst.getInstance().onPress();
    expect(inst.getInstance().state.selected).toEqual(true);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('onClose and removed', () => {
    const onClose = jest.fn();
    const afterClose = jest.fn();
    const inst = renderer.create(<Tag closable onClose={onClose} afterClose={afterClose}>Basic</Tag>);
    expect(inst.root.findAllByType(TouchableWithoutFeedback)).toHaveLength(2);
    expect(inst.getInstance().state.closed).toEqual(false);
    inst.getInstance().onTagClose();
    expect(onClose).toHaveBeenCalled();
    expect(inst.getInstance().state.closed).toEqual(true);
    expect(afterClose).toHaveBeenCalled();
    expect(inst.root.findAllByType(TouchableWithoutFeedback)).toHaveLength(0);
  });

  it('onLongPress then callback', () => {
    const onLongPress = jest.fn();
    const inst = renderer.create(<Tag onLongPress={onLongPress}>Basic</Tag>);
    inst.getInstance().handleLongPress();
    expect(onLongPress).toHaveBeenCalledWith();
  });
});
