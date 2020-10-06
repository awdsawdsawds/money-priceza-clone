import { promotions } from '../../data'
import PromotionCard from '../PromotionCard'
import styles from './PromotionSection.module.css'

export default function PromotionSection() {
  return (
    <div className="bg-white py-40px">
      <div className="container bg-white py-40px">
        <div className="row">
          <div className={`${styles['home-section-title']} col-sm-12`}>
            <h2>
              เช็คและเปรียบเทียบ ผลิตภัณฑ์การเงินต่างๆ
            </h2>
          </div>
        </div>
        <div className="row">
          {promotions.map((promotion) => (
            <div key={promotion.desc} className="col-sm-3">
              <PromotionCard promotion={promotion} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
