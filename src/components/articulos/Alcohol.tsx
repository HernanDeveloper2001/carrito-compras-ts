import { articulos } from "../../Api/ApiTienda"
import { Main,MainArticulos,ArticulosDescuentoStyle,Subtitulo,Imagen,BotonStyle,ContenedorBotonesStyle,Iconos, BotonAtras,BotonLink } from "../../styles/Style"
import { FaCartPlus } from "react-icons/fa"
import { LiaEyeSolid } from "react-icons/lia"
import { IoArrowBackOutline } from "react-icons/io5"
import CarritoAñadir from "../../carritoCompras/CarritoAñadir"
import React from "react"


interface Item {
  id: string; // O el tipo de datos correcto para tu ID
  titulo: string;
  descuento: number;
  descripcion: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

export const Alcohol: React.FC = () => {

  const alcohol = articulos.alcohol;
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
      <Main mainArticulos={true}>
      {alcohol.map(item => {
        return (
          <MainArticulos key={item.id} >
            {item.descuento > 0 && <ArticulosDescuentoStyle>{`-${item.descuento}%`}</ArticulosDescuentoStyle>}
            <Subtitulo>{item.titulo}</Subtitulo>
            <Imagen
              src={item.imagen} 
              alt={item.titulo}>
            </Imagen>

            <ContenedorBotonesStyle>
              {/*Ver contenido*/}
              <BotonLink 
                botonAgregar={true}
                to={`/alcohol/descripcion/articulos/${item.titulo}`}
                state={{
                  titulo: item.titulo,
                  descuento: item.descuento,
                  precio: item.precio,
                  imagen: item.imagen,
                  id: item.id,
                  descripcion: item.descripcion,
                  cantidad:item.cantidad,
                }}
                padding="10px" 
                bRadius="5%">
                ver
                <Iconos>
                  <LiaEyeSolid />
                </Iconos>
              </BotonLink>

              {/*Agregar al carrito*/}
              <BotonStyle 
                onClick={({id,titulo,descuento,descripcion,precio,imagen,cantidad}) => anadirCarritoStore({
                  titulo: item.titulo,
                  descuento: item.descuento,
                  descripcion:item.descripcion,
                  precio: item.precio,
                  imagen: item.imagen,
                  id:item.id,
                  cantidad: item.cantidad
                })} 
                padding="10px" 
                bRadius="5%">
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
        <Iconos >
          <IoArrowBackOutline/>
        </Iconos>
      </BotonAtras>
    </>
  )
}

