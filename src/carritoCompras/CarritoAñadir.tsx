import { carritoDatos } from "../store/carritoStore";



const CarritoAñadir = () => {

  const  { añadirArticulos } = carritoDatos()

  function anadirCarritoStore(
    { id, titulo, descuento, descripcion, precio, imagen, cantidad }) {
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
