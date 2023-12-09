import { FaCheck } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";

import { Iconos, Main, Text, BotonAtras } from "../../styles/Style";


const ComprasCompradas = () => {
  return (
    <Main>
      <BotonAtras to={"/"}>
        <Iconos>
          <IoArrowBackOutline/>
        </Iconos>
      </BotonAtras>
      <Iconos>
        <FaCheck />
      </Iconos>
      <Text>Tu compra se realizo correctamente</Text>
      <BotonAtras to={"/"}>
        <Iconos>
          <IoArrowBackOutline/>
        </Iconos>
      </BotonAtras>
    </Main>
  )
}

export default ComprasCompradas
