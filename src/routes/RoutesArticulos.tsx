import { Route, Routes  } from "react-router-dom";
import { Inicio } from "../components/articulos/Inicio";
import { Camisas } from "../components/articulos/Camisas";
import { Pantalones } from "../components/articulos/Pantalones";
import { Zapatos } from "../components/articulos/Zapatos";
import { Perfumes } from "../components/articulos/Perfumes";
import { Alcohol } from "../components/articulos/Alcohol";
import { Relojes } from "../components/articulos/Relojes";
import { Consolas } from "../components/articulos/Consolas";
import { DescripcionArticulos } from "../components/articulos/DescripcionArticulos";
import { CarritoCompras } from "../carritoCompras/CarritoCompras";
import { PantallaError } from "../components/articulos/PantallaError";
import Usuarios from "../components/usuario/Usuarios";
import PanelDeAdministrador from "../components/usuario/PanelDeAdministrador";
import Compras from "../components/articulos/Compras";
import ComprasCompradas from "../components/articulos/ComprasCompradas";


const RoutesArticulos = () => {
  return (
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/articulo/camisas/" element={<Camisas />} />
        <Route path="/articulo/pantalon/" element={<Pantalones />} />
        <Route path="/articulo/zapatos/" element={<Zapatos />} />
        <Route path="/articulo/perfumes/" element={<Perfumes />} />
        <Route path="/articulo/alcohol/" element={<Alcohol />} />
        <Route path="/articulo/relojes/" element={<Relojes />} />
        <Route path="/articulo/consolas/" element={<Consolas />} />
        <Route path="/:articulo/descripcion/articulos/:id" element={<DescripcionArticulos />} />
        <Route path="/carrito/articulos" element={<CarritoCompras />} />
        <Route path="/usuario/" element={<Usuarios />} />
        <Route path="/panel_administrador/usuario/:usuario/" element={<PanelDeAdministrador />} />
        <Route path="/compras/" element={<Compras />} />
        <Route path="/compras/comprasCompradas/" element={<ComprasCompradas />} />
        <Route path="*" element={<PantallaError />} />
    </Routes>
  )
}

export default RoutesArticulos