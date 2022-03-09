import '../styles/styles.css'
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>

            <noscript>You need to enable JavaScript to run this app</noscript>
        </>
    )
}

export default MyApp;