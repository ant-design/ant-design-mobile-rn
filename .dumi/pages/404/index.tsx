import { Link, useIntl } from 'dumi'
import React from 'react'

export default function NotFound() {
  const intl = useIntl()
  return (
    <div id="page-404">
      <section>
        <h1>404</h1>
        <p>
          {intl.formatMessage({ id: 'app.notfound.hint' })}{' '}
          <Link to="/">{intl.formatMessage({ id: 'app.notfound.backHome' })}</Link>
        </p>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: '#react-content { height: 100%; background-color: #fff }',
        }}
      />
    </div>
  )
}
