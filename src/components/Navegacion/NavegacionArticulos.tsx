import { Navegacion,Iconos,BotonLink,NavegacionLista,Subtitulo } from "../../styles/Style";
import { FaGlassCheers,FaTshirt  } from "react-icons/fa";
import { GiArmoredPants,GiConsoleController,GiDelicatePerfume,GiSonicShoes } from "react-icons/gi"
import { PiWatchDuotone } from "react-icons/pi";


export const NavegacionArticulos = () => {


  return (
    <Navegacion>

      <NavegacionLista >
        <BotonLink botonNavegacion to={"/camisas"}>
          <Iconos>
            <FaTshirt size={60}/> { /*camisa */}
          </Iconos>
        </BotonLink>
        <Subtitulo>Camisas</Subtitulo>
      </NavegacionLista>

      <NavegacionLista>
        <BotonLink botonNavegacion to={"/alcohol"}>
          <Iconos>
            <FaGlassCheers size={60}/> { /*alcohol */}
          </Iconos>
        </BotonLink>
        <Subtitulo>Alcohol</Subtitulo>
      </NavegacionLista>

      <NavegacionLista >
        <BotonLink botonNavegacion to={"/pantalones"}>
          <Iconos>
            <GiArmoredPants size={60}/> { /*pantalones */}
          </Iconos>
        </BotonLink>
        <Subtitulo>Pantalones</Subtitulo>
      </NavegacionLista>

      <NavegacionLista >
        <BotonLink botonNavegacion to={"/relojes"}>
          <Iconos>
            <PiWatchDuotone size={60}/> { /*relojes */}
          </Iconos>
        </BotonLink>
        <Subtitulo>Relojes</Subtitulo>
      </NavegacionLista>

      <NavegacionLista >
        <BotonLink botonNavegacion to={"/zapatos"}>
          <Iconos>
            <GiSonicShoes size={60}/> { /*zapatos */}
          </Iconos>
        </BotonLink>
        <Subtitulo>Zapatos</Subtitulo>
      </NavegacionLista>

      <NavegacionLista >
        <BotonLink botonNavegacion to={"/perfumes"}>
          <Iconos>
            <GiDelicatePerfume  size={60}/> { /*perfumes */}
          </Iconos>
        </BotonLink>
        <Subtitulo>perfumes</Subtitulo>
      </NavegacionLista>

      <NavegacionLista>
        <BotonLink botonNavegacion to={"/consolas"}>
          <Iconos>
            <GiConsoleController size={60}/> { /*consolas */}
          </Iconos>
        </BotonLink>
        <Subtitulo>consolas</Subtitulo>
      </NavegacionLista>

    </Navegacion>
  )
}

