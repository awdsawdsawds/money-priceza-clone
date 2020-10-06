import PropTypes from 'prop-types'

import styles from './BlogCard.module.css'

export default function BlogCard({ blog }) {
  return (
    <div className="card">
      <img
        src={blog.imgPath}
        alt={blog.title}
        className={`${styles['blog-img-top']} card-img-top`}
      />
      <div className={`${styles['blog-body']} card-body`}>
        <h5 className="card-title">
          {blog.title}
        </h5>
        <p className="card-text">
          {blog.desc}
        </p>
      </div>
      <div className="container-fluid">
        <div className={`${styles['blog-footer']} row`}>
          <span className="col-sm-6 d-flex">
            <img src={blog.creator.avatar} alt="creator" />
            <p>{blog.creator.name}</p>
          </span>
          <span className="col-sm-6">
            {blog.createdAtDisplay}
          </span>
        </div>
      </div>
    </div>
  )
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    creator: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
    createdAtDisplay: PropTypes.string.isRequired,

  }).isRequired,
}
