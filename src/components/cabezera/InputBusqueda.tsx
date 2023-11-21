import { InputStyle,ContenedorBusquedaStyle,IconoStyle,BotonConLinkStyle,CantidadCarritoStyle } from "../../styles/Style"
import { LuShoppingCart } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { carritoDatos } from "../../store/carritoStore";
import React from "react"

interface Articulos {
  cantidad: number,
}

const InputBusqueda:React.FC = () => {

  const { articulosGuardados } = carritoDatos();

  const cantidadArticulos = articulosGuardados.length >= 100 ? `${100}...` : articulosGuardados.length
  const cantidadElementos = articulosGuardados.map((item) => item.cantidad).reduce((acc, curr) => acc + curr, 0);
  return (
    <ContenedorBusquedaStyle>

      <InputStyle 
        type="search" 
        placeholder="busca tus articulos" />     

      {
        cantidadElementos > 0 
        ? (
          <>
            <IconoStyle iconoSearch>
              <IoSearchOutline />
            </IconoStyle>

            <BotonConLinkStyle
              botonCarritoLink
              to={"/carrito/articulos"}>
              <CantidadCarritoStyle>
                {cantidadArticulos}
              </CantidadCarritoStyle>
              <IconoStyle>
                <LuShoppingCart size={33}/>
              </IconoStyle>
            </BotonConLinkStyle>
          </>
        )
        : <BotonConLinkStyle
            botonCarritoLink
            to={"/carrito/articulos"}>
            <IconoStyle>
              <LuShoppingCart size={33}/>
            </IconoStyle>
          </BotonConLinkStyle>
      }
  
    </ContenedorBusquedaStyle>
  )
}

export default InputBusqueda
