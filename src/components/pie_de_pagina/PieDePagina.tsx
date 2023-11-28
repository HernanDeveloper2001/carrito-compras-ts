import { Iconos } from "../../styles/Style"
import { Footer,LinkRedes,Text,ContenedorRedesSocialesStyle } from "../../styles/Style"
import { FaGithub, FaLinkedin,FaRegCopyright } from "react-icons/fa"
import { BsFillPassportFill } from "react-icons/bs";
import Busqueda from "../cabezera/busquedaArticulos/Busqueda";

const PieDePagina = () => {

  const { windowWidth } = Busqueda();
  return (
    <Footer>
      <Text>Redes sociales</Text>
      <ContenedorRedesSocialesStyle>
        <LinkRedes 
          href="https://github.com/HernanDeveloper2001" rel="noopener noreferrer" target="_blank">
          <Iconos>
            <FaGithub size={windowWidth > 480 ? 40 : windowWidth > 1024 ? 80 : 20}/> 
              Github
          </Iconos>
        </LinkRedes>

        <LinkRedes href="https://www.linkedin.com/in/hernandariocalvo/" rel="noopener noreferrer" target="_blank">
          <Iconos >
            <FaLinkedin size={windowWidth > 480 ? 40 : windowWidth > 1024 ? 80 : 20}/>
              Linkedin
          </Iconos>
        </LinkRedes>

        <LinkRedes href="https://portafolio-personal-rho.vercel.app/" rel="noopener noreferrer" target="_blank">
          <Iconos >
            <BsFillPassportFill size={windowWidth > 480 ? 40 : windowWidth > 1024 ? 80 : 20}/>
              portafolio
          </Iconos>
        </LinkRedes>
      </ContenedorRedesSocialesStyle>
      <Text>Hernan dario calvo cornelio</Text>
      <Text><FaRegCopyright/>VentasCalvasProgresivas</Text>
    </Footer>
  )
}

export default PieDePagina
