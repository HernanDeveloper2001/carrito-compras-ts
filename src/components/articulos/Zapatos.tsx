import { Main,Subtitulo, Imagen, ContenedorBotonesStyle,BotonStyle,Iconos,MainArticulos,ArticulosDescuentoStyle,BotonAtras, BotonLink } from "../../styles/Style"
import {FaCartPlus } from "react-icons/fa"
import { articulos } from "../../Api/ApiTienda"
import { LiaEyeSolid } from "react-icons/lia";
import { IoArrowBackOutline } from "react-icons/io5";
import CarritoAñadir from "../../carritoCompras/CarritoAñadir";
import React from "react"


export const Zapatos: React.FC = () => {

  const zapatos = articulos.zapatos
  const {
    anadirCarritoStore
  } = CarritoAñadir();


  return (
    <>
      <BotonAtras to={"/"}>
        <Iconos>
          <IoArrowBackOutline/>
        </Iconos>
      </BotonAtras>
      <Main mainarticulos={"true"}>
        {zapatos.map(item => {
          return (
            <MainArticulos key={item.id}>
              {(item.descuento ?? 0) > 0 && <ArticulosDescuentoStyle>{`-${item.descuento}%`}</ArticulosDescuentoStyle>}
              <Subtitulo>{item.titulo}</Subtitulo>
              <Imagen src={item.imagen} alt={item.titulo}></Imagen>
              <ContenedorBotonesStyle>
                {/*Ver contenido*/}
                <BotonLink
                  botonagregar={"true"}
                  to={`/relojes/descripcion/articulos/${item.titulo}`}
                  state={{
                    titulo: item.titulo,
                    descuento: item.descuento,
                    precio: item.precio,
                    imagen: item.imagen,
                    identificacion: item.id,
                    descripcion: item.descripcion,
                    cantidad: item.cantidad,
                  }} >
                  ver
                  <Iconos>
                    <LiaEyeSolid />
                  </Iconos>
                </BotonLink>
                {/*Agregar al carrito*/}
                <BotonStyle 
                  onClick={() => anadirCarritoStore({
                    titulo: item.titulo,
                    descuento: item.descuento,
                    descripcion:item.descripcion,
                    precio: item.precio,
                    imagen: item.imagen,
                    id:item.id,
                    cantidad: item.cantidad
                  })} 
                  padding="10px" 
                  bradius="5%">
                  Agregar
                  <Iconos>
                    <FaCartPlus/>
                  </Iconos>
                </BotonStyle>
              </ContenedorBotonesStyle>
            </MainArticulos>
          )
        })}
      </Main>
      <BotonAtras to={"/"}>
        <Iconos>
          <IoArrowBackOutline/>
        </Iconos>
      </BotonAtras>
    </>
  )
}
