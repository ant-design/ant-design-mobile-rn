const libDir = process.env.LIB_DIR;
const { defaults: tsjPreset } = require('ts-jest/presets');

const transformPackages = [
  '@react-native',
  'react-native',
  'react-native-modal-popover',
  'react-native-collapsible',
  '@bang88/react-native-ultimate-listview',
  '@react-native-community',
  'react-native-gesture-handler',
  'react-native-reanimated'
];

module.exports = {
  "preset": "react-native",
  "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"],
  "setupFiles": ["./jestSetup.js"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '_site', 'site'],
  transform: {
    ...tsjPreset.transform,
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
