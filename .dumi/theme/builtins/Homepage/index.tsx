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
      <div className="luminous-circle" />
      <div className="luminous-circle-yellow" />
      <div className="luminous-circle-blue" />
      
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
          <h3 className="home-section-title" style={{ textAlign: 'center',marginBottom:0 }}>
            {t('app.home.theme_title')}
          </h3>
          <div className="section-desc" style={{ textAlign: 'center' }}>
            {t('app.home.theme_des')}
          </div>
        </div>

        <div className="home-previewer-content">
          <Previewer
            asset={{
              id: 'dumi-pages-index-cn-demo-code',
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value:
                    `const styles = {
  itemActiveStyle: {
    color: '#108ee9',
    fontWeight: 'bold',
  },
  maskMiddle: {
    backgroundColor: 'rgba(51,51,51,0.1)',
    borderRadius: 10,
  },
}
import { List, PickerView } from '@ant-design/react-native'
import React from 'react'

const basicColumns = [
  [
    { label: '2021年', value: '2021' },
    { label: '2022年', value: '2022' },
    { label: '2023年', value: '2023' },
    { label: '2024年', value: '2024' },
    { label: '2025年', value: '2025' },
  ],
  [
    { label: '1月', value: '1' },
    { label: '2月', value: '2' },
    { label: '3月', value: '3' },
    { label: '4月', value: '4' },
    { label: '5月', value: '5' },
  ],
  [
    { label: '1日', value: '1' },
    { label: '2日', value: '2' },
    { label: '3日', value: '3' },
    { label: '4日', value: '4' },
    { label: '5日', value: '5' },
  ],
]

export default class PickerViewExample extends React.Component {
  state = {
    value: ['2023', '3', '3'],
  }
  onChange = (value: any) => {
    this.setState({
      value,
    })
  }
  render() {
    return (
      <List renderHeader={'选择日期'}>
        <PickerView
          styles={styles}
          onChange={this.onChange}
          value={this.state.value}
          data={basicColumns}
          cascade={false}
        />
      </List>
    )
  }
}`,
                },
              },
            }}
            iframe
            demoUrl="~demos/dumi-pages-index-cn-demo-code?compact=&locale=zh-CN"
            disabledActions={['EXTERNAL']}
            defaultShowCode={false}
          />
        </div>
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
