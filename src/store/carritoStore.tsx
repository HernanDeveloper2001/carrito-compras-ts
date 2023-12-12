import { create } from "zustand";
import { nanoid } from "nanoid";
import imagenHernan from "../assets/imagenes/usuarios/pinocho.jpg";


export interface Articulo {
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


// store de usuarios

export interface Usuarios {
  id:string;
  usuario: string;
  contraseña: string;
  dinero:number;
  imagen:string;
  edad:number;
  articulosComprados: unknown[];
}

interface DatosUsuarios {
  usuarios: Usuarios[];
  agregarComprasUsuarios: (usuarioId: string, item : Usuarios, ) => void;
  actualizarDineroUsuario: (usuarioId: string, nuevoDinero: number,) => void;
}

export const usuariosDatos = create<DatosUsuarios>((set) => ({
  usuarios:[{
    id:nanoid(),
    usuario: "hernan",
    contraseña: "mariela123",
    dinero: 300000000,
    edad: 23,
    articulosComprados: [],
    imagen:imagenHernan,
  },
  ],
  agregarComprasUsuarios: (usuarioId, item) => set((state) => {
      const usuariosActualizados = state.usuarios.map((usuario) =>
        usuario.id === usuarioId
          ? { 
              ...usuario, 
              articulosComprados: [
                ...usuario.articulosComprados, 
                item
              ] 
            }
          : usuario
      );
      return { usuarios: usuariosActualizados};
  }),
  actualizarDineroUsuario : (usuarioId, nuevoDinero) => set((state) => {
    const usuariosActualizados = state.usuarios.map((usuario) =>
      usuario.id === usuarioId
        ? { ...usuario, dinero: nuevoDinero }
        : usuario
    )
    return { usuarios: usuariosActualizados };
  })
}))