import React from 'react'
import GitHubButton from 'react-github-button'
import 'react-github-button/assets/style.css'
import './index.less'

export default function HomeHero() {
  return (
    <>
      <section className="home-s1" style={{ backgroundColor: '#ffffff' }}>
        <div className="banner-wrapper">
          <div className="banner-text-wrapper">
            <h2>Ant Design Mobile RN</h2>
            <p>面向 React Native 与 Web 多端同构解决方案</p>

            <div className="start-button">
              <a href="/docs/react/introduce-cn">
                <button
                  type="button"
                  className="ant-btn ant-btn-primary ant-btn-lg">
                  <span>开始探索</span>
                </button>
              </a>

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

      <section className="home-code-demo">
        <div className="wrapper">
          <h3>定制主题，随心所欲</h3>
          <p>开放样式算法与语义化结构，让你与 AI 一起轻松定制主题</p>
        </div>
      </section>
    </>
  )
}
