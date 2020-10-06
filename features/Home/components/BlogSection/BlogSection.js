import { blogs } from '../../data'
import BlogCard from '../BlogCard'
import styles from './BlogSection.module.css'

export default function BlogSection() {
  return (
    <div className="bg-white py-40px">
      <div className="container">
        <div className="row">
          <div className={`${styles['home-section-title']} col-sm-12`}>
            <h2>
              บทความ
            </h2>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.title} className="col-sm-3">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
