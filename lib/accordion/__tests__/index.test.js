import { shallow } from 'enzyme';
import React from 'react';

import { List } from '../../';
import Accordion from '../index';

const Panel = Accordion.Panel;
// No need to render Snapshot again, because of `./demo.test.js`

describe('Accordion', () => {
  let handler;
  let wrapper;

  beforeEach(() => {
    handler = jest.fn();
  });
  it('render correctly', () => {
    wrapper = shallow(
      <Accordion onChange={handler}>
        <Panel header="Title 1">
          <List>
            <List.Item>Content 1</List.Item>
            <List.Item>Content 2</List.Item>
            <List.Item>Content 3</List.Item>
          </List>
        </Panel>
        <Panel header="Title 2">this is panel content2 or other</Panel>
        <Panel header="Title 3">
          Text text text text text text text text text text text text text text
          text
        </Panel>
      </Accordion>,
    );
    expect(wrapper).not.toBeNull();
  });
  // TODO: more tests
});
