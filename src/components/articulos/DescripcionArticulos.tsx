import { useParams, useLocation } from "react-router-dom"
import CarritoAñadir from "../../carritoCompras/CarritoAñadir";
import { ContenedorArticulosConjuntoStyle,ArticulosTituloStyle,ArticulosImagenStyle,ContenedorPreciosStyle,PrecioArticuloStyle,DescuentoDescripcionStyle,DescripcionArticuloStyle,BotonStyle,IconoStyle, BotonLink } from "../../styles/Style"
import { useState } from 'react';
import { FaCartPlus,FaShoppingBag  } from "react-icons/fa"
import { IoArrowBackOutline } from "react-icons/io5"



export const DescripcionArticulos = () => {

  // const { id } = useParams()
  const location = useLocation()

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
  const textLength = 300;
    
  const textRecortado = verMasDescripcion ? descripcion : `${descripcion.slice(0, textLength)}...`

  function handleVerMasDescripcion(){
    setVerMasDescripcion(!verMasDescripcion)
  }
  
  const precio_con_descuento = precio - (precio * (descuento / 100));
 
  return (
    <ContenedorArticulosConjuntoStyle position="relative">
      <BotonLink to={-1} >
        <IconoStyle>
          <IoArrowBackOutline/>
        </IconoStyle>
      </BotonLink>
      <ArticulosTituloStyle>
        { titulo }
        <ArticulosImagenStyle 
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
          ? <DescripcionArticuloStyle verMasDescripcion >
              { `${descripcion}` }
            </DescripcionArticuloStyle>
          : <DescripcionArticuloStyle>
              { `${textRecortado}` }
            </DescripcionArticuloStyle>
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
        
        <BotonStyle
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
          width="90%"
          marginTop="10px">
          Agregar
          <IconoStyle>
            <FaCartPlus/>
          </IconoStyle>
        </BotonStyle>

        <BotonStyle  
          padding="5px" 
          bRadius="50px" 
          width="90%"
          marginTop="10px">
          Comprar
          <IconoStyle>
            <FaShoppingBag />
          </IconoStyle>
        </BotonStyle>
      </ArticulosTituloStyle>

      <BotonLink to={-1}>
        <IconoStyle>
          <IoArrowBackOutline/>
        </IconoStyle>
      </BotonLink>
    </ContenedorArticulosConjuntoStyle>
  )
}


