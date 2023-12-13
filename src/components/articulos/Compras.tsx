import React, { useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BotonStyle, Main, Text, Table, Tr, Th, Td } from "../../styles/Style";
import { usuariosDatos } from "../../store/carritoStore";
import { carritoDatos } from "../../store/carritoStore";

interface ArticuloCompra {
  id: string;
  cantidad: number;
  titulo: string;
  precio: number;
  descuento: number;
  descripcion: string;
  imagen: string;
}

const Compras: React.FC = () => {
  const location = useLocation();
  const { grupos, precioTotal } = location.state;
  const { usuarios, agregarComprasUsuarios,actualizarDineroUsuario } = usuariosDatos();
  const usuario = usuarios[0];
  const [nDinero, setNDinero] = useState(usuario.dinero)
  const { quitarArticulo } = carritoDatos();
  const rutaNavegacion = useNavigate();


  const enviarComprasUsuarios = ({ grupos }: { grupos: { [key: string]: ArticuloCompra & { cantidad: number} } }) => {
    // Assuming "usuario" and "precioTotal" are defined somewhere
    if (usuario.dinero >= precioTotal) {
      Object.values(grupos).forEach((itemCompras) => {
        const { item, cantidad } = itemCompras;
        agregarComprasUsuarios(usuario.id, itemCompras);
        quitarArticulo(item.id); // Uncomment this line if needed
        const nuevoDinero = usuario.dinero - (precioTotal * cantidad);
        setNDinero(nuevoDinero);
        actualizarDineroUsuario(usuario.id, nuevoDinero);
        rutaNavegacion("/compras/comprasCompradas/");
      });
    }
  };
  


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
        {Object.values(grupos).map((grupos) => {
          const { cantidad, item } = grupos
          const {precio, descuento, titulo} = item;
          const precio_con_descuento = precio - (precio * (descuento / 100));
          const precio_con_cantidad = precio_con_descuento * cantidad;
          return (
            <tbody key={titulo}>
              <Tr>
                <Td>{titulo}</Td>
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
