// https://vike.dev/onRenderHtml
export { onRenderHtml }

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { Layout } from './Layout'
import { Helmet } from 'react-helmet'

function onRenderHtml(pageContext) {
  const { Page, pageProps } = pageContext
  const pageHtml = ReactDOMServer.renderToString(
    <Layout pageContext={pageContext}>
      <Helmet>
        <title>My Awesome App</title>
      </Helmet>
      <Page {...pageProps} />
    </Layout>
  )

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}
