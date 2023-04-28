import React from 'react'
import styles from './Populares.module.scss'
import fotosPopulares from './fotos-populares.json'
import Button from 'componentes/Button'

export default function Populares() {
  return (
    <aside className={styles.populares} >
        <h2>Populares</h2>
        <ul className={styles.populares__imagens} >
            {fotosPopulares.map(foto => {
                return (
                    <li key={foto.id} >
                        <img src={foto.path} alt={foto.alt} />
                    </li>
                )
            })}
        </ul>
        <Button>Ver mais fotos</Button> {/* chamando componente e passando children como props */}
    </aside>
  )
}
