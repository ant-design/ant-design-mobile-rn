import { Button, Col, Row } from 'antd'
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
    <div className="home-page-wrapper">
      {/* 1. Banner */}
      <section className="home-s1">
        <div className="banner-wrapper">
          <div className="banner-text-wrapper">
            <h2 className="banner-title">Ant Design Mobile RN</h2>
            <p className="banner-desc">{t('app.home.epitomize')}</p>
            <div className="start-button">
              <Link to={`/docs/react/introduce${isZhCN ? '-cn' : ''}`} prefetch>
                <Button type="primary" size="large" className="btn-start">
                  {t('app.home.centerStart')}
                </Button>
              </Link>
              <span className="github-btn">
                <GitHubButton
                  key="github-button"
                  type="stargazers"
                  namespace="ant-design"
                  repo="ant-design-mobile-rn"
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 保留的 Demo Previewer */}
      <section className="home-previewer">
        <div className="home-previewer-header">
          <h3 className="home-section-title" style={{ textAlign: 'center' }}>
            {t('app.home.theme_title')}
          </h3>
          <p className="section-desc" style={{ textAlign: 'center' }}>
            {t('app.home.theme_des')}
          </p>
        </div>

        <Row justify="center" className="home-previewer-content">
          <Col xs={24} sm={24} md={22} lg={20}>
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
              defaultShowCode={false}
            />
          </Col>
        </Row>
      </section>

      {/* 2. Features */}
      <section className="home-s2">
        <div className="wrapper">
          <h3 className="home-section-title">{t('app.home.s2_title')}</h3>
          <Row gutter={[72, 80]} className="feature-row">
            <Col xs={24} md={12} className="feature-col">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KUmyjoMxFFbjEdjiIWOw.png"
                alt={t('app.home.s2_des1')}
              />
              <div className="des">
                <div className="des-title">
                  {t('app.home.s2_des1')} <span className="divider"></span>{' '}
                  {t('app.home.s2_des10').split('，')[0]}
                </div>
                <p className="des-desc">{t('app.home.s2_des10')}</p>
              </div>
            </Col>
            <Col xs={24} md={12} className="feature-col">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/hfFgCpcxpGjeAlXFFgyT.png"
                alt={t('app.home.s2_des2')}
              />
              <div className="des">
                <div className="des-title">
                  {t('app.home.s2_des2')} <span className="divider"></span>{' '}
                  {t('app.home.s2_des20').split('，')[0]}
                </div>
                <p className="des-desc">{t('app.home.s2_des20')}</p>
              </div>
            </Col>
            <Col xs={24} md={12} className="feature-col">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/nlUNcWIVLKoarLnWNaWS.png"
                alt={t('app.home.s2_des3')}
              />
              <div className="des">
                <div className="des-title">
                  {t('app.home.s2_des3')} <span className="divider"></span>{' '}
                  {t('app.home.s2_des30').split('，')[0]}
                </div>
                <p className="des-desc">{t('app.home.s2_des30')}</p>
              </div>
            </Col>
            <Col xs={24} md={12} className="feature-col">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JjNULDGGwgOZmsZAqvjH.png"
                alt={t('app.home.s2_des4')}
              />
              <div className="des">
                <div className="des-title">
                  {t('app.home.s2_des4')} <span className="divider"></span>{' '}
                  {t('app.home.s2_des40').split('，')[0]}
                </div>
                <p className="des-desc">{t('app.home.s2_des40')}</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* 3. Sketch UI Kit */}
      <section className="home-s3">
        <div className="wrapper">
          <h3 className="home-section-title">
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/EzhXjBHtavGDkTbewrvp.png"
              alt=""
            />
            {t('app.home.s3_title')}
          </h3>
          <p className="section-desc">{t('app.home.s3_des')}</p>
          <a href="http://p.tb.cn/rmsportal_3436_AntDesignMobile_20Template_20V1.0.sketch">
            <Button size="large" ghost className="btn-sketch">
              {t('app.home.s3_btn')}
            </Button>
          </a>
        </div>
      </section>

      {/* 4. Who is Using */}
      <section className="home-s4">
        <div className="wrapper">
          <h3 className="home-section-title">{t('app.home.s4_title')}</h3>
          <Row gutter={[0, 48]} justify="center" className="users-row">
            {[
              'BGcxWbIWmgBlIChNOpqp.png',
              'qTKmDWNtAZMaYarVLIZT.png',
              'ARwKOjaDethbuHOfMWOW.png',
              'HinWzLTHESDKjWqvqChF.png',
              'MHkXUADpUDavOJfLrMpy.png',
              'YEiMaxUWGRExNqYAwQhy.png',
            ].map((imgUrl, i) => (
              <Col
                span={8}
                xs={24}
                sm={12}
                md={8}
                lg={8}
                className="user-col"
                key={i}>
                <img
                  src={`https://gw.alipayobjects.com/zos/rmsportal/${imgUrl}`}
                  alt=""
                />
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  )
}
