import '../styles/styles.css'
import Layout from '../components/layout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (

    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="16x16" type="image/svg" href="/favicon.svg" />
        <link rel="icon" sizes="32x32" type="image/svg" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <noscript>You need to enable JavaScript to run this app</noscript>
    </>
  )
}

export default MyApp;