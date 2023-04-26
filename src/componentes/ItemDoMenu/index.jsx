import React from 'react'
import styles from './ItemDoMenu.module.scss'

export default function ItemDoMenu({ src, alt, href, ancora }) {
  return (
    <li className={styles.menu__item} >
      <img src={src} alt={alt} />
      <a href={href} >{ancora}</a>
    </li>
  )
}
