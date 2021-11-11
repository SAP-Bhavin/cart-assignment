import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import wrapper from "../redux/store";
let MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
