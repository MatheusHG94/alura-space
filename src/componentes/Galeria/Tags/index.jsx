import React from 'react'
import styles from './Tags.module.scss'

export default function Tags({ tags, filtrarImagens, setListaFotos, fotos }) {
  return (
    <div className={styles.tags} >
        <p>Busque por tags:</p>
        <ul className={styles.tags__lista} >
            {tags.map(tag => {
              return (
                <li key={tag} onClick={() => filtrarImagens(tag)} >
                  {tag}
                </li>
              )
            })}
            <li key='Todas' onClick={() => setListaFotos(fotos)} >
              Todas
            </li>
        </ul>
    </div>
  )
}
