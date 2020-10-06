import styles from './AdSection.module.css'

export default function AdSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 py-40px pt-20px-xs">
          <a
            href="https://tiresbid.com/home?utm_source=pricezamoney-promotion&utm_medium=referral-coupon&utm_campaign=partner-exchange&utm_content=specialoffer-tiresbidxpricezamoney"
            rel="nofollow"
            target="_blank"
          >
            <img className={styles['home-banner-1']} src="/banner-big-1.jpg" alt="banner big" />
          </a>
        </div>
        <div className="col-md-4" />
      </div>
    </div>
  )
}
