import { Imagen } from "../../styles/Style"
import imagenDeCarga from "../../assets/imagenes/pantalla_de_carga/pantalla_de_carga.jpeg"
import React from "react"


const PantallaCarga: React.FC = () => {
  return (
    <>
      <Imagen imagenDeCarga src={imagenDeCarga}></Imagen>
    </>
  )
}

export default PantallaCarga
