import React from 'react'
import styles from './Footer.module.scss'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'

export default function Rodape() {
  return (
    <footer className={styles.rodape} >
        <div className={styles.rodape__icones} >
            <a href="https://www.facebook.com/" target='_blank' rel='noreferrer' ><img src={facebook} alt='logo do Facebook' /></a>
            <a href="https://twitter.com/" target='_blank' rel='noreferrer' ><img src={twitter} alt='logo do Twitter' /></a>
            <a href="https://www.instagram.com/" target='_blank' rel='noreferrer' ><img src={instagram} alt='logo do Instagram' /></a>
        </div>
        <p>Desenvolvido por Alura.</p>
    </footer>
  )
}
