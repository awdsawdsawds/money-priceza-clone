import Link from 'next/link'
import Icon from '@mdi/react'

import styles from './NavMenu.module.css'

export default function NavMenu({ menu }) {
  return (
    <Link href={menu.link}>
      <>
        <a className={`${styles['navbar-menu']} py-2 px-1`}>
          <Icon
            size={1}
            path={menu.icon}
          />
          &nbsp;
          {menu.name}
        </a>
      </>
    </Link>
  )
}
