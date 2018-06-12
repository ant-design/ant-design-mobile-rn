import React from 'react';
import { shallow } from 'enzyme';

import NoticeBar from '../index';

// No need to render Snapshot again, because of `./demo.test.native.js`

describe('NoticeBar', () => {
  describe('onClick', () => {
    let handleClick;
    let wrapper;

    beforeEach(() => {
      handleClick = jest.fn();
      wrapper = shallow(
        <NoticeBar mode="closable" onClick={handleClick}>
          Notice: The arrival time of incomes and
        </NoticeBar>,
      );
      wrapper.find('TouchableWithoutFeedback').simulate('press');
    });

    it('fires onClick event', () => {
      expect(handleClick).toBeCalledWith();
    });

    it('change state', () => {
      expect(wrapper.state('show')).toBe(false);
    });
  });
});
