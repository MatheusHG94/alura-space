import React from 'react'
import styles from './Card.module.scss'
import favorito from './favorito.png'
import open from './open.png'

export default function Card({ imagem, titulo, creditos }) {
    return (
        <li className={styles.card} >
            <img
                className={styles.card__imagem}
                src={imagem}
                alt={titulo}
            />
            <p className={styles.card__descricao} >{titulo}</p>
            <div>
                <p>{creditos}</p>
                <span>
                    <img src={favorito} alt="ícone coração de curtir" />
                    <img src={open} alt="ícone de abrir modal" />
                </span>
            </div>
        </li>
    )
}
