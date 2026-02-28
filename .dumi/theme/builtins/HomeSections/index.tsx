import React from 'react'
import './index.less'

export default function HomeSections() {
  return (
    <>
      <section className="home-s2">
        <div className="wrapper">
          <h3>懂你所需</h3>

          <div
            className="ant-row"
            style={{
              marginLeft: -36,
              marginRight: -36,
              marginBottom: 80,
            }}>
            <div
              className="ant-col-12"
              style={{ paddingLeft: 36, paddingRight: 36 }}>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KUmyjoMxFFbjEdjiIWOw.png"
                alt=""
              />
              <div className="des">
                <div>
                  组件丰富 <span className="divider" /> 功能全面
                </div>
                <p>
                  提供了 40+
                  基础组件、覆盖各类场景，组件特性丰富、满足各种功能需求。
                </p>
              </div>
            </div>

            <div
              className="ant-col-12"
              style={{ paddingLeft: 36, paddingRight: 36 }}>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/hfFgCpcxpGjeAlXFFgyT.png"
                alt=""
              />
              <div className="des">
                <div>
                  一步上手 <span className="divider" /> 按需加载
                </div>
                <p>
                  上手足够简单，既可以一次加载所有代码、也可以只加载用到的组件代码，避免冗余。
                </p>
              </div>
            </div>
          </div>

          <div
            className="ant-row"
            style={{ marginLeft: -24, marginRight: -24 }}>
            <div
              className="ant-col-12"
              style={{ paddingLeft: 24, paddingRight: 24 }}>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/nlUNcWIVLKoarLnWNaWS.png"
                alt=""
              />
              <div className="des">
                <div>
                  体积小巧 <span className="divider" /> 性能出众
                </div>
                <p>
                  在不损失功能的基础上，尽量保证单个组件体积最小、性能最优。
                </p>
              </div>
            </div>

            <div
              className="ant-col-12"
              style={{ paddingLeft: 24, paddingRight: 24 }}>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JjNULDGGwgOZmsZAqvjH.png"
                alt=""
              />
              <div className="des">
                <div>
                  简易定制 <span className="divider" /> 多种风格
                </div>
                <p>支持灵活样式定制，简易生成多种风格，满足个性化需求。</p>
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
          <p>我们提供丰富的 Sketch Symbol 组件资源库，帮助快速设计应用。</p>

          <a href="http://p.tb.cn/rmsportal_3436_AntDesignMobile_20Template_20V1.0.sketch">
            <button
              type="button"
              className="ant-btn ant-btn-lg ant-btn-background-ghost">
              <span>立即下载</span>
            </button>
          </a>
        </div>
      </section>

      <section className="home-s4">
        <div className="wrapper">
          <h3>谁在使用</h3>

          <div className="ant-row" style={{ marginBottom: 48 }}>
            <div className="ant-col-8">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/BGcxWbIWmgBlIChNOpqp.png"
                alt=""
              />
            </div>
            <div className="ant-col-8">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/qTKmDWNtAZMaYarVLIZT.png"
                alt=""
              />
            </div>
            <div className="ant-col-8">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/ARwKOjaDethbuHOfMWOW.png"
                alt=""
              />
            </div>
          </div>

          <div className="ant-row">
            <div className="ant-col-8">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/HinWzLTHESDKjWqvqChF.png"
                alt=""
              />
            </div>
            <div className="ant-col-8">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/MHkXUADpUDavOJfLrMpy.png"
                alt=""
              />
            </div>
            <div className="ant-col-8">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/YEiMaxUWGRExNqYAwQhy.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
