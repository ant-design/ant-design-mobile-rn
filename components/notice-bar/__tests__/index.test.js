import React from 'react';
import { shallow } from 'enzyme';

import NoticeBar from '../index';

// No need to render Snapshot again, because of `./demo.test.js`

describe('NoticeBar', () => {
  describe('onPress', () => {
    let handleClick;
    let wrapper;

    beforeEach(() => {
      handleClick = jest.fn();
      wrapper = shallow(
        <NoticeBar mode="closable" onPress={handleClick}>
          Notice: The arrival time of incomes and
        </NoticeBar>,
      );
      wrapper.find('TouchableWithoutFeedback').simulate('press');
    });

    it('fires onPress event', () => {
      expect(handleClick).toBeCalledWith();
    });

    it('change state', () => {
      expect(wrapper.state('show')).toBe(false);
    });
  });
});
