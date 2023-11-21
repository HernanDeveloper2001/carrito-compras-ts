import { UsuarioStyle,TituloUsuarioStyle } from "../../styles/Style";
import { usuarioDatos } from "../../store/usuarioStore";

const Usuarios = () => {

  const { nombre} = usuarioDatos((state ) => state.usuarios);

  return (
    <UsuarioStyle>
      <TituloUsuarioStyle>
        {`Bienvenido ${nombre}`}
      </TituloUsuarioStyle>
    </UsuarioStyle>
  )
}

export default Usuarios
