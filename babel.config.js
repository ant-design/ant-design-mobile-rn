const path = require('path')
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
    [
      'import',
      {
        libraryName: '@ant-design/react-native',
        customName: (name) => {
          return path.resolve(__dirname, `./components/${name}`)
        },
      },
    ],
  ],
}
