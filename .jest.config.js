const libDir = process.env.LIB_DIR;
const { defaults: tsjPreset } = require('ts-jest/presets');

const transformPackages = [
  'react-native',
  'react-native-modal-popover',
  'react-native-tab-view',
  'react-native-collapsible',
  'react-native-swipeout',
  'react-native-camera-roll-picker',
  '@bang88/react-native-ultimate-listview',
  '@react-native-community',
  '@react-native-picker/picker',
  'react-native-pager-view'
];

module.exports = {
  // ...tsjPreset,
  preset: '@testing-library/react-native',
  setupFiles: ["@testing-library/react-native/jest-preset",],
  // setupFilesAfterEnv: [
  //   '@testing-library/react-native/cleanup-after-each',
  //   // ... other setup files ...
  // ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '_site', 'site'],
  transform: {
    // '\\.tsx?$': 'ts-jest',
    ...tsjPreset.transform,
    // '\\.tsx?$': './node_modules/antd-tools/lib/jest/codePreprocessor',
    // '\\.js$': './node_modules/antd-tools/lib/jest/codePreprocessor',
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '\\.png': '<rootDir>/tests/imageStub.js',
  },
  testRegex: libDir === 'dist' ? 'demo\\.test\\.js$' : '.*\\.test\\.js$',
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/*/style/*.{ts,tsx}',
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(${transformPackages.join('|')})/)`,
  ],

  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'tsconfig.test.json',
    },
  },
};
