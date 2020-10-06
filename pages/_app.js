import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import '../styles/global.css'

// import { config } from '@fortawesome/fontawesome-svg-core'

// config.autoAddCss = false
// import '../styles/pzm-clone.min.css'

export default function MoneyPricezaApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MoneyPricezaApp.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.string,
  ]).isRequired,
  pageProps: PropTypes.object.isRequired,
}
