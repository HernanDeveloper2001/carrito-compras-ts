import { HeaderInput,HeaderContenedor,Iconos,BotonLink,CantidadCarritoStyle,ContenedorInput } from "../../styles/Style"
import { LuShoppingCart } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { carritoDatos } from "../../store/carritoStore";
import { MdOutlineCancel } from "react-icons/md";
import Busqueda from "./busquedaArticulos/Busqueda";


interface Articulos {
  cantidad: number,
}

const InputBusqueda:React.FC = () => {

  const { articulosGuardados } = carritoDatos();
  const { 
    activarInput,
    inputActivo,
    windowWidth,
    botonComprasEstado 
  } = Busqueda();


  const cantidadArticulos = articulosGuardados.length >= 100 ? `${100}...` : articulosGuardados.length
  const cantidadElementos = articulosGuardados.map((item) => item.cantidad).reduce((acc, curr) => acc + curr, 0);
  return (
    <>
      <HeaderContenedor>

        <HeaderInput 
          type="text"
          onClick={activarInput} 
          placeholder="busca tus articulos" />
  
        {
          cantidadElementos > 0 
          ? (
            <>
              <BotonLink
                onClick={botonComprasEstado}
                botonCarritoLink
                to={"/carrito/articulos"}>
                <CantidadCarritoStyle
                  position="absolute">
                  {cantidadArticulos}
                </CantidadCarritoStyle>
                <Iconos>
                  <LuShoppingCart size={windowWidth > 480 ? 45 : 30}/>
                </Iconos>
              </BotonLink>
            </>
          )
          : <BotonLink
              onClick={botonComprasEstado}
              botonCarritoLink
              to={"/carrito/articulos"}>
              <Iconos>
                <LuShoppingCart size={windowWidth > 480 ? 45 : 30}/>
              </Iconos>
            </BotonLink>
        }
    
      </HeaderContenedor>
    </>
  )
}

export default InputBusqueda
