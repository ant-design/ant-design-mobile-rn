const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

  config.module.rules.push({
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader',
  })

  config.module.rules.push({
    test: /\.(js)$/,
    include: [/node_modules\/@bang88\/react-native-ultimate-listview/],
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
        ],
      },
    },
  })
  return config
}
