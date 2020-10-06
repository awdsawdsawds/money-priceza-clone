import PropTypes from 'prop-types'

import styles from './PromotionCard.module.css'

export default function PromotionCard({ promotion }) {
  return (
    <div className="card">
      <img
        src={promotion.imgPath}
        alt={promotion.desc}
        className={`${styles['promo-img-top']} card-img-top`}
      />
      <div className={`${styles['promo-body']} card-body`}>
        <p className="card-text">
          {promotion.desc}
        </p>
      </div>
      <div className="container-fluid">
        <div className={`${styles['promo-footer']} row`}>
          <span className="col-sm-6">
            {
              (promotion.creator.type === 'text')
                ? <span>{promotion.creator.data}</span>
                : <img src={promotion.creator.data} alt="creator" />
            }
          </span>
          <span className="col-sm-6">
            {promotion.createDateForDisplay}
          </span>
        </div>
      </div>
    </div>
  )
}

PromotionCard.propTypes = {
  promotion: PropTypes.shape({
    imgPath: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    creator: PropTypes.shape({
      type: PropTypes.oneOf(['image', 'text']).isRequired,
      data: PropTypes.string.isRequired,
    }).isRequired,
    createDateForDisplay: PropTypes.string.isRequired,
  }).isRequired,
}