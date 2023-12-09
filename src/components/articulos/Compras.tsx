import React, {useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BotonStyle, Main, Text, Table, Tr, Th, Td } from "../../styles/Style";
import { usuariosDatos } from "../../store/carritoStore";
import { carritoDatos } from "../../store/carritoStore";


const Compras = () => {
  const location = useLocation();
  const { grupos, precioTotal } = location.state;
  const { usuarios, agregarComprasUsuarios } = usuariosDatos();
  const [compraRealizada, setCompraRealizada] = useState(false);
  const usuario = usuarios[0];
  const [nDinero, setNDinero] = useState(usuario.dinero)
  const { quitarArticulo } = carritoDatos();
  const rutaNavegacion = useNavigate();

  useEffect(() => {
    if (compraRealizada) {
      rutaNavegacion("/compras/comprasCompradas/")
    }
  }, [compraRealizada]);

  if (compraRealizada) {
    return null;
  }

  function enviarComprasUsuarios({ grupos }) {
    if (usuario.dinero >= precioTotal) {
      Object.values(grupos).forEach(({ item, cantidad }) => {
        const compra = { item, cantidad };
        setTimeout(() => {
          agregarComprasUsuarios(usuario.id, compra);
          quitarArticulo(item.id);
        }, 3000);
      })
      const nuevoDinero = usuario.dinero - precioTotal;
      // Actualiza el dinero del usuario después de realizar la compra
      setNDinero(nuevoDinero);
      setCompraRealizada(true)
      usuariosDatos().actualizarDineroUsuario(usuario.id, nuevoDinero);
    }
  }


  return (
    <Main>
      <Text>{`Tú dinero: ${nDinero}`}</Text>
      <Table>
        <Tr>
          <Th>{`Nombre`}</Th>
          <Th>{`Cantidad`}</Th>
          <Th>{`Precio`}</Th>
        </Tr>
        {Object.values(grupos).map(({ item, cantidad }) => (
          <Tr key={item.titulo}>
            <Td>{item.titulo}</Td>
            <Td>{cantidad}</Td>
            <Td>{item.precio}</Td>
          </Tr>
        ))}
      </Table>
      <BotonStyle
        onClick={() => enviarComprasUsuarios({ grupos })}
        bradius={"10px"}
        padding={"10px"}
      >
        Comprar
      </BotonStyle>
    </Main>
  );
};

export default Compras;
