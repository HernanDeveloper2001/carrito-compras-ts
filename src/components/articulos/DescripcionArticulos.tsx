import {  useLocation } from "react-router-dom"
import { Main,Subtitulo,Imagen,ContenedorPreciosStyle,PrecioArticuloStyle,DescuentoDescripcionStyle,DescripcionArticulo,BotonStyle,Iconos, BotonAtras } from "../../styles/Style"
import { useState } from 'react';
import { IoArrowBackOutline } from "react-icons/io5"
import React from "react"
import Busqueda from "../cabezera/busquedaArticulos/Busqueda";

export const DescripcionArticulos: React.FC = () => {

  const location = useLocation()
  const { windowWidth } = Busqueda();

  const {
    titulo, 
    descripcion, 
    precio, 
    imagen, 
    descuento,
  } = location.state

  const [verMasDescripcion, setVerMasDescripcion] = useState(false);

  // mobile
  const textLengthMobile = 300; 
  const mobileText = verMasDescripcion ? descripcion : `${descripcion.slice(0, textLengthMobile)}...`;

  // tablet
  const textLengthTablet = 600; 
  const tabletText = verMasDescripcion ? descripcion : `${descripcion.slice(0, textLengthTablet)}...`;

  // desktop
  const textLengthDesktop = 900; 
  const desktopText = verMasDescripcion ? descripcion : `${descripcion.slice(0, textLengthDesktop)}...`;

  function handleVerMasDescripcion(){
    setVerMasDescripcion(!verMasDescripcion)
  }
  
  const precio_con_descuento = precio - (precio * (descuento / 100));

  return (
    <>
      <BotonAtras to={`/`} >
        <Iconos>
            <IoArrowBackOutline/>
        </Iconos>
      </BotonAtras>
      <Main position="relative">
        <Subtitulo subtitulodescripcion={"true"}>
          { titulo }
        </Subtitulo>
          <Imagen 
          imagendescripcion={"true"}
          src={imagen} />
          <ContenedorPreciosStyle>
            <DescuentoDescripcionStyle>
              { `- ${descuento}%` }
            </DescuentoDescripcionStyle>
            <PrecioArticuloStyle>
              { `$ ${precio}` }
            </PrecioArticuloStyle>
            <PrecioArticuloStyle preciocondescuento={"true"}>
              {`$ ${precio_con_descuento}`}
            </PrecioArticuloStyle>
          </ContenedorPreciosStyle>

          { verMasDescripcion 
            ? <DescripcionArticulo >
                { `${descripcion}` }
              </DescripcionArticulo>
            : <DescripcionArticulo>
                { windowWidth > 480 
                  ? `${tabletText}` 
                  : windowWidth > 1024 
                  ? `${desktopText}` 
                  : `${mobileText}`}
              </DescripcionArticulo>
          }

          {
            verMasDescripcion
            ? <BotonStyle 
                botonvermasdescripcion={"true"}
                onClick={handleVerMasDescripcion}>Ver menos
              </BotonStyle>
            : <BotonStyle 
                botonvermasdescripcion={"true"}
                onClick={handleVerMasDescripcion}>Ver mas
              </BotonStyle>
          }
           
      </Main>
      <BotonAtras to={`/`} >
        <Iconos>
            <IoArrowBackOutline/>
        </Iconos>
      </BotonAtras>
    </>
  )
}


