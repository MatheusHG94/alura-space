import React from 'react'
import styles from './Footer.module.scss'
import { ReactComponent as Facebook } from './facebook.svg' /* importando svg como componentes. As vantagens de utilizar um svg como um componente é que você não precisa carregar o arquivo svg como um arquivo separado, melhorando a compilação */
import { ReactComponent as Twitter } from './twitter.svg'
import { ReactComponent as Instagram } from './instagram.svg'

export default function Rodape() {
  return (
    <footer className={styles.rodape} >
        <div className={styles.rodape__icones} >
            <a href="https://www.facebook.com/" target='_blank' rel='noreferrer' ><Facebook /></a>
            <a href="https://twitter.com/" target='_blank' rel='noreferrer' ><Twitter /></a>
            <a href="https://www.instagram.com/" target='_blank' rel='noreferrer' ><Instagram /></a>
        </div>
        <p>Desenvolvido por Alura.</p>
    </footer>
  )
}
