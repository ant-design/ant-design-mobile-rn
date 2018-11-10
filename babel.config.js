module.exports = {
  env: {
    development: {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [[
        'import',
        {libraryName: '@ant-design/react-native', libraryDirectory: 'components'}
      ]]
    },
    production: {
      presets: ['module:metro-react-native-babel-preset'],

      plugins: [[
        'import',
        {libraryName: '@ant-design/react-native', libraryDirectory: 'components'}
      ]]
    },
    test: {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        [
          'import',
          {libraryName: '@ant-design/react-native', libraryDirectory: 'components'}
        ]
      ]
    }
  }
};
