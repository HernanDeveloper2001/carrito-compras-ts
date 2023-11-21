import { create } from "zustand";


interface Articulo {
  id:string;
  precio:number;
  descuento?: number | null;
  descripcion: string;
  imagen: string; 
  titulo: string;
  cantidad:number;
}

interface DatosCarrito {
  articulosGuardados: Articulo[]; 
  añadirArticulos: (item:Articulo) => void;
  quitarArticulo: (id: string | number) => void;
  decrementarArticulo: (id: string | number) => void;
}

export const carritoDatos = create<DatosCarrito>(set => ({
  articulosGuardados : [],

  añadirArticulos: (item) => set(state => ({
    articulosGuardados: [...state.articulosGuardados, item]
  })),

  quitarArticulo: (id) => set(state => ({
    articulosGuardados:state.articulosGuardados.filter(item => item.id !== id)
  })),

  decrementarArticulo: (id) => 
    set(state => {
      const idx = state.articulosGuardados.findIndex(item => item.id === id);
      if (idx !== -1) {
        // Use slice to create a new array without the item at the found index
        const updatedArticulosGuardados = [
          ...state.articulosGuardados.slice(0, idx),
          ...state.articulosGuardados.slice(idx + 1)
        ];

        return {
          articulosGuardados: updatedArticulosGuardados
        };
      }
      // If the item with the specified id is not found, return the current state
      return state;
    })
}))