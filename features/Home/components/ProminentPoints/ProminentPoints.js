import PropTypes from 'prop-types'
import Icon from '@mdi/react'

export default function ProminentPoints({ icon, title, desc }) {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Icon
          path={icon}
        />
      </div>
      <div className="col-sm-8">
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  )
}

ProminentPoints.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}
