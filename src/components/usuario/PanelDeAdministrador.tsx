import { ContenedorDeDatosUsuario, Text, ContenedorEntradaDeDatos, Imagen } from "../../styles/Style";
import { useLocation } from "react-router-dom";
import React from "react"

interface ArticuloCompra {
  cantidad:number,
  item: {
    id:string,
    descripcion: string,
    precio:number,
    cantidad:number,
    descuento?:number | null,
    imagen:string,
    titulo:string
  }
}


const PanelDeAdministrador : React.FC = () => {

  const datosUsuarios = useLocation();
  const { usuario, id, contraseña, dinero, compras, edad, imagen } =  datosUsuarios.state;
  const ocultarContraseña = "*".repeat(contraseña.length)
  

  return (
    <ContenedorDeDatosUsuario datosusuarios={"true"}>
      <ContenedorEntradaDeDatos contenedorusuarioetiqueta={"true"}>
        <Text etiquetausuario={"true"}>{`Imagen de ${usuario}`}</Text>
        <Imagen imagenusuario={"true"} src={imagen} alt={`imagen de ${usuario}`} />
      </ContenedorEntradaDeDatos>

      <ContenedorEntradaDeDatos contenedorusuarioetiqueta={"true"}>
        <Text etiquetausuario={"true"}>{`Identificación: ${id}`}</Text>
      </ContenedorEntradaDeDatos>

      <ContenedorEntradaDeDatos contenedorusuarioetiqueta={"true"}>
        <Text etiquetausuario={"true"}>{`Usuario: ${usuario}`}</Text>
      </ContenedorEntradaDeDatos>

      <ContenedorEntradaDeDatos contenedorusuarioetiqueta={"true"}>
        <Text etiquetausuario={"true"}>{`Dinero: ${dinero}`}</Text>
      </ContenedorEntradaDeDatos>

      <ContenedorEntradaDeDatos contenedorusuarioetiqueta={"true"}>
        <Text etiquetausuario={"true"}>{`Edad: ${edad}`}</Text>
      </ContenedorEntradaDeDatos>

      <ContenedorEntradaDeDatos contenedorusuarioetiqueta={"true"}>
      <Text etiquetausuario={"true"}>
            {`Compras: ${Object.values(compras).filter((grupo): grupo is ArticuloCompra => typeof grupo === 'object' && grupo !== null)
              .map((grupo) => {
                const { item } = grupo;
                if (item) {
                  const { titulo } = item;
                  return titulo;
                }
                return ''; // Manejar el caso en que 'item' no existe o es null
              }) // Manejar el caso en que 'item' no existe o es null
            })`}
          </Text>
      </ContenedorEntradaDeDatos>

      <ContenedorEntradaDeDatos contenedorusuarioetiqueta={"true"}>
        <Text etiquetausuario={"true"}>{`Contraseña: ${ocultarContraseña}`}</Text>
      </ContenedorEntradaDeDatos>

    </ContenedorDeDatosUsuario>
  )
}

export default PanelDeAdministrador