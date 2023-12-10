import React, {useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BotonStyle, Main, Text, Table, Tr, Th, Td } from "../../styles/Style";
import { usuariosDatos } from "../../store/carritoStore";
import { carritoDatos } from "../../store/carritoStore";


interface Grupo {
  item: {
    item: string;
    precio: number;
    descuento: number;
    titulo: string;
  };
  cantidad: number; // Agregar el tipo para cantidad
}

interface Grupos {
  [key: string]: Grupo;
}

const Compras: React.FC = () => {
  const location = useLocation();
  const { grupos, precioTotal } = location.state;
  const { usuarios, agregarComprasUsuarios,actualizarDineroUsuario } = usuariosDatos();
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
        }, 1000);
      })
      const nuevoDinero = usuario.dinero - precioTotal;
      // Actualiza el dinero del usuario después de realizar la compra
      setNDinero(nuevoDinero);
      setCompraRealizada(true)
      actualizarDineroUsuario(usuario.id, nuevoDinero);
    }
  }


  return (
    <Main>
      <Text>{`Tú dinero: ${nDinero}`}</Text>
      <Table>
        <thead>
        <Tr>
          <Th>{`Nombre`}</Th>
          <Th>{`Cantidad`}</Th>
          <Th>{`Precio`}</Th>
        </Tr>
        </thead>
        {Object.values(grupos).map(({ item, cantidad}) => {
          const {precio, descuento} = item;
          const precio_con_descuento = precio - (precio * (descuento / 100));
          const precio_con_cantidad = precio_con_descuento * cantidad;
          
          return (
            <tbody key={item.id}>
              <Tr>
                <Td>{item.titulo}</Td>
                <Td>{cantidad}</Td>
                <Td>{precio_con_cantidad}</Td>
              </Tr>
            </tbody>
          )
        })}
      </Table>
      {
        nDinero < precioTotal 
        ?<Text style={{color:"red"}}>¡No tienes dinero para comprar!</Text>
        :null
      }
      <Text>{precioTotal.toFixed(2)}</Text>
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
