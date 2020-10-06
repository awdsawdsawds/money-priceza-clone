import { destinations } from '../../data'
import DestinationCard from '../DestinationCard'
import styles from './DestinationSection.module.css'

export default function DestinationSection() {
  return (
    <div className="container py-40px">
      <div className="row">
        <div className="col-md-12">
          <div className={styles['home-section-title']}>
            <h2>
              เช็คและเปรียบเทียบ ผลิตภัณฑ์การเงินต่างๆ
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        {destinations.map((destination) => (
          <div key={destination.firstTitle} className="col-sm-3">
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>
    </div>
  )
}
