import React from 'react'
import DocumentTitle from 'react-document-title'

export default function Home() {
  return (
    <DocumentTitle title={`Ant Design Mobile - 移动端设计规范`}>
      <div className="home-sections main-wrapper">
        <section className="home-s1">
          <div className="banner-wrapper">
            <div className="banner-text-wrapper">
              <h2>Ant Design Mobile RN</h2>
              <p>一个基于 React Native 的 UI 组件库</p>
              <div className="start-button">
                <a
                  href="/docs/react/introduce-cn"
                  className="ant-btn ant-btn-primary ant-btn-lg">
                  开始探索
                </a>
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=ant-design&repo=ant-design-mobile-rn&type=star&count=true&size=large"
                  frameBorder="0"
                  scrolling="0"
                  width="170"
                  height="30"
                  title="GitHub"></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="home-s2">
          <div className="wrapper">
            <h3>懂你所需</h3>
            <div className="s2-row">
              <div className="s2-col">
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/KUmyjoMxFFbjEdjiIWOw.png"
                  alt=""
                />
                <div className="des">
                  <div>
                    组件丰富 <span className="divider"></span> 功能全面
                  </div>
                  <p>
                    提供了 40+
                    基础组件、覆盖各类场景，组件特性丰富、满足各种功能需求。
                  </p>
                </div>
              </div>
              <div className="s2-col">
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/hfFgCpcxpGjeAlXFFgyT.png"
                  alt=""
                />
                <div className="des">
                  <div>
                    一步上手 <span className="divider"></span> 按需加载
                  </div>
                  <p>
                    上手足够简单，既可以一次加载所有代码、也可以只加载用到的某几个组件的代码、避免冗余。
                  </p>
                </div>
              </div>
            </div>
            <div className="s2-row">
              <div className="s2-col">
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/nlUNcWIVLKoarLnWNaWS.png"
                  alt=""
                />
                <div className="des">
                  <div>
                    体积小巧 <span className="divider"></span> 性能出众
                  </div>
                  <p>
                    在不损失功能的基础上，尽量保证了单个组件的体积最小、性能最优。
                  </p>
                </div>
              </div>
              <div className="s2-col">
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/JjNULDGGwgOZmsZAqvjH.png"
                  alt=""
                />
                <div className="des">
                  <div>
                    简易定制 <span className="divider"></span> 多种风格
                  </div>
                  <p>
                    支持灵活的样式定制，简易生成多种风格，满足个性化产品需求。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-s3">
          <div className="wrapper">
            <h3>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/EzhXjBHtavGDkTbewrvp.png"
                alt=""
              />
              Sketch UI Kit
            </h3>
            <p>
              我们为您提供丰富的 Sketch symbol
              化的组件资源库，你可以使用资源库快速设计应用程序。
            </p>
            <a
              href="http://p.tb.cn/rmsportal_3436_AntDesignMobile_20Template_20V1.0.sketch"
              className="ant-btn ant-btn-lg ant-btn-ghost">
              立即下载
            </a>
          </div>
        </section>

        <section className="home-s4">
          <div className="wrapper">
            <h3>谁在使用</h3>
            <div className="s4-row">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/BGcxWbIWmgBlIChNOpqp.png"
                alt=""
              />
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/qTKmDWNtAZMaYarVLIZT.png"
                alt=""
              />
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/ARwKOjaDethbuHOfMWOW.png"
                alt=""
              />
            </div>
            <div className="s4-row">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/HinWzLTHESDKjWqvqChF.png"
                alt=""
              />
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/MHkXUADpUDavOJfLrMpy.png"
                alt=""
              />
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/YEiMaxUWGRExNqYAwQhy.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </DocumentTitle>
  )
}
