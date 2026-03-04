import { Link, useIntl } from 'dumi'
import React from 'react'
import GitHubButton from 'react-github-button'
import 'react-github-button/assets/style.css'
import './index.less'

export default function HomeHero() {
  const intl = useIntl()
  const t = (id: string) => intl.formatMessage({ id })

  const locale = intl.locale
  const isZhCN = locale === 'zh-CN'

  return (
    <section className="home-s1" style={{ backgroundColor: '#ffffff' }}>
      <div className="banner-wrapper">
        <div className="banner-text-wrapper">
          <h2>Ant Design Mobile RN</h2>
          <p>{t('app.home.epitomize')}</p>

          <div className="start-button">
            <Link to={`/docs/react/introduce${isZhCN ? '-cn' : ''}`} prefetch>
              <button
                type="button"
                className="ant-btn ant-btn-primary ant-btn-lg">
                <span>{t('app.home.centerStart')}</span>
              </button>
            </Link>

            <GitHubButton
              key="github-button"
              type="stargazers"
              namespace="ant-design"
              repo="ant-design-mobile-rn"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
