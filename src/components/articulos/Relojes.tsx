import { articulos } from "../../Api/ApiTienda"
import { ContenedorArticulosConjuntoStyle,ArticulosConjuntoStyle,ArticulosDescuentoStyle,ArticulosTituloStyle,ArticulosImagenStyle,BotonStyle,ContenedorBotonesStyle,IconoStyle, BotonLink, BotonConLinkStyle } from "../../styles/Style"
import { FaCartPlus } from "react-icons/fa"
import { LiaEyeSolid } from "react-icons/lia"
import { IoArrowBackOutline } from "react-icons/io5";
import CarritoAñadir from "../../carritoCompras/CarritoAñadir";

export const Relojes = () => {

  const relojes = articulos.relojes
  const {
    anadirCarritoStore
  } = CarritoAñadir();
  return (
    <ContenedorArticulosConjuntoStyle>
      <BotonLink to={"/"}>
        <IconoStyle><IoArrowBackOutline/></IconoStyle>
      </BotonLink>
      {relojes.map(item => {
        return (
          <ArticulosConjuntoStyle key={item.id}>
            {item.descuento > 0 && <ArticulosDescuentoStyle>{`-${item.descuento}%`}</ArticulosDescuentoStyle>}
            <ArticulosTituloStyle>{item.titulo}</ArticulosTituloStyle>
            <ArticulosImagenStyle
              src={item.imagen} 
              alt={item.titulo}>
            </ArticulosImagenStyle>
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
                  descripcion: item.descripcion,
                  cantidad: item.cantidad,
                }} 
                padding="10px" 
                bRadius="5%">
                ver
                <IconoStyle>
                  <LiaEyeSolid />
                </IconoStyle>
              </BotonConLinkStyle>
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
