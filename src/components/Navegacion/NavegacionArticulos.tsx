import { Navegacion,Iconos,BotonLink,NavegacionLista,Subtitulo } from "../../styles/Style";
import { FaGlassCheers,FaTshirt  } from "react-icons/fa";
import { GiArmoredPants,GiConsoleController,GiDelicatePerfume,GiSonicShoes } from "react-icons/gi"
import { PiWatchDuotone } from "react-icons/pi";
import { articulos } from "../../Api/ApiTienda";


export const NavegacionArticulos = () => {

  return (
    <Navegacion>
      {
        Object.keys(articulos).map(item => (
          <NavegacionLista key={item}>
            <BotonLink botonnavegacion={"true"} to={`/articulo/${item}/`}>
              <Iconos>
              {
                (() => {
                  switch (item) {
                    case "camisas":
                      return <FaTshirt size={60} />;
                    case "pantalon":
                      return <GiArmoredPants size={60} />;
                    case "alcohol":
                      return <FaGlassCheers size={60} />;
                    case "zapatos":
                      return <GiSonicShoes size={60} />;
                    case "relojes":
                      return <PiWatchDuotone size={60} />;
                    case "consolas":
                      return <GiConsoleController size={60} />;
                    case "perfumes":
                      return <GiDelicatePerfume size={60} />;
                    default:
                      return null;
                  }
                })()
              }
              </Iconos>
            </BotonLink>
            <Subtitulo>{item}</Subtitulo>
          </NavegacionLista>
        ))
      }
    </Navegacion>
  )
};

