import { carritoDatos } from "../store/carritoStore"
import { 
  Main,
  MainArticulos,
  Imagen,
  CantidadCarritoStyle,
  Subtitulo,
  DescuentoDescripcionStyle,
  PrecioArticuloStyle,
  ContenedorCarritoPrecios,
  ContenedorBotonesCarrito,
  BotonStyle, 
  Iconos,
  Text,
} from './../styles/Style';
import Busqueda from "../components/cabezera/busquedaArticulos/Busqueda";
import { FaTrashAlt,FaMinusCircle  } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import imagenCarritoVacio from "../assets/imagenes/imagenCarritoCompras/carritoVacio2.jpg"
import React from "react"


interface ArticulosCompras {
  id: string;
  cantidad: number;
  titulo: string;
  precio: number;
  descuento: number;
  descripcion: string;
  imagen:string;
}

export const CarritoCompras: React.FC = () => {
  const { 
    articulosGuardados,
    quitarArticulo,
    decrementarArticulo,
    añadirArticulos,
  } = carritoDatos();

  const { windowWidth } = Busqueda();

  // Agrupar los objetos por su id
  const grupos: Record<string, { item: ArticulosCompras , cantidad: number }> = {};

  const cantidadTotal = articulosGuardados.reduce((total, item) => total + item.cantidad, 0);

  const subTotal = articulosGuardados.reduce((total,item) => total + item.precio, 0);

  const precioTotal = articulosGuardados.reduce((acc, item) => {
    // Verificar si item.descuento está definido antes de usarlo
    if (item.descuento !== null && item.descuento !== undefined) {
      return acc + (item.precio * (1 - item.descuento / 100));
    } else {
      // Si item.descuento es null o undefined, sumar solo el precio
      return acc + item.precio;
    }
  }, 0);

  const descuentoTotal = articulosGuardados.reduce((acc, item) => {
    // Verificar si item.descuento está definido antes de usarlo
    if (item.descuento !== null && item.descuento !== undefined) {
      return acc + (item.precio * (item.descuento / 100));
    } else {
      // Si item.descuento es null o undefined, no sumar nada al descuento total
      return acc;
    }
  }, 0);

  articulosGuardados.forEach((item) => {
    const { id, descuento} = item;
  
    if (!grupos[id]) {
      // Aquí, asumo que ArticulosCompras tiene las mismas propiedades que Articulo
      grupos[id] = { item: { ...item, descuento: descuento || 0 }, cantidad: 1 };
    } else {
      grupos[id].cantidad += 1;
    }
  });

  //agregar al carrito
  function añadirCarritoStore(
    { id, titulo, descuento, descripcion, precio, imagen, cantidad}:ArticulosCompras
  ){
    añadirArticulos({
      id, 
      titulo, 
      descuento, 
      descripcion, 
      precio, 
      imagen, 
      cantidad,
    })
  }

  
  // Renderizar componentes para cada grupo
  const componentes = Object.values(grupos).map((grupo) => {
    const { item ,cantidad } = grupo;
    const { id, titulo, precio, descuento, imagen } = item;

    const precio_con_descuento = precio - (precio * (descuento / 100));

    const precio_original = precio * cantidad

    const precio_con_cantidad = precio_con_descuento * cantidad;

    return (
      <>
        <MainArticulos
          articuloscarrito={"true"}
          key={id}>

          <BotonStyle 
            botoniconoremove={"true"}
            onClick={() => quitarArticulo(id)}
            >
            <Iconos>
              <FaCircleXmark size={windowWidth > 480 ? 25 : windowWidth > 1025 && 40} />
            </Iconos>
          </BotonStyle>

          <Imagen imagendecarrito={"true"} src={imagen} />

          <ContenedorCarritoPrecios>
            <Subtitulo tAlign="left">
              {titulo}
            </Subtitulo>
            {
              descuento > 0 
              && 
              <PrecioArticuloStyle>
                {`$ ${precio_original}`}
              </PrecioArticuloStyle>
            }
            <DescuentoDescripcionStyle>
              {`$ ${precio_con_cantidad}`}
            </DescuentoDescripcionStyle>
          </ContenedorCarritoPrecios>

          <ContenedorBotonesCarrito>
            {
              cantidad > 1
              ? <BotonStyle 
                  botonescarritostyle={"true"}
                  onClick={() => decrementarArticulo(id)}>
                  <Iconos>
                    <FaMinusCircle size={windowWidth > 480 ? 25 : windowWidth > 1025 && 40} /> 
                  </Iconos>
                </BotonStyle>
              : <BotonStyle 
                  botonescarritostyle={"true"}
                  onClick={() => decrementarArticulo(id)}>
                  <Iconos>
                    <FaTrashAlt size={windowWidth > 480 ? 25 : windowWidth > 1025 && 40} /> 
                  </Iconos>
                </BotonStyle>
            }
            
            <CantidadCarritoStyle>
              {`${cantidad}`}
            </CantidadCarritoStyle>

            <BotonStyle
              onClick={() => añadirCarritoStore({
                id: item.id,
                precio: item.precio,
                cantidad: item.cantidad,
                descripcion: item.descripcion,
                imagen: item.imagen,
                titulo: item.titulo,
                descuento: item.descuento,
              })} 
              botonescarritostyle={"true"}>
              <Iconos>
                <IoMdAddCircleOutline size={windowWidth > 480 ? 25 : windowWidth > 1025 && 40} /> 
              </Iconos>
            </BotonStyle>

          </ContenedorBotonesCarrito>

        </MainArticulos>
      </>
    );
  });

  return (
    <>
      <Main maincarrito={"true"}>
        {
          cantidadTotal > 0 
          ? componentes
          : <Imagen
            imagendecarritonoarticulos={"true"}
            src={imagenCarritoVacio} />
        }
        {
          cantidadTotal > 0 
          && (
            <>
              <Text 
                textocarrito={"true"} >
                  {`${cantidadTotal} Productos`}
              </Text>
              <MainArticulos
                articuloscarrito={"true"}
                pagararticuloscarrito={"true"}>
                <Text textocarrito={"true"} tAlign="left">
                  Subtotal:
                </Text>
                <Text textocarrito={"true"} tAlign="right">
                  {`$ ${subTotal}`}
                </Text>

                <Text textocarrito={"true"} tAlign="left">
                  Descuento en productos:
                </Text>
                <Text textocarrito={"true"} tAlign="right">
                  {`-$ ${descuentoTotal}`}
                </Text>

                <Text textocarrito={"true"} tAlign="left">
                  Total:
                </Text>
                <Text textocarrito={"true"} tAlign="right">
                  {`$ ${precioTotal}`}
                </Text>
              </MainArticulos>
              <BotonStyle botoncomprarcarrito={"true"}>
                Ir a pagar / Total: {`$ ${precioTotal}`}
              </BotonStyle>
            </>
          )
        }
        
      </Main>
    </>
  );
};








