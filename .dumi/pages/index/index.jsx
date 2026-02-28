import React from 'react'
import DocumentTitle from 'react-document-title'

export default function Home() {
  return (
    <DocumentTitle title={`Ant Design Mobile - Mobile Design Specification`}>
      <div className="home-sections main-wrapper">
        <section className="home-s1">
          <div className="banner-wrapper">
            <div className="banner-text-wrapper">
              <h2>Ant Design Mobile RN</h2>
              <p>A UI component library based on React Native</p>
              <div className="start-button">
                <a
                  href="/en-US/react/introduce"
                  className="ant-btn ant-btn-primary ant-btn-lg">
                  Get Started
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
            <h3>Understand what you need</h3>
            <div className="s2-row">
              <div className="s2-col">
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/KUmyjoMxFFbjEdjiIWOw.png"
                  alt=""
                />
                <div className="des">
                  <div>
                    Rich Components <span className="divider"></span> Full
                    Featured
                  </div>
                  <p>
                    Provides 40+ basic components, covering all kinds of
                    scenarios.
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
                    One Step To Get Start <span className="divider"></span>{' '}
                    Loaded on demand
                  </div>
                  <p>
                    Simple enough to get started, load all the code or only the
                    components you use.
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
                    Small Size <span className="divider"></span> Outstanding
                    Performance
                  </div>
                  <p>
                    Ensures a single component of the smallest size, best
                    performance.
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
                    Easy To Customize <span className="divider"></span> Many
                    Styles
                  </div>
                  <p>
                    Support flexible style customization to meet personalized
                    product needs.
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
              We provide you with a rich resource of Sketch symbolized
              components to quickly design your application.
            </p>
            <a
              href="http://p.tb.cn/rmsportal_3436_AntDesignMobile_20Template_20V1.0.sketch"
              className="ant-btn ant-btn-lg ant-btn-ghost">
              Download
            </a>
          </div>
        </section>

        <section className="home-s4">
          <div className="wrapper">
            <h3>Who's using</h3>
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
