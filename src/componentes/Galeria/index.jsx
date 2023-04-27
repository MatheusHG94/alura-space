import React from 'react'
import styles from './Galeria.module.scss'
import Tags from './Tags'
import fotos from './fotos.json'
import Card from './Card'

export default function Galeria() {
  return (
    <section className={styles.galeria} >
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={styles.galeria__cards} >
        {fotos.map(foto =>
          <Card
            key={foto.id}
            imagem={foto.imagem}
            titulo={foto.titulo}
            creditos={foto.creditos}
          />
        )}
      </ul>
    </section>
  )
}
