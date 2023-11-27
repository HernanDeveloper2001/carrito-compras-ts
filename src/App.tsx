import "./styles/reset.css"
import Cabezera from "./components/cabezera/Cabezera";
import { NavegacionArticulos } from "./components/Navegacion/NavegacionArticulos";
import PieDePagina from "./components/pie_de_pagina/PieDePagina";
import RoutesArticulos from "./routes/RoutesArticulos";
import PantallaCarga from "./components/articulos/PantallaCarga";
import { useState, useEffect } from "react"


const App = () => {

  interface InicioProp {
    loading:boolean
  }

  const [loading, setLoading] = useState<InicioProp["loading"]>(true);

  useEffect(() => {
    // Simula una carga de 2 segundos
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading 
      ? <PantallaCarga /> 
      : <>
          <Cabezera/>
          <NavegacionArticulos />
          <RoutesArticulos />
          <PieDePagina/>
        </>
      }
    </>
  )
}

export default App
