import { Button } from 'antd'
import { Link, useIntl } from 'dumi'
import React from 'react'
import GitHubButton from 'react-github-button'
import 'react-github-button/assets/style.css'
import Previewer from './components/Previewer'
import './index.less'

export default function HomePage() {
  const intl = useIntl()
  const t = (id: string) => intl.formatMessage({ id })

  const locale = intl.locale
  const isZhCN = locale === 'zh-CN'

  return (
    <div>
      {/* banner区域 */}
      <section className="banner">
        <div>
          <h2>Ant Design Mobile RN</h2>
          <p>{t('app.home.epitomize')}</p>

          <div>
            <Link to={`/docs/react/introduce${isZhCN ? '-cn' : ''}`} prefetch>
              <Button type="primary" size="large">
                {t('app.home.centerStart')}
              </Button>
            </Link>
            <GitHubButton
              key="github-button"
              type="stargazers"
              namespace="ant-design"
              repo="ant-design-mobile-rn"
            />
          </div>
        </div>
      </section>
      <section className="code-demo-previewer">
        <div>
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
      <section className="features">
        <div>
          <h3>{t('app.home.s2_title')}</h3>

          <div>
            <div>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KUmyjoMxFFbjEdjiIWOw.png"
                alt={t('app.home.s2_des1')}
              />
              <div>
                <div>{t('app.home.s2_des1')}</div>
                <p>{t('app.home.s2_des10')}</p>
              </div>
            </div>
            <div>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/hfFgCpcxpGjeAlXFFgyT.png"
                alt=""
              />
              <div>
                <div>{t('app.home.s2_des2')}</div>
                <p>{t('app.home.s2_des20')}</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/nlUNcWIVLKoarLnWNaWS.png"
                alt=""
              />
              <div>
                <div>{t('app.home.s2_des3')}</div>
                <p>{t('app.home.s2_des30')}</p>
              </div>
            </div>
            <div>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JjNULDGGwgOZmsZAqvjH.png"
                alt=""
              />
              <div>
                <div>{t('app.home.s2_des4')}</div>
                <p>{t('app.home.s2_des40')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sketch-ui-kit">
        <div>
          <h3>
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/EzhXjBHtavGDkTbewrvp.png"
              alt=""
            />
            {t('app.home.s3_title')}
          </h3>
          <p>{t('app.home.s3_des')}</p>

          <a href="http://p.tb.cn/rmsportal_3436_AntDesignMobile_20Template_20V1.0.sketch">
            <button type="button">
              <span>{t('app.home.s3_btn')}</span>
            </button>
          </a>
        </div>
      </section>

      <section className="who-is-using">
        <div>
          <h3>{t('app.home.s4_title')}</h3>

          <div>
            <div>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/BGcxWbIWmgBlIChNOpqp.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/qTKmDWNtAZMaYarVLIZT.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/ARwKOjaDethbuHOfMWOW.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <div>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/HinWzLTHESDKjWqvqChF.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/MHkXUADpUDavOJfLrMpy.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/YEiMaxUWGRExNqYAwQhy.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
