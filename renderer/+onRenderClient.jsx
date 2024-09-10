// https://vike.dev/onRenderClient
export { onRenderClient }

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './Layout'
import { Helmet } from 'react-helmet'

let root
async function onRenderClient(pageContext) {
  const { Page, pageProps } = pageContext
  const page = (
    <Layout pageContext={pageContext}>
      <Helmet>
        <title>My Awesome App</title>
      </Helmet>
      <Page {...pageProps} />
    </Layout>
  )
  const container = document.getElementById('page-view')
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page)
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  }
}
