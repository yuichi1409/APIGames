import {React, useEffect, useState} from 'react'
import todosJuegos from '../functions/funciones'

const Inicio = () => {

  const [juegos, setJuegos] = useState(null)

  useEffect(()=>{
    todosJuegos(setJuegos)
  },[])
  return (
    <>
      {juegos != null ? (
        juegos.map(juego => (
          <div key={juego.id}>
            <a href=''>{juego.title}</a>
          </div>
        ))
        ) : ('No hay juegos')}
    </>
  )
}

export default Inicio