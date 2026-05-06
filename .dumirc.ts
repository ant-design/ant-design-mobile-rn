import { defineConfig } from 'dumi'
import path from 'node:path'

export default defineConfig({
  plugins: ['dumi-plugin-color-chunk'],
  favicons: [
    'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  ],
  define: {
    __DEV__: process.env.NODE_ENV !== 'production',
  },
  conventionRoutes: {
    // to avoid generate routes for .dumi/pages/index/components/xx
    exclude: [/index\/codes\//, /index-cn\/codes\//],
  },
  themeConfig: {
    docVersions: {
      '3.x': 'https://3x.rn.mobile.ant.design',
    },
    deviceWidth: 390, // iphone 12
  },
  runtimePublicPath: {},
  outputPath: '_site',
  resolve: {
    docDirs: [{ type: 'doc', dir: 'docs' }],
    atomDirs: [{ type: 'component', dir: 'components' }],
    codeBlockMode: 'passive',
  },
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '-cn' },
  ],
  analytics: {
    ga_v2: 'UA-72788897-9',
  },
  headScripts: [
    `
    (function () {
      var pathname = location.pathname || '/';
      var isCN = /-cn\\/?$/.test(pathname);
      if (pathname === '/' || pathname === '/index-cn') {
        var lang;
        try {
          var antLocale = localStorage.getItem('ANT_LOCAL_TYPE_KEY');
          lang = antLocale ? JSON.parse(antLocale) : localStorage.getItem('locale');
        } catch (e) {
          lang = localStorage.getItem('ANT_LOCAL_TYPE_KEY') || localStorage.getItem('locale');
        }
        lang = lang || (navigator.language && navigator.language.toLowerCase() === 'zh-cn' ? 'zh-CN' : 'en-US');
        if ((lang === 'zh-CN') !== isCN) {
          location.pathname = lang === 'zh-CN' ? '/index-cn' : '/';
        }
      }
      document.documentElement.className += isCN ? ' zh-cn' : ' en-us';
    })();
    `,
  ],
  alias: {
    '@ant-design/react-native/lib': path.join(__dirname, 'components'),
    '@ant-design/react-native': __dirname,
    'react-native': 'react-native-web',
  },
  mfsu: false,
  // 让 Babel 转译 node_modules 中含 JSX 的包
  extraBabelIncludes: [
    path.join(__dirname, 'node_modules/@bang88/react-native-ultimate-listview'),
    path.join(__dirname, 'node_modules/react-native-collapsible'),
    path.join(__dirname, 'node_modules/react-native-modal-popover'),
    path.join(__dirname, 'node_modules/react-native-reanimated'),
  ],
  // TODO-luokun: ⚠️react-native-reanimated不支持web
  chainWebpack(config: any) {
    // ==================== 确保 @ant-design/react-native 正确解析 ====================
    // 在 webpack 的 resolve.alias 中显式设置 @ant-design/react-native 指向 components/index.tsx
    config.resolve.alias.set(
      '@ant-design/react-native',
      path.join(__dirname, 'components/index.tsx'),
    )
    config.resolve.alias.set(
      '@ant-design/react-native/lib',
      path.join(__dirname, 'components'),
    )

    // 优先使用 web 扩展名
    config.resolve.extensions.store = new Set([
      '.web.jsx',
      '.web.tsx',
      '.web.js',
      '.web.ts',
      ...config.resolve.extensions.store,
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

    // 让 babel 转译 node_modules 中含 JSX 的包
    ;[
      path.join(
        __dirname,
        'node_modules/@bang88/react-native-ultimate-listview',
      ),
      path.join(__dirname, 'node_modules/react-native-collapsible'),
      path.join(__dirname, 'node_modules/react-native-modal-popover'),
      path.join(__dirname, 'node_modules/react-native-reanimated'),
      path.join(__dirname, 'node_modules/react-native-gesture-handler'),
    ].forEach((pkg) => {
      config.module.rule('js').include.add(pkg)
      config.module.rule('jsx').include.add(pkg)
    })
  },
})
