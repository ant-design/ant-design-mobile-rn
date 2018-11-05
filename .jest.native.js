const libDir = process.env.LIB_DIR;
const { defaults: tsjPreset } = require('ts-jest/presets');

const transformPackages = [
  'react-native',
  'react-native-menu',
  'react-native-tab-view',
  'react-native-collapsible',
  'react-native-swipeout',
  'react-native-camera-roll-picker',
]

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  setupFiles: [
    './tests/setup.native.js'
  ],
  moduleFileExtensions: [
    'native.ts',
    'native.tsx',
    'native.js',
    'native.jsx',
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
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^\\.\\./style/images/(\d+)\\.png$": '<rootDir>/tests/imageStub.js',
  },
  // testRegex: libDir === 'dist' ? 'demo\\.test\\.native\\.js$' : '.*\\.test\\.native\\.js$',
  collectCoverageFrom: [
    'components/**/*.native.{ts,tsx}',
    '!components/*/style/*.{ts,tsx}',
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(${transformPackages.join('|')})/)`,
  ],

  globals: {
    'ts-jest': {
      babelConfig: true,
    }
  },
  // This is the only part which you can keep
  // from the above linked tutorial's config:
  cacheDirectory: '.jest/cache',
};
