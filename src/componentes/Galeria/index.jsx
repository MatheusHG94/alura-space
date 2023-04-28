import React, { useState } from 'react'
import styles from './Galeria.module.scss'
import Tags from './Tags'
import fotos from './fotos.json'
import Card from './Card'

export default function Galeria() {

  const [listaFotos, setListaFotos] = useState(fotos);
  const tags = [...new Set(fotos.map(foto => foto.tag))]

  const filtrarImagens = filtro => {
    const fotosFiltradas = fotos.filter(foto => foto.tag === filtro)

    setListaFotos(fotosFiltradas);
  }

  return (
    <section className={styles.galeria} >
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarImagens={filtrarImagens} setListaFotos={setListaFotos} fotos={fotos} />
      <ul className={styles.galeria__cards} >
        {listaFotos.map(foto =>
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
