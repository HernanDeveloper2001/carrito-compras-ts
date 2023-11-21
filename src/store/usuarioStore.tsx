import { create } from "zustand";

interface Usuario {
  nombre : string;
  contraseña: string;
}


interface Usuarios {
  usuarios:Usuario;
}

export const usuarioDatos = create<Usuarios>(set => ({
  usuarios : {
    nombre: "hernan dario",
    contraseña: "hernan123",
  }
}))