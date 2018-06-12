import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import Carousel from '../index';

// No need to render Snapshot again, because of `./demo.test.native.js`

describe('Carousel.RN', () => {
  it('has no dots', () => {
    const wrapper = shallow(
      <Carousel dots={false}>
        <View>abc</View>
      </Carousel>,
    );
    // only has `ScrollView`
    expect(wrapper.children()).toHaveLength(1);
    // ScrollViewMock
    expect(wrapper.children().name()).toMatch(/ScrollView/);
  });

  it('has dots', () => {
    const wrapper = shallow(<Carousel><View>abc</View></Carousel>);
    expect(wrapper.children()).toHaveLength(2);
  });

  it('check api', () => {
    const itemStyle = {
      height: 150,
      width: 320,
      flexGrow: 1,
    };
    const wrapper = shallow(
      <Carousel selectedIndex={1}>
        <View style={itemStyle}>item1</View>
        <View style={itemStyle}>item2</View>
        <View style={itemStyle}>item3</View>
      </Carousel>,
    );
    // wrapper.children().at(0) => ScrollView(ScrollViewMock)
    expect(wrapper.children().at(0).children()).toHaveLength(3);
    expect(wrapper.state('selectedIndex')).toEqual(1);
    // because of ``ScrollViewMock``, can not test UI and events.
  });
});
