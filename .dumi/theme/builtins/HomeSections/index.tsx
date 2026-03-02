import { useIntl } from 'dumi'
import React from 'react'
import './index.less'

export default function HomeSections() {
  const intl = useIntl()
  const t = (id: string) => intl.formatMessage({ id })

  return (
    <>
      <section className="home-s2">
        <div className="wrapper">
          <h3>{t('app.home.s2_title')}</h3>

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
                alt={t('app.home.s2_des1')}
              />
              <div className="des">
                <div>
                  {t('app.home.s2_des1')}
                </div>
                <p>{t('app.home.s2_des10')}</p>
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
                  {t('app.home.s2_des2')}
                </div>
                <p>{t('app.home.s2_des20')}</p>
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
                  {t('app.home.s2_des3')}
                </div>
                <p>{t('app.home.s2_des30')}</p>
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
                  {t('app.home.s2_des4')}
                </div>
                <p>{t('app.home.s2_des40')}</p>
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
            {t('app.home.s3_title')}
          </h3>
          <p>{t('app.home.s3_des')}</p>

          <a href="http://p.tb.cn/rmsportal_3436_AntDesignMobile_20Template_20V1.0.sketch">
            <button
              type="button"
              className="ant-btn ant-btn-lg ant-btn-background-ghost">
              <span>{t('app.home.s3_btn')}</span>
            </button>
          </a>
        </div>
      </section>

      <section className="home-s4">
        <div className="wrapper">
          <h3>{t('app.home.s4_title')}</h3>

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