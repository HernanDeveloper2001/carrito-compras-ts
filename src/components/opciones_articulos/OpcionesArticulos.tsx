import { OpcionesArticulosStyle,IconoStyle,BotonStyle,ContenedorOpcionesArticulosStyle,ParrafoOpcionesArticulos } from "../../styles/Style";
import { FaGlassCheers,FaTshirt  } from "react-icons/fa";
import { GiArmoredPants,GiConsoleController,GiDelicatePerfume,GiSonicShoes } from "react-icons/gi"
import { PiWatchDuotone } from "react-icons/pi";


const OpcionesArticulos = () => {
  return (
    <OpcionesArticulosStyle>

      <ContenedorOpcionesArticulosStyle to={"/camisas"}>
        <BotonStyle bRadius="50%">
          <IconoStyle>
            <FaTshirt size={60}/> { /*camisa */}
          </IconoStyle>
        </BotonStyle>
        <ParrafoOpcionesArticulos>Camisas</ParrafoOpcionesArticulos>
      </ContenedorOpcionesArticulosStyle>

      <ContenedorOpcionesArticulosStyle to={"/alcohol"}>
        <BotonStyle bRadius="50%">
          <IconoStyle>
            <FaGlassCheers size={60}/> { /*alcohol */}
          </IconoStyle>
        </BotonStyle>
        <ParrafoOpcionesArticulos>Alcohol</ParrafoOpcionesArticulos>
      </ContenedorOpcionesArticulosStyle>

      <ContenedorOpcionesArticulosStyle to={"/pantalones"}>
        <BotonStyle bRadius="50%">
          <IconoStyle>
            <GiArmoredPants size={60}/> { /*pantalones */}
          </IconoStyle>
        </BotonStyle>
        <ParrafoOpcionesArticulos>Pantalones</ParrafoOpcionesArticulos>
      </ContenedorOpcionesArticulosStyle>

      <ContenedorOpcionesArticulosStyle to={"/relojes"}>
        <BotonStyle bRadius="50%">
          <IconoStyle>
            <PiWatchDuotone size={60}/> { /*relojes */}
          </IconoStyle>
        </BotonStyle>
        <ParrafoOpcionesArticulos>Relojes</ParrafoOpcionesArticulos>
      </ContenedorOpcionesArticulosStyle>

      <ContenedorOpcionesArticulosStyle to={"/zapatos"}>
        <BotonStyle bRadius="50%">
          <IconoStyle>
            <GiSonicShoes size={60}/> { /*zapatos */}
          </IconoStyle>
        </BotonStyle>
        <ParrafoOpcionesArticulos>Zapatos</ParrafoOpcionesArticulos>
      </ContenedorOpcionesArticulosStyle>

      <ContenedorOpcionesArticulosStyle to={"/perfumes"}>
        <BotonStyle bRadius="50%">
          <IconoStyle>
            <GiDelicatePerfume  size={60}/> { /*perfumes */}
          </IconoStyle>
        </BotonStyle>
        <ParrafoOpcionesArticulos>perfumes</ParrafoOpcionesArticulos>
      </ContenedorOpcionesArticulosStyle>

      <ContenedorOpcionesArticulosStyle to={"/consolas"}>
        <BotonStyle bRadius="50%">
          <IconoStyle>
            <GiConsoleController size={60}/> { /*consolas */}
          </IconoStyle>
        </BotonStyle>
        <ParrafoOpcionesArticulos>consolas</ParrafoOpcionesArticulos>
      </ContenedorOpcionesArticulosStyle>

    </OpcionesArticulosStyle>
  )
}

export default OpcionesArticulos
