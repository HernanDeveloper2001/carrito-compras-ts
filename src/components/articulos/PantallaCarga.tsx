import { Imagen } from "../../styles/Style"
import imagenDeCarga from "../../assets/imagenes/pantalla_de_carga/pantalla_de_carga.jpeg"
import React from "react"


const PantallaCarga: React.FC = () => {
  return (
    <>
      <Imagen imagendecarga={"true"} src={imagenDeCarga} alt="cargando imagen"></Imagen>
    </>
  )
}

export default PantallaCarga
