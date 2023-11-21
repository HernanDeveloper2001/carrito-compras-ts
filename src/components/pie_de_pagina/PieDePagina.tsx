import { IconoStyle } from "../../styles/Style"
import { ContenedorPieDePaginaStyle,LinkRedes,Text,ContenedorBotonesStyle,ArticulosImagenStyle } from "../../styles/Style"
// import imagenCreador from "../../assets/imagenes/imagen_de_creador/hernan.jpg"
import { FaGithub, FaLinkedin,FaRegCopyright } from "react-icons/fa"
import { BsFillPassportFill } from "react-icons/bs";





const PieDePagina = () => {
  return (
    <ContenedorPieDePaginaStyle>
      <Text>Redes sociales</Text>
      <ContenedorBotonesStyle redesSociales>
        <LinkRedes href="https://github.com/HernanDeveloper2001" rel="noopener noreferrer" target="_blank">
          <IconoStyle>
            <FaGithub size={30}/> 
              Github
          </IconoStyle>
        </LinkRedes>

        <LinkRedes href="https://www.linkedin.com/in/hernandariocalvo/" rel="noopener noreferrer" target="_blank">
          <IconoStyle >
            <FaLinkedin size={30}/>
              Linkedin
          </IconoStyle>
        </LinkRedes>

        <LinkRedes href="https://portafolio-personal-rho.vercel.app/" rel="noopener noreferrer" target="_blank">
          <IconoStyle >
            <BsFillPassportFill size={30}/>
              portafolio
          </IconoStyle>
        </LinkRedes>
      </ContenedorBotonesStyle>
      <Text>Hernan dario calvo cornelio</Text>
      <Text><FaRegCopyright/>VentasCalvasProgresivas</Text>
    </ContenedorPieDePaginaStyle>
  )
}

export default PieDePagina
