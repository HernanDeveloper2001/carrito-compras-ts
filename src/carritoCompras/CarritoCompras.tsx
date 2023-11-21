import { carritoDatos } from "../store/carritoStore"
import { 
  ContenedorArticulosConjuntoStyle,
  ArticulosConjuntoStyle,
  ArticulosImagenStyle,
  CantidadCarritoStyle,
  ArticulosTituloStyle,
  DescuentoDescripcionStyle,
  PrecioArticuloStyle,
  CarritoArticulo,
  ContenedorBotonesStyle,
  BotonStyle, 
  IconoStyle 
} from './../styles/Style';

import { FaTrashAlt,FaMinusCircle  } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import imagenCarritoVacio from "../assets/imagenes/imagenCarritoCompras/carritoVacio2.jpg"
import React from "react"


interface Articulo {
  id:string;
  titulo:string;
  descuento:number;
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

  
  // Agrupar los objetos por su id
  const grupos: Record<string, { item: Articulo, cantidad: number }> = {};

  const cantidadTotal = articulosGuardados.reduce((total, item) => total + item.cantidad, 0);

  articulosGuardados.map((item) : void => {
    const { id } = item;
    if (!grupos[id]) {
      grupos[id] = { item, cantidad: 1 };
    } else {
      grupos[id].cantidad += 1;
    }
  });

  //agregar al carrito
  function añadirCarritoStore({ id, titulo, descuento, descripcion, precio, imagen, cantidad }){
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

  //disminuir el carrito
  function disminuirCarritoStore(){
    
  }


  // Renderizar componentes para cada grupo
  const componentes = Object.values(grupos).map((grupo) => {
    const { item ,cantidad } = grupo;
    const { id, titulo, descripcion, precio, descuento, imagen} = item;
    const precio_con_descuento = precio - (precio * (descuento / 100));
    const precio_con_cantidad = precio_con_descuento * cantidad;

    return (
      <ArticulosConjuntoStyle 
        position="relative"
        height="60px"
        key={id}>

        <BotonStyle 
          botonIconoRemove 
          onClick={() => quitarArticulo(id)}>
          <IconoStyle>
            <FaCircleXmark size={20}/>
          </IconoStyle>
        </BotonStyle>

        <ArticulosImagenStyle imagenDeCarrito src={imagen} />

        <CarritoArticulo>
          <ArticulosTituloStyle>
            {titulo}
          </ArticulosTituloStyle>
          <PrecioArticuloStyle>
            {`$ ${precio}`}
          </PrecioArticuloStyle>
          <DescuentoDescripcionStyle>
            {`$ ${precio_con_cantidad}`}
          </DescuentoDescripcionStyle>
        </CarritoArticulo>

        <ContenedorBotonesStyle contenedorCarritoStyle>
          
          <BotonStyle 
            botonesCarritoStyle
            onClick={() => decrementarArticulo(id)}>
            <IconoStyle>
              <FaMinusCircle /> 
            </IconoStyle>
          </BotonStyle>
    
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
            <IconoStyle>
              <IoMdAddCircleOutline size={25} /> 
            </IconoStyle>
          </BotonStyle>

        </ContenedorBotonesStyle>

      </ArticulosConjuntoStyle>
    );
  });

  return (
  <ContenedorArticulosConjuntoStyle>
    {
      cantidadTotal > 0 
      ? componentes
      : <ArticulosImagenStyle
        imagenDeCarritoNoArticulos 
        src={imagenCarritoVacio} />
    }
  </ContenedorArticulosConjuntoStyle>);
};








