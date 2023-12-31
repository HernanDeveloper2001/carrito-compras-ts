import React, { useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BotonStyle, Main, Text, Table, Tr, Th, Td } from "../../styles/Style";
import { usuariosDatos } from "../../store/carritoStore";
import { carritoDatos } from "../../store/carritoStore";


interface ArticuloCompra {
  cantidad:number,
  item: {
    id:string,
    descripcion: string,
    precio:number,
    cantidad:number,
    descuento?:number | null,
    imagen:string,
    titulo:string
  }
}

// interface Props


const Compras: React.FC = () => {
  const location = useLocation();
  const { grupos, precioTotal } = location.state;
  const { usuarios, agregarComprasUsuarios,actualizarDineroUsuario } = usuariosDatos();
  const usuario = usuarios[0];
  const [nDinero, setNDinero] = useState(usuario.dinero)
  const { quitarArticulo } = carritoDatos();
  const rutaNavegacion = useNavigate();


  const enviarComprasUsuarios = ({grupos}: {
  grupos: { [key: string]: ArticuloCompra & { cantidad: number } };
  }) => {
    // Assuming "usuario" and "precioTotal" are defined somewhere
    if (usuario.dinero >= precioTotal) {
      Object.values(grupos).forEach((itemCompras: ArticuloCompra) => {
        const { item, cantidad } = itemCompras;
        const { id } = item;
        const nuevoDinero = usuario.dinero - precioTotal * cantidad;
        // Adjust this line according to your store structure
        agregarComprasUsuarios(usuario.id, itemCompras);
        quitarArticulo(id); // Uncomment this line if needed
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
        {Object.values(grupos)
        .filter((itemCompras): itemCompras is ArticuloCompra => typeof itemCompras === 'object' && itemCompras !== null)
        .map((itemCompras) => {
          const { cantidad, item } = itemCompras;
          const { precio, descuento, titulo } = item;

          // Manejar el caso en el que descuento es null
          const descuentoReal = descuento ?? 0;

          const precio_con_descuento = precio - (precio * (descuentoReal / 100));
          const precio_con_cantidad = precio_con_descuento * cantidad;
          
          return (
            <tbody key={titulo}>
              <Tr>
                <Td>{titulo}</Td>
                <Td>{cantidad}</Td>
                <Td>{precio_con_cantidad}</Td>
              </Tr>
            </tbody>
          );
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
