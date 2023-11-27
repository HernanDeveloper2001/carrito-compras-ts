import {  useLocation } from "react-router-dom"
import CarritoAñadir from "../../carritoCompras/CarritoAñadir";
import { Main,Subtitulo,Imagen,ContenedorPreciosStyle,PrecioArticuloStyle,DescuentoDescripcionStyle,DescripcionArticulo,BotonStyle,Iconos, BotonAtras, ContenedorBotonesStyle,BotonesDescripcion } from "../../styles/Style"
import { useState } from 'react';
import { FaCartPlus,FaShoppingBag  } from "react-icons/fa"
import { IoArrowBackOutline } from "react-icons/io5"
import React from "react"
import Busqueda from "../cabezera/busquedaArticulos/Busqueda";

export const DescripcionArticulos: React.FC = () => {

  const location = useLocation()
  const { windowWidth } = Busqueda();

  const {
    titulo, 
    id, 
    descripcion, 
    precio, 
    imagen, 
    descuento,
    cantidad,
  } = location.state

  const cantidadState = cantidad;
  const idState = id;
  const descricionState = descripcion;
  const tituloState = titulo;
  const precioState = precio;
  const imagenState = imagen;
  const descuentoState = descuento;


  const {
    anadirCarritoStore
  } = CarritoAñadir()
    
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
      <BotonAtras  to={-1} >
        <Iconos>
            <IoArrowBackOutline/>
        </Iconos>
      </BotonAtras>
      <Main position="relative">
        <Subtitulo subtituloDescripcion>
          { titulo }
        </Subtitulo>
          <Imagen 
          imagenDescripcion 
          src={imagen} />
          <ContenedorPreciosStyle>
            <DescuentoDescripcionStyle>
              { `- ${descuento}%` }
            </DescuentoDescripcionStyle>
            <PrecioArticuloStyle>
              { `$ ${precio}` }
            </PrecioArticuloStyle>
            <PrecioArticuloStyle precioConDescuento>
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
                botonVerMasDescripcion
                onClick={handleVerMasDescripcion}>Ver menos
              </BotonStyle>
            : <BotonStyle 
                botonVerMasDescripcion
                onClick={handleVerMasDescripcion}>Ver mas
              </BotonStyle>
          }
          
          <ContenedorBotonesStyle contenedorBotonesDescripcion>
            <BotonesDescripcion
              
              onClick={(titulo,descuento,descripcion,precio,imagen,id,cantidad) => anadirCarritoStore({
                titulo: tituloState,
                descuento: descuentoState,
                descripcion: descricionState,
                precio: precioState,
                imagen: imagenState,
                id: idState,
                cantidad:cantidadState,
              })} 
              padding="5px" 
              bRadius="50px" 
              mTop="10px">
              Agregar
              <Iconos>
                <FaCartPlus/>
              </Iconos>
            </BotonesDescripcion>

            <BotonesDescripcion
              botonesDescripcion  
              padding="5px" 
              bRadius="50px" 
              marginTop="10px">
              Comprar
              <Iconos>
                <FaShoppingBag />
              </Iconos>
            </BotonesDescripcion>
          </ContenedorBotonesStyle>

      </Main>
      <BotonAtras  to={-1} >
        <Iconos>
            <IoArrowBackOutline/>
        </Iconos>
      </BotonAtras>
    </>
  )
}


