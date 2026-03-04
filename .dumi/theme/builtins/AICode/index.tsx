import { useIntl } from 'dumi'
import React from 'react'
import Previewer from './Previewer'
import './index.less'

export default function AICode() {
  const intl = useIntl()
  const t = (id: string) => intl.formatMessage({ id })

  return (
    <section className="home-code-demo">
      <div className="wrapper">
        <h3>{t('app.home.theme_title')}</h3>
        <p>{t('app.home.theme_des')}</p>
      </div>

      <Previewer
        asset={{
          id: 'dumi-pages-index-cn-demo-code',
          dependencies: {
            'index.tsx': {
              type: 'FILE',
              value:
                "/**\n * debug: true\n */\n\nimport React from 'react';\n\nexport default () => '我仅在开发环境下展示';",
            },
          },
        }}
        iframe
        demoUrl="~demos/dumi-pages-index-cn-demo-code?compact=&locale=zh-CN"
        disabledActions={['EXTERNAL']}
        defaultShowCode={false}></Previewer>
    </section>
  )
}
