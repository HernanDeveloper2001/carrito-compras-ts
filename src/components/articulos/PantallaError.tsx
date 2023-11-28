import imagenDeError from "../../assets/imagenes/pantalla_de_carga/pantalla_de_error.jpg";
import { Main,Imagen } from "../../styles/Style";
import React from "react"



export const PantallaError: React.FC = () => {
  return (
    <>
      <Main>
        <Imagen
          imagenderutanoencontrada={"true"}
          src={imagenDeError} 
          alt="imagenDeError" />
      </Main>
    </>
  )
}

