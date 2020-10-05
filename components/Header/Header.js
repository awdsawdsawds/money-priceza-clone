import Link from 'next/link'

import { firstMenus, secondLeftMenus } from './data/menus'
import NavMenu from './NavMenu'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
      <nav className="fixed-top">
        <div className={styles.navbar2}>
          <div className="container px-0">
            <div className="row">
              <ul className={`${styles['navbar-list-menu']} col-md-8 align-items-center`}>
                {secondLeftMenus.map((menu) => (
                  <li key={menu.name}>
                    <NavMenu menu={menu} />
                  </li>
                ))}
              </ul>
              <span className="col-md-1" />
              <span className="col-md-3">
                ลงทะเบียน / เข้าสู่ระบบ
              </span>
            </div>
          </div>
        </div>
        <div className={styles.navbar1}>
          <div className="container px-0">
            <div className="row">
              <div className={`${styles['navbar1-logo']} col-sm-3`}>
                <img src="/logo.svg" alt="logo" />
              </div>
              <ul className={`${styles['navbar-list-menu']} col-sm-8 offset-md-1 align-items-center`}>
                {firstMenus.map((menu) => (
                  <li key={menu.name}>
                    <NavMenu menu={menu} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
