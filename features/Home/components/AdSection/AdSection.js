import Slider from 'react-slick'

import styles from './AdSection.module.css'

export default function AdSection() {
  const adSmalls = [
    '/banner-small-1.jpg',
    '/banner-small-2.jpg',
    '/banner-small-3.jpg',
  ]

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 py-40px pt-20px-xs">
          <a
            href="https://tiresbid.com/home?utm_source=pricezamoney-promotion&utm_medium=referral-coupon&utm_campaign=partner-exchange&utm_content=specialoffer-tiresbidxpricezamoney"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={styles['home-banner-1']} src="/banner-big-1.jpg" alt="banner big" />
          </a>
        </div>
        <div className="col-md-4 py-40px pt-20px-xs">
          <Slider
            dots
            infinite
            autoplay
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplaySpeed={2000}
          >
            {adSmalls.map((ad) => <img key={ad} src={ad} alt="ad" />)}
          </Slider>
        </div>
      </div>
    </div>
  )
}
