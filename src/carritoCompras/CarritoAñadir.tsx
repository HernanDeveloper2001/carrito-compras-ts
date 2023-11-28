import { carritoDatos, Articulo } from "../store/carritoStore";



const CarritoAñadir = () => {

  const  { añadirArticulos } = carritoDatos()

  function anadirCarritoStore(
    { id, titulo, descuento, descripcion, precio, imagen, cantidad }: Articulo) {
      añadirArticulos({
        titulo,
        descuento,
        descripcion,
        precio,
        imagen,
        id,
        cantidad, 
      });
  }


  return {
    anadirCarritoStore,
  }
}

export default CarritoAñadir
