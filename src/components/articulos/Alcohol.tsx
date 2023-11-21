import { articulos } from "../../Api/ApiTienda"
import { ContenedorArticulosConjuntoStyle,ArticulosConjuntoStyle,ArticulosDescuentoStyle,ArticulosTituloStyle,ArticulosImagenStyle,BotonStyle,ContenedorBotonesStyle,IconoStyle, BotonLink,BotonConLinkStyle } from "../../styles/Style"
import { FaCartPlus } from "react-icons/fa"
import { LiaEyeSolid } from "react-icons/lia"
import { IoArrowBackOutline } from "react-icons/io5"
import { Outlet } from "react-router-dom"


export const Alcohol = () => {

  const alcohol = articulos.alcohol

  return (
    <ContenedorArticulosConjuntoStyle>
      <BotonLink to={"/"}>
        <IconoStyle><IoArrowBackOutline/></IconoStyle>
      </BotonLink>
      {alcohol.map(item => {
        return (
          <ArticulosConjuntoStyle key={item.id} >
            <ArticulosDescuentoStyle>{`-${item.descuento}%`}</ArticulosDescuentoStyle>
            <ArticulosTituloStyle>{item.titulo}</ArticulosTituloStyle>
            <ArticulosImagenStyle
              src={item.imagen} 
              alt={item.titulo}>
            </ArticulosImagenStyle>

            <ContenedorBotonesStyle>
              {/*Ver contenido*/}
              <BotonConLinkStyle 
                to={`/alcohol/descripcion/articulos/${item.titulo}`}
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
      <Outlet />
    </ContenedorArticulosConjuntoStyle>
  )
}

