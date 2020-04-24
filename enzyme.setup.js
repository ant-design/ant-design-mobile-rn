// // setup-tests.js
//
// import 'react-native';
// import 'jest-enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import Enzyme from 'enzyme';
//
// /**
//  * Set up DOM in node.js environment for Enzyme to mount to
//  */
// const { JSDOM } = require('jsdom');
//
// const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
// const { window } = jsdom;
//
// function copyProps(src, target) {
//   Object.defineProperties(target, {
//     ...Object.getOwnPropertyDescriptors(src),
//     ...Object.getOwnPropertyDescriptors(target),
//   });
// }
//
// global.window = window;
// global.document = window.document;
// global.navigator = {
//   userAgent: 'node.js',
// };
// copyProps(window, global);
//
// /**
//  * Set up Enzyme to mount to DOM, simulate events,
//  * and inspect the DOM in tests.
//  */
// Enzyme.configure({ adapter: new Adapter() });
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
