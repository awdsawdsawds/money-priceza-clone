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
