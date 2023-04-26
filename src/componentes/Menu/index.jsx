import React from 'react'
import ItemDoMenu from '../ItemDoMenu'
import styles from './Menu.module.scss'
import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreendame from '../../assets/icones/surpreenda-me-inativo.png'

export default function Menu() {
  return (
    <nav className={styles.menu} >
        <ul className={styles.menu__lista} >
            <ItemDoMenu src={home} alt='ícone de casa' href='/' ancora='Início' />
            <ItemDoMenu src={maisCurtidas} alt='ícone de gesto de mão positivo' href='/' ancora='Mais vistas' />
            <ItemDoMenu src={maisVistas} alt='ícone de olho aberto' href='/' ancora='Mais curtidas' />
            <ItemDoMenu src={novas} alt='ícone de estrela brilhando' href='/' ancora='Novas' />
            <ItemDoMenu src={surpreendame} alt='ícone de lâmpada' href='/' ancora='Surpreenda-me' />
        </ul>
    </nav>
  )
}
