import { prominentPoints } from '../../data'
import ProminentPoints from '../ProminentPoints'
import styles from './ProminentSection.module.css'

export default function ProminentSection() {
  return (
    <div className={styles['home-prominent-points']}>
      <div className="container">
        <div className="row">
          {/* TODO: */}
          {prominentPoints.map((prominentPoint) => (
            <div key={prominentPoint.title} className="col-sm-4">
              <ProminentPoints
                icon={prominentPoint.icon}
                title={prominentPoint.title}
                desc={prominentPoint.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
