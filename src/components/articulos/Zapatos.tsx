import { ContenedorArticulosConjuntoStyle,ArticulosTituloStyle, ArticulosImagenStyle, ContenedorBotonesStyle,BotonStyle,IconoStyle,ArticulosConjuntoStyle,ArticulosDescuentoStyle,BotonLink,BotonConLinkStyle } from "../../styles/Style"
import {FaCartPlus } from "react-icons/fa"
import { articulos } from "../../Api/ApiTienda"
import { LiaEyeSolid } from "react-icons/lia";
import { IoArrowBackOutline } from "react-icons/io5";


export const Zapatos = () => {

  const zapatos = articulos.zapatos

  return (
    <ContenedorArticulosConjuntoStyle>
      <BotonLink to={"/"}>
        <IconoStyle><IoArrowBackOutline/></IconoStyle>
      </BotonLink>
      {zapatos.map(item => {
        return (
          <ArticulosConjuntoStyle key={item.id}>
            <ArticulosDescuentoStyle>
              {`-${item.descuento}%`}
            </ArticulosDescuentoStyle>
            <ArticulosTituloStyle>{item.titulo}</ArticulosTituloStyle>
            <ArticulosImagenStyle src={item.imagen} alt={item.titulo}></ArticulosImagenStyle>
            <ContenedorBotonesStyle>
              {/*Ver contenido*/}
              <BotonConLinkStyle 
                to={`/relojes/descripcion/articulos/${item.titulo}`}
                state={{
                  titulo: item.titulo,
                  descuento: item.descuento,
                  precio: item.precio,
                  imagen: item.imagen,
                  identificacion: item.id,
                  descripcion: item.descripcion
                }} 
                padding="10px" 
                bRadius="5%">
                ver
                <IconoStyle>
                  <LiaEyeSolid />
                </IconoStyle>
              </BotonConLinkStyle>
              {/*Agregar al carrito*/}
              <BotonStyle padding="10px" bRadius="5%">
                Agregar
                <IconoStyle>
                  <FaCartPlus/>
                </IconoStyle>
              </BotonStyle>
            </ContenedorBotonesStyle>
          </ArticulosConjuntoStyle>
        )
      })}
      <BotonLink to={"/"}>
        <IconoStyle><IoArrowBackOutline/></IconoStyle>
      </BotonLink>
    </ContenedorArticulosConjuntoStyle>
  )
}
