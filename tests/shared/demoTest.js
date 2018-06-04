import glob from 'glob';
import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import MockDate from 'mockdate';

export function rnDemoTest(component, options = {}) {
  const files = glob.sync(`./components/${component}/demo/*.tsx`);

  files.forEach((file) => {
    let testMethod = options.skip === true ? test.skip : test;
    if (Array.isArray(options.skip) && options.skip.some(c => file.includes(c))) {
      testMethod = test.skip;
    }

    testMethod(`renders ${file} correctly`, () => {
      let Demo = require(`../.${file}`); // eslint-disable-line global-require, import/no-dynamic-require
      Demo = Demo.default || Demo;
      const tree = renderer.create(<Demo />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
}
