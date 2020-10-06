import PropTypes from 'prop-types'
import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function DefaultLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Header />
      { children}
      <Footer />
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
}
