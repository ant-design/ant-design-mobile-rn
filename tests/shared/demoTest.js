import glob from 'glob';
import React from 'react';
import renderer from 'react-test-renderer';
import MockDate from 'mockdate';

export default function rnDemoTest(component, options = {}) {
  const files = glob.sync(`./components/${component}/demo/*.tsx`);

  files.forEach((file) => {
    let testMethod = options.skip === true ? test.skip : test;
    if (Array.isArray(options.skip) && options.skip.some(c => file.includes(c))) {
      testMethod = test.skip;
    }
    testMethod(`renders ${file} correctly`, () => {
      // https://github.com/boblauer/MockDate#api
      MockDate.set('11/22/2016', -60); // Set an arbitrary time zone
      let Demo = require(`../.${file}`); // eslint-disable-line global-require, import/no-dynamic-require
      Demo = Demo.default || Demo;
      const wrapper = renderer.create(<Demo />).toJSON();
      expect(wrapper).toMatchSnapshot();
      MockDate.reset();
    });
  });
}
