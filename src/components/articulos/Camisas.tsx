import { articulos } from "../../Api/ApiTienda"
import { ContenedorArticulosConjuntoStyle,ArticulosConjuntoStyle,ArticulosTituloStyle,ArticulosImagenStyle,BotonStyle,IconoStyle,ContenedorBotonesStyle,ArticulosDescuentoStyle,BotonLink, BotonConLinkStyle } from "../../styles/Style";
import { FaCartPlus} from "react-icons/fa"
import { LiaEyeSolid } from "react-icons/lia";
import { IoArrowBackOutline } from "react-icons/io5";
import { carritoDatos } from "../../store/carritoStore";



export const Camisas = () => {

  const camisas = articulos.camisas

  const  { añadirArticulos,articulosGuardados } = carritoDatos()
  
  function anadirCarritoStore(
    { id, titulo, descuento, descripcion, precio, imagen, cantidad } : void) {
      añadirArticulos({
        titulo,
        descuento,
        descripcion,
        precio,
        imagen,
        id,
        cantidad, 
      });
  }
  

  return (
    <ContenedorArticulosConjuntoStyle>
      <BotonLink to={"/"}>
        <IconoStyle><IoArrowBackOutline/></IconoStyle>
      </BotonLink>
      {camisas.map(item => {
        return (
          <ArticulosConjuntoStyle key={item.id}>
            <ArticulosDescuentoStyle>{`-${item.descuento}%`}</ArticulosDescuentoStyle>
            <ArticulosTituloStyle>{item.titulo}</ArticulosTituloStyle>
            <ArticulosImagenStyle 
              src={item.imagen} 
              alt={item.titulo}>
            </ArticulosImagenStyle>
            <ContenedorBotonesStyle>
              {/*Ver contenido*/}
              <BotonConLinkStyle 
                to={`/camisas/descripcion/articulos/${item.titulo}`}
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
