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


interface Articulo {
  id:string;
  titulo:string;
  descuento?:number;
  descripcion:string;
  imagen:string;
  precio:number;
  cantidad: number
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
  const grupos: Record<string, { item: Articulo, cantidad: number }> = {};

  const cantidadTotal = articulosGuardados.reduce((total, item) => total + item.cantidad, 0);

  const subTotal = articulosGuardados.reduce((total,item) => total + item.precio, 0);

  const precioTotal = articulosGuardados.reduce((acc, item) => acc + (item.precio * (1 - item.descuento / 100)), 0);

  const descuentoTotal = articulosGuardados.reduce((acc, item) => acc + (item.precio * (item.descuento / 100)), 0);

  articulosGuardados.map((item) : void => {
    const { id } = item;
    if (!grupos[id]) {
      grupos[id] = { item, cantidad: 1 };
    } else {
      grupos[id].cantidad += 1;
    }
  });

  //agregar al carrito
  function añadirCarritoStore({ id, titulo, descuento, descripcion, precio, imagen, cantidad }:Articulo):void{
    añadirArticulos({
      id, 
      titulo, 
      descuento, 
      descripcion, 
      precio, 
      imagen, 
      cantidad
    })
  }

  


  // Renderizar componentes para cada grupo
  const componentes = Object.values(grupos).map((grupo) => {
    const { item ,cantidad } = grupo;
    const { id, titulo, descripcion, precio, descuento, imagen, } = item;

    const precio_con_descuento = precio - (precio * (descuento / 100));

    const precio_original = precio * cantidad

    const precio_con_cantidad = precio_con_descuento * cantidad;

    return (
        <MainArticulos
          articulosCarrito
          position="relative"
          height="60px"
          key={id}>

          <BotonStyle 
            botonIconoRemove 
            onClick={() => quitarArticulo(id)}
            >
            <Iconos>
              <FaCircleXmark size={windowWidth > 480 ? 25 : windowWidth > 1025 && 40} />
            </Iconos>
          </BotonStyle>

          <Imagen imagenDeCarrito src={imagen} />

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
                  botonesCarritoStyle
                  onClick={() => decrementarArticulo(id)}>
                  <Iconos>
                    <FaMinusCircle size={windowWidth > 480 ? 25 : windowWidth > 1025 && 40} /> 
                  </Iconos>
                </BotonStyle>
              : <BotonStyle 
                  botonesCarritoStyle
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
              onClick={(id,precio, descripcion, descuento, titulo, imagen, cantidad) => añadirCarritoStore({
                id: item.id,
                precio: item.precio,
                cantidad: item.cantidad,
                descripcion: item.descripcion,
                imagen: item.imagen,
                titulo: item.titulo,
                descuento: item.descuento,
              })} 
              botonesCarritoStyle>
              <Iconos>
                <IoMdAddCircleOutline size={windowWidth > 480 ? 25 : windowWidth > 1025 && 40} /> 
              </Iconos>
            </BotonStyle>

          </ContenedorBotonesCarrito>

        </MainArticulos>
    );
  });

  return (
  <Main mainCarrito>
    {
      cantidadTotal > 0 
      ? componentes
      : <Imagen
        imagenDeCarritoNoArticulos 
        src={imagenCarritoVacio} />
    }
    {
      cantidadTotal > 0 
      && (
        <>
          <Text 
            textoCarrito >
              {`${cantidadTotal} Productos`}
          </Text>
          <MainArticulos
            articulosCarrito
            pagarArticulosCarrito>
            <Text textoCarrito tAlign="left">
              Subtotal:
            </Text>
            <Text textoCarrito tAlign="right">
              {`$ ${subTotal}`}
            </Text>

            <Text textoCarrito tAlign="left">
              Descuento en productos:
            </Text>
            <Text textoCarrito tAlign="right">
              {`-$ ${descuentoTotal}`}
            </Text>

            <Text textoCarrito tAlign="left">
              Total:
            </Text>
            <Text textoCarrito tAlign="right">
              {`$ ${precioTotal}`}
            </Text>
          </MainArticulos>
          <BotonStyle botonComprarCarrito>
            Ir a pagar / Total: {`$ ${precioTotal}`}
          </BotonStyle>
        </>
      )
    }
    
  </Main>
  );
};








