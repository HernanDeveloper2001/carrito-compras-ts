import imagenDeError from "../../assets/imagenes/pantalla_de_carga/pantalla_de_error.jpg";
import { ContenedorArticulosConjuntoStyle,ArticulosImagenStyle } from "../../styles/Style";

export const PantallaError = () => {
  return (
    <ContenedorArticulosConjuntoStyle>
      <ArticulosImagenStyle
        imagenDeRutaNoEncontrada 
        src={imagenDeError} 
        alt="imagenDeError" />
    </ContenedorArticulosConjuntoStyle>
  )
}

