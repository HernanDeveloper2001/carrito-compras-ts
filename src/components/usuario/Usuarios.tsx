import { BotonAtras, BotonLink, Iconos, Main } from "../../styles/Style";
import { usuariosDatos } from "../../store/carritoStore";
import { ContenedorDeDatosUsuario, Text } from "../../styles/Style";
import { IoArrowBackOutline } from "react-icons/io5"

const Usuarios = () => {

  const { usuarios } = usuariosDatos();
  

  return (
    <>
      <BotonAtras to={"/"}>
        <Iconos>
          <IoArrowBackOutline/>
        </Iconos>
      </BotonAtras>
      <Main>
        {
          usuarios.map(usuario => (
            <ContenedorDeDatosUsuario key={usuario.id}>
              <BotonLink
                to={`/panel_administrador/usuario/${usuario.usuario}/`}
                state={{
                  usuario: usuario.usuario,
                  dinero: usuario.dinero,
                  edad: usuario.edad,
                  id: usuario.id,
                  compras: usuario.articulosComprados,
                  contraseña: usuario.contraseña,
                  imagen: usuario.imagen,
                }}
                botonusuarios={"true"}>
                <Text>{usuario.usuario}</Text>
              </BotonLink>
            </ContenedorDeDatosUsuario>
          ))
        }
        <ContenedorDeDatosUsuario>
          <BotonLink 
            to={"/usuario/nuevoUsuario/"}>
            Agregar nuevo usuario
          </BotonLink>
        </ContenedorDeDatosUsuario>
      </Main>
      <BotonAtras to={"/"}>
        <Iconos>
          <IoArrowBackOutline/>
        </Iconos>
      </BotonAtras>
    </>
  )
}

export default Usuarios