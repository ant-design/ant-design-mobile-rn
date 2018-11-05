module.exports = {
  env: {
    development: {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [[
        'import',
        {libraryName: 'antd-mobile-rn', libraryDirectory: 'components'}
      ]]
    },
    production: {
      presets: ['module:metro-react-native-babel-preset'],

      plugins: [[
        'import',
        {libraryName: 'antd-mobile-rn', libraryDirectory: 'components'}
      ]]
    },
    test: {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        [
          'import',
          {libraryName: 'antd-mobile-rn', libraryDirectory: 'components'}
        ],
        [
          'module-resolver', {
            'root': ['./'],
            'cwd': 'babelrc',
            'extensions': ['.js', '.ios.js', '.android.js'],
            'stripExtensions': ['.ios.js', '.android.js'],
            'alias': {'antd-mobile-rn': './components'}
          }
        ]
      ]
    }
  }
};
