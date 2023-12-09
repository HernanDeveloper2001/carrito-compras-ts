import { HeaderInput,HeaderContenedor,Iconos,BotonLink,CantidadCarritoStyle } from "../../styles/Style"
import { LuShoppingCart } from "react-icons/lu";
import { carritoDatos } from "../../store/carritoStore";
import Busqueda from "./busquedaArticulos/Busqueda";
import { LuUser } from "react-icons/lu";


const InputBusqueda:React.FC = () => {

  const { articulosGuardados } = carritoDatos();
  const { 
    activarInput,
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
                botoncarritolink={"true"}
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
              botoncarritolink={"true"}
              to={"/carrito/articulos"}>
              <Iconos>
                <LuShoppingCart size={windowWidth > 480 ? 45 : windowWidth > 1024 ? 45 : 30} />
              </Iconos>
            </BotonLink>
        }

        <BotonLink to={"/usuario/"}>
          <Iconos>
            <LuUser size={windowWidth > 480 ? 45 : windowWidth > 1024 ? 45 : 30} />
          </Iconos>
        </BotonLink>

      </HeaderContenedor>
    </>
  )
}

export default InputBusqueda
