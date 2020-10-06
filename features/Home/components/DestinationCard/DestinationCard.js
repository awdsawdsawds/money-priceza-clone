import { useState } from 'react'

import styles from './DestinationCard.module.css'

export default function DestinationCard({ destination }) {
  const DEFAULT_IMG_SCALE = 'scale(1)'
  const ZOOM_OUT_IMG_SCALE = 'scale(1.5)'
  const [imgScale, setImgScale] = useState(DEFAULT_IMG_SCALE)

  return (
    <div className="position-relative overflow-hidden">
      <span
        onMouseOver={() => { setImgScale(ZOOM_OUT_IMG_SCALE) }}
        onMouseOut={() => { setImgScale(DEFAULT_IMG_SCALE) }}
        onFocus={() => { setImgScale(ZOOM_OUT_IMG_SCALE) }}
        onBlur={() => { setImgScale(DEFAULT_IMG_SCALE) }}
        className={styles['destination-card']}
      >
        <img
          className={styles['destination-image']}
          style={{ transform: imgScale }}
          src={destination.imagePath}
          alt={destination.title}
        />
        <div className={styles['destination-header']}>
          <span>
            {destination.firstTitle}
          </span>
        </div>
        <div className={styles['destination-body']}>
          <span>
            {destination.secondTitle}
          </span>
          <br />
          <span>
            {destination.desc}
          </span>
        </div>
      </span>
    </div>
  )
}
