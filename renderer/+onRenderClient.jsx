// https://vike.dev/onRenderClient
export { onRenderClient }

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './Layout'
import pkg from 'react-helmet-async';
const { Helmet, HelmetProvider } = pkg.default ?? pkg;

let root
async function onRenderClient(pageContext) {
  const { Page, pageProps } = pageContext
  const page = (
    <Layout pageContext={pageContext}>
      <HelmetProvider>
        <Helmet>
          <title>My Awesome App</title>
        </Helmet>
        <Page {...pageProps} />
      </HelmetProvider>
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
