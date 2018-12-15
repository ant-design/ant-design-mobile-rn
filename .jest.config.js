const libDir = process.env.LIB_DIR;
const {defaults: tsjPreset} = require('ts-jest/presets');

const transformPackages = [
  'react-native', 'react-native-menu', 'react-native-tab-view',
  'react-native-collapsible', 'react-native-swipeout',
  'react-native-camera-roll-picker', '@bang88/react-native-ultimate-listview',
  'react-native-safe-area-view'
]

module.exports = {
  // ...tsjPreset,
  preset: 'react-native',
  setupFiles: ['./tests/setup.js'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '_site',
    'site',
  ],
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
    }
  }
};
