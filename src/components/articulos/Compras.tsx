import React, { useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BotonStyle, Main, Text, Table, Tr, Th, Td } from "../../styles/Style";
import { usuariosDatos } from "../../store/carritoStore";
import { carritoDatos } from "../../store/carritoStore";
import { Usuarios } from "../../store/carritoStore";

interface Compra {
  item: {
    id:string;
    precio:number;
    descuento?: number | null;
    descripcion: string;
    imagen: string; 
    titulo: string;
    cantidad:number;
  },
  cantidad: number;
}



const Compras: React.FC = () => {
  const location = useLocation();
  const { grupos, precioTotal } = location.state;
  const { usuarios, agregarComprasUsuarios,actualizarDineroUsuario } = usuariosDatos();
  const usuario = usuarios[0];
  const [nDinero, setNDinero] = useState(usuario.dinero)
  const { quitarArticulo } = carritoDatos();
  const rutaNavegacion = useNavigate();


  function enviarComprasUsuarios<T>({ grupos }: { grupos: Record<string, T>}) {
    if (usuario.dinero >= precioTotal) {
      Object.values(grupos).forEach(({ item, cantidad}) => {
        const { id } = item;
        const compra = { item, cantidad };
        setTimeout(() => {
          agregarComprasUsuarios(usuario.id, compra);
          quitarArticulo(id);
        }, 1000);
        const nuevoDinero = usuario.dinero - precioTotal;
        // Actualiza el dinero del usuario después de realizar la compra
        setNDinero(nuevoDinero);
        actualizarDineroUsuario(usuario.id, nuevoDinero);
        rutaNavegacion("/compras/comprasCompradas/")
      })
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
        {Object.values(grupos).map(({ item, cantidad}: Compra) => {
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
