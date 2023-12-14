import { ContenedorDeDatosUsuario, Text, ContenedorEntradaDeDatos, Imagen } from "../../styles/Style";
import { useLocation } from "react-router-dom";
import React from "react"


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
            {`Compras: ${Object.values(compras).map((grupo) => {
              if (typeof grupo === 'object' && grupo !== null) {
                const { item } = grupo;
                if (item) {
                  const { titulo } = item;
                  return titulo;
                }
              }
              return ''; // Manejar el caso en que 'item' no existe o es null
            }).join(' - ')}`}
          </Text>
      </ContenedorEntradaDeDatos>

      <ContenedorEntradaDeDatos contenedorusuarioetiqueta={"true"}>
        <Text etiquetausuario={"true"}>{`Contraseña: ${ocultarContraseña}`}</Text>
      </ContenedorEntradaDeDatos>

    </ContenedorDeDatosUsuario>
  )
}

export default PanelDeAdministrador