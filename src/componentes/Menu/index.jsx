import React from 'react'
import ItemDoMenu from './ItemDoMenu'
import styles from './Menu.module.scss'
import icones from './icones.json'

export default function Menu() {
  return (
    <nav className={styles.menu} >
      <ul className={styles.menu__lista} >
        {icones.map(icone =>
          <ItemDoMenu
            key={icone.id}
            src={icone.path}
            alt={icone.alt}
            href={icone.href}
            ancora={icone.ancora}
          />
        )}
      </ul>
    </nav>
  )
}
