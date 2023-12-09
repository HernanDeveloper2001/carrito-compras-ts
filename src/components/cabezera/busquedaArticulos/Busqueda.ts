import { useState, useEffect} from "react"

const Busqueda = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [inputActivo, setInputActivo] = useState(false);
  const [botonComprasActivo, setBotonComprasActivo] = useState(false);

  function botonComprasEstado(){
    setBotonComprasActivo(true);
  }

  function activarInput(){
    setInputActivo(true);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar un event listener para el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    activarInput,
    inputActivo,
    windowWidth,
    botonComprasActivo,
    botonComprasEstado
  }
}

export default Busqueda