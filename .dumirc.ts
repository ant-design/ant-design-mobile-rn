import { defineConfig } from 'dumi'
import path from 'node:path'
import p from './package.json'

const repo = process.env.PUBLIC_PATH || 'ant-design-mobile-rn'
const publicPath = repo ? `/${repo}/` : '/'

export default defineConfig({
  title: 'Ant Design Mobile RN',
  favicons: [
    'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  ],
  metas: [
    { name: 'keywords', content: 'ant design,react native,组件库,mobile' },
    {
      name: 'description',
      content: '基于蚂蚁金服移动设计规范的 React Native 组件库',
    },
  ],
  define: {
    'process.env.VERSION': p.version,
    // React Native 全局，文档站开发/构建时需定义
    __DEV__: process.env.NODE_ENV !== 'production',
  },
  base: `/${repo}/`,
  publicPath,
  outputPath: 'docs-dist',
  resolve: {
    entryFile: './components/index.tsx',
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'components' }],
    // passive: 所有 .md 中的 ```jsx/tsx 代码块默认仅展示（不执行），需预览时在代码块加 | demo
    codeBlockMode: 'passive',
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  styles: [path.join(__dirname, '.dumi/global.less')],
  themeConfig: {
    name: 'Ant Design Mobile RN',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    footer: false,
    socialLinks: {
      github: 'https://github.com/ant-design/ant-design-mobile-rn',
    },
    deviceWidth: 375,
    nav: [
      { title: '首页', link: '/' },
      { title: '组件', link: '/react/introduce' },
      { title: 'Web 组件', link: 'https://mobile.ant.design' },
      { title: '支持我们', link: '/react/support' },
    ],
  },
  alias: {
    '@ant-design/react-native/lib': path.join(__dirname, 'components'),
    '@ant-design/react-native': __dirname,
    site: path.join(__dirname, 'site'),
    // 文档站运行在浏览器，用 react-native-web 替代 react-native 避免解析 Flow 语法
    'react-native': path.join(__dirname, 'node_modules/react-native-web'),
    // reanimated 会 require 此路径，在文档站用 stub 避免拉入真实 RN
    'react-native/Libraries/Renderer/shims/ReactNative': path.join(
      __dirname,
      'scripts/dumi/stub-RNRenderer.js',
    ),
    // gesture-handler 会 require 此路径，在文档站用 stub
    'react-native/Libraries/Pressability/PressabilityDebug': path.join(
      __dirname,
      'scripts/dumi/stub-PressabilityDebug.js',
    ),
    // gesture-handler 会 require 此路径（codegen 原生组件），在文档站用 stub
    'react-native/Libraries/Utilities/codegenNativeComponent': path.join(
      __dirname,
      'scripts/dumi/stub-codegenNativeComponent.js',
    ),
  },
  mfsu: false,
  // 让 Babel 转译 node_modules 中含 JSX 的包
  extraBabelIncludes: [
    path.join(__dirname, 'node_modules/@bang88/react-native-ultimate-listview'),
    path.join(__dirname, 'node_modules/react-native-collapsible'),
    path.join(__dirname, 'node_modules/react-native-modal-popover'),
    path.join(__dirname, 'node_modules/react-native-reanimated'),
  ],
  chainWebpack(config: any) {
    const stubRNRenderer = path.join(__dirname, 'scripts/dumi/stub-RNRenderer.js')
    const stubPressability = path.join(__dirname, 'scripts/dumi/stub-PressabilityDebug.js')
    // webpack 由 dumi 依赖带入，无类型声明
    const webpack = require('webpack')

    // ==================== 确保 @ant-design/react-native 正确解析 ====================
    // 在 webpack 的 resolve.alias 中显式设置 @ant-design/react-native 指向 components/index.tsx
    config.resolve.alias.set(
      '@ant-design/react-native',
      path.join(__dirname, 'components/index.tsx')
    )
    config.resolve.alias.set(
      '@ant-design/react-native/lib',
      path.join(__dirname, 'components')
    )

    // ==================== React Native Reanimated Web Support ====================
    // 参考: https://docs.swmansion.com/react-native-reanimated/docs/guides/web-support/

    // 官方文档要求的两个 webpack 插件
    config.plugin('env-jest-worker').use(webpack.EnvironmentPlugin, [
      {
        JEST_WORKER_ID: null,
      },
    ])

    config.plugin('define-process-env').use(webpack.DefinePlugin, [
      {
        process: {
          env: {},
        },
      },
    ])

    // ==================== Stub 文件替换 ====================
    // 用 NormalModuleReplacementPlugin 强制把 RN 内部路径解析到 stub（alias 可能被 react-native -> react-native-web 覆盖）
    config.plugin('replace-rn-renderer').use(webpack.NormalModuleReplacementPlugin, [
      /react-native[/\\]Libraries[/\\]Renderer[/\\]shims[/\\]ReactNative$/,
      stubRNRenderer,
    ])
    config.plugin('replace-pressability').use(webpack.NormalModuleReplacementPlugin, [
      /react-native[/\\]Libraries[/\\]Pressability[/\\]PressabilityDebug$/,
      stubPressability,
    ])
    const stubCodegen = path.join(__dirname, 'scripts/dumi/stub-codegenNativeComponent.js')
    config.plugin('replace-codegen').use(webpack.NormalModuleReplacementPlugin, [
      /react-native[/\\]Libraries[/\\]Utilities[/\\]codegenNativeComponent$/,
      stubCodegen,
    ])
    const stubReanimatedModule = path.join(
      __dirname,
      'scripts/dumi/stub-NativeReanimatedModule.js',
    )
    config.plugin('replace-reanimated-module').use(webpack.NormalModuleReplacementPlugin, [
      /[/\\]specs[/\\]NativeReanimatedModule(\.js)?$/,
      stubReanimatedModule,
    ])

    // 兼容 type-only 模块被 re-export 时的 "module has no exports"：为所有 PropsType.tsx 注入运行时 stub 导出
    config.module
      .rule('type-only-stub')
      .enforce('pre')
      .test(/[/\\]PropsType\.tsx$/)
      .include.add(path.join(__dirname, 'components'))
      .end()
      .use('type-only-stub')
      .loader(path.join(__dirname, 'scripts/dumi/type-only-stub-loader.js'))
      .end()

    // 排除 example 文件夹
    config.module
      .rule('tsx')
      .exclude.add(/example/)
    config.module
      .rule('jsx')
      .exclude.add(/example/)
    config.module
      .rule('ts')
      .exclude.add(/example/)
    config.module
      .rule('js')
      .exclude.add(/example/)

    // 让 babel 转译 node_modules 中含 JSX 的包
    ;[
      path.join(__dirname, 'node_modules/@bang88/react-native-ultimate-listview'),
      path.join(__dirname, 'node_modules/react-native-collapsible'),
      path.join(__dirname, 'node_modules/react-native-modal-popover'),
      path.join(__dirname, 'node_modules/react-native-reanimated'),
      path.join(__dirname, 'node_modules/react-native-gesture-handler'),
    ].forEach((pkg) => {
      config.module.rule('js').include.add(pkg)
      config.module.rule('jsx').include.add(pkg)
    })

    // 排除 example 文件夹的 watch
    config.watchOptions = config.watchOptions || {}
    config.watchOptions.ignored = [
      ...(config.watchOptions.ignored || []),
      /example/,
    ]
  },
})
