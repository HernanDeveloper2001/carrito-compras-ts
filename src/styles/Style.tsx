import styled, {css, keyframes} from "styled-components";
import { Link } from "react-router-dom"

interface StyleProps {
  etiquetausuario?:string;
  datosusuarios?:string;
  botonusuarios?:string;
  maincompras?:string;
  botonenviarusuarios?:string;
  imagenusuario?:string;
  mainarticulos?:string;
  contenedorusuarioetiqueta?:string;
  iconoBuscar?:boolean;
  subtitulodescripcion?:string;
  iconoCancelar?:boolean;
  botonagregar?:string;
  position?:string;
  contenedorbotonesdescripcion?:string;
  margin?:string;
  border?:string | number;
  width?:number;
  height?:number;
  bColor?:string | number;
  padding?:string | number;
  bradius?: string | number;
  botonvermasdescripcion?: string;
  errors?:string;
  botonescarritostyle?: string;
  botoniconoremove?: string;
  botoncomprarcarrito?: string;
  mTop?: string | number;
  botoncarritolink?: string;
  botonUsuario?: string | number;
  contenedorBotonesCarrito?: string | number;
  redesSociales?: string | number;
  pagararticuloscarrito?: string;
  imagendecarga?: string;
  imagendescripcion?: string;
  imagendecarrito?: string;
  imagendecarritonoarticulos?: string;
  imagenderutanoencontrada?: string ;
  verMasDescripcion?: boolean;
  preciocondescuento?: string;
  textocarrito?: string;
  talign?: string | number;
  botonAtras?: string | number;
  maincarrito?:string;
  articuloscarrito?:string;
  botonnavegacion?:string;
}

const breakpoints = {
  mobile: '480px',
  tablet: '1024px',
  desktop: '1025px',
};

// header
export const Header = styled.header`
  height: 60px;
  padding: 0 10px;
  display: flex;
  align-items:center;
  justify-content: center;

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width:${breakpoints.tablet}){
    width: 100%;
    height: 100%;
    padding: 30px 0;
    align-items: center;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 100%;
    height: 100%;
    padding: 50px 0;
    align-items: center;
  }
`
export const HeaderContenedor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 5px;
  align-items: center;
  align-self: flex-end;
`
export const HeaderInput = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 30px;
  border: none;
  text-indent: 40px;
  text-align: left;
  box-shadow: 1px 2px 3px 1px #ccc;
  line-height: 5;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  outline: none;

  &:focus {
    border: 1px solid #00747f;
    box-shadow: 1px 2px 3px 1px #00747f;
  }

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width:${breakpoints.tablet}){
    height: 50px;
    text-indent: 60px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 50px;
    text-indent: 60px;
  }
`

//Iconos
export const Iconos = styled.i<StyleProps>`
  padding: 5px;
  position: relative;
  display: grid;
  place-items: center;
  ${props => props.iconoBuscar && iconoBuscar}
`
const iconoBuscar = css`
  position: absolute;
  left: 25px;

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width:${breakpoints.tablet}){
    left: 65px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    left: 110px;
  }
`

// Botones
export const BotonLink = styled(Link)<StyleProps>`
  padding: ${props => props.padding || "0"};
  text-decoration: none;
  color:#ff9500;
  font-family: 'Montserrat', sans-serif;
  font-size:4vw;
  width: auto;
  ${props => props.botoncarritolink && botonCarritoLink}
  ${props => props.botonnavegacion && botonNavegacion}
  ${props => props.botonagregar && botonAgregar}
  ${props => props.botonusuarios && botonUsuarios}
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width:${breakpoints.tablet}){
    font-size:3vw;
    width: auto;
  } 

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size:2vw;
    width: auto;
  } 
`
export const BotonStyle = styled.button<StyleProps>`
  background-color: ${prop => prop.bColor || null};
  border-radius: ${props => props.bradius || null};
  border: 1px solid #ff9500;
  background-color: yellow;
  padding: ${props => props.padding || "0"};
  text-decoration: none;
  color:#ff9500;
  font-family: 'Montserrat', sans-serif;
  font-size:4vw;
  width: ${props => props.width || "auto"};
  margin-top: ${props => props.mTop || null};
  cursor: pointer;
  ${props => props.botonvermasdescripcion && botonVerMasDescripcion}
  ${props => props.botonescarritostyle && botonesCarritoStyle}
  ${props => props.botoniconoremove && botonIconoRemove}
  ${props => props.botoncomprarcarrito && botonComprarCarrito}
  ${props => props.botonenviarusuarios && botonEnviarUsuarios}

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width:${breakpoints.tablet}){
    font-size:3vw;
    width: auto;
  } 

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size:2vw;
    width: auto;
  } 
`
export const ContenedorBotonesStyle = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap:20px;
  width:90%;
  padding: 10px 0;
  ${props => props.contenedorbotonesdescripcion && contenedorBotonesDescripcion}
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }
`
const botonNavegacion = css`
  border:1px solid #ff9500;
  border-radius: 50%;
  background-color: yellow;
`
const botonVerMasDescripcion = css`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: none;
`
const botonAgregar = css`
  background-color:yellow;
  border: 1px solid #ff9500;
  border-radius: 5px;
  padding: 10px;
`
const botonComprarCarrito = css`
  width:90%;
  background-color:#ff9500;
  color:#fff;
  font-weight:400;
  border-radius: 5px;
  padding: 10px;
  position: sticky;
  bottom: 100px;
  z-index: 2;
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    margin-top: 50px;
  }
`
const botonCarritoLink = css`
  background-color: transparent;
  border: none;
  position: relative;
`
const botonesCarritoStyle = css`
  background-color: transparent;
  border: none;
`
const botonIconoRemove = css`
  border-radius: 50%;
  position: absolute;
  background-color: transparent;
  border:none;
  transform: translate(-50%, -50%);
  top: 0;
  left: 0;
  z-index: 2;
`
export const BotonAtras = styled(Link)`
  width: 50%;
  display: block;
  font-size: 20px;
  color: #ff9500;
  z-index:2;
  background-color:yellow;
  border: 1px solid #ff9500;
  width: 50%;
  margin: 30px auto;
  border-radius: 50px;

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    width: 50%;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    width: 50%;
  }
`
export const ContenedorBotonesCarrito = styled.div`
  position: absolute;
  height: auto;
  width: 100px;
  padding: 0 10px;
  right: 0;
  bottom: 10px;
  display: flex;
  margin-right: 10px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 1px 1px #ddd;
  border-radius: 10px;
  
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    height:50px;
    width: 300px;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    width:400px;
    height:50px;
  }
`
const contenedorBotonesDescripcion = css`
  width:90%;
  grid-template-columns: repeat(2, 1fr);
  place-items:center;
  row-gap:20px;
`
export const BotonesDescripcion = styled.button`
  display: grid;
  place-items: center;
  border:1px solid #ff6500;
  padding: 10px;
  background-color: yellow;
  border-radius:10px;
  color:#ff6500;
  width:100%;
  font-size: 4vw;
  font-family: 'Montserrat',sans-serif;

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width:${breakpoints.tablet}){
    font-size:3vw;

  } 

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size:2vw;
  } 
`

// Imagenes

export const Imagen = styled.img<StyleProps>`
  width:100% ;
  height:200px;
  object-fit: contain;
  position: ${props => props.position || null};
  ${props => props.imagendecarga && imagenDeCarga}
  ${props => props.imagendescripcion && imagenDescripcion}
  ${props => props.imagendecarrito && imagenDeCarrito}
  ${props => props.imagendecarritonoarticulos && imagenDeCarritoNoArticulos}
  ${props => props.imagenderutanoencontrada && imagenDeRutaNoEncontrada}
  ${props => props.imagenusuario && imagenUsuario}
`
const imagenDeCarga = css`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`
const imagenDescripcion = css`
  width: 90%;
  height: 250px;
  object-fit: contain;
  margin: 20px 0;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop}) {
    height: 300px;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    height:400px;
  }
`
const imagenDeCarrito = css`
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: absolute;
  left: 10px;
  top:10px;
  object-fit: contain;

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    width: 150px;
    height: 150px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 200px;
    height: 200px;
  }
`
const imagenDeRutaNoEncontrada = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const imagenDeCarritoNoArticulos = css`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`


// Navegacion
export const Navegacion = styled.nav`
  display: grid;
  overflow: auto;
  gap:20px;
  grid-template-columns:repeat(4, 150px);
  place-items: center;
  background-color: #ddd;
  padding:20px;

  &::-webkit-scrollbar {
    height:5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(255, 255, 0);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 0, 0.297);
  }

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    grid-template-columns: repeat(4, 350px);
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    grid-template-columns: repeat(4, 1fr);
  }
`
export const NavegacionLista = styled.li`
  display: grid;
  place-items: center;
  list-style: none;
  gap: 5px;
  font-family: 'Montserrat', sans-serif;
  width:100%;
  text-decoration: none;
  color:#ff9500;
`
export const Subtitulo = styled.h3<StyleProps>`
  font-size: 20px;
  text-align: ${props => props.talign || "center"};
  text-transform: capitalize;
  font-weight: 700;
  z-index: 2;
  font-size: 4vw;
  ${props => props.subtitulodescripcion && subtituloDescripcion}

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    font-size:3vw;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size: 2vw;
  }
`
const subtituloDescripcion = css`
  color:#ff9500;
  font-weight: 700;
`

// Main
export const CantidadCarritoStyle = styled.span<StyleProps>`
  font-size: 12px;
  position: ${props => props.position || null};
  bottom:5px;
  font-weight: 700;
  z-index: 2;
  top: 0;
  right: 0;
  color: red;
  border: 1px solid #ff6500;
  background-color:#ff6500;
  border-radius:50%;
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  background-color: ${props => props.bColor || null};
`
const showArticulosConjuntoStyle = keyframes`
  from {
    opacity: 0;
    transform:scale(0.25);
  }
  to {
    opacity: 1;
    transform:scale(1);
  }
`
export const Main = styled.main<StyleProps>`
  display: grid;
  place-items: center;
  row-gap: 20px;
  font-family: 'Montserrat', sans-serif;
  text-align:center;
  padding: 20px 0;
  width: 100%;
  ${props => props.maincarrito && mainCarrito}
  ${props => props.position || null}
  ${props => props.mainarticulos && mainArticulos}
`
const mainArticulos = css`
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    grid-template-columns: auto auto;
    row-gap: 50px;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    grid-template-columns: auto auto auto;
    row-gap: 80px;
    width: 100%;
    height: 100%;
  }

`
const mainCarrito = css`
  grid-template-columns: 1fr;
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    grid-auto-rows:auto;
    row-gap: 50px;
    padding: 100px 0;
  }
`
export const MainArticulos = styled.article<StyleProps>`
  width: 90%;
  padding: 10px 0;
  display: grid;
  place-items: center;
  border-radius: 5px;
  height: ${props => props.height || "auto"};
  box-shadow: 1px -1px  5px 2px #ccc;
  position: ${props => props.position || "relative"};
  animation: ${showArticulosConjuntoStyle} 1s ease-in-out;
  ${props => props.pagararticuloscarrito && pagarArticulosCarrito}
  ${props => props.articuloscarrito && articulosCarrito}
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    gap: 20px;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    gap: 20px;
  }
`
const articulosCarrito = css`
  position:relative;
  height:60px;
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    height: 150px;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    height: 200px;
  }
`
const pagarArticulosCarrito = css`
  display: grid;
  grid-template-columns: auto auto;
  width:80%;
  padding: 20px;
`
export const Titulo = styled.h2`
  padding: 10px ;
  width:auto;
  font-size: 4vw;
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    font-size: 3vw;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size: 2vw;
  }
`
export const ContenedorCarritoPrecios = styled.article`
  position: absolute;
  top: 0;
  padding: 10px;
  left: 70px;
  display: grid;
  text-align:left;
  display: grid;

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    left:160px;
    height: 150px;
    row-gap: 20px;
    place-content: center;
    text-align: left;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    left: 220px;
    height: 200px;
    row-gap: 30px;
    place-content: center;
    text-align: left;
  }
`
export const DescripcionArticulo = styled.p<StyleProps>`
  font-size: 4vw;
  padding: 20px;
  overflow: hidden;
  transition: height 0.5 ease-out;
  white-space: pre-line;
  text-orientation:sideways;
  text-overflow: ellipsis;
  transition: height 2s ease;
  text-align: justify;

  ${props => props.verMasDescripcion && verMasDescripcion}

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    font-size:3vw;
    padding: 50px;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    padding: 100px;
    font-size:2vw;
  }

`
const verMasDescripcion = css`
  height: auto;
`
export const ArticulosDescuentoStyle = styled.span`
  width: 50px;
  height: 50px;
  position: absolute;
  display: grid;
  place-items: center;
  top: 0;
  right: 0;
  border-radius: 50%;
  border: 1px solid red;
  color: #000;
  background-color:red;
  transform: translate(20%, -50%);
  font-weight: 700;

 
  &::before {
    content: " ";
    position: absolute;
    right: 0;
    z-index: -2;
    background-color: yellow;
    width: 30px;
    height: 30px;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }
`
export const ContenedorPreciosStyle = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: auto auto;
  height: 50px;
`
export const DescuentoDescripcionStyle = styled.span`
  font-size: 4vw;
  text-align: left;
  color: #ff9500;

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    font-size:3vw;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size:2vw;
  }
` 
export const PrecioArticuloStyle = styled.span<StyleProps>`
  font-size: 4vw;
  text-decoration: line-through;
  color: rgba(255, 0, 0, 0.89);
  ${props => props.preciocondescuento && precioConDescuento}

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    font-size:3vw;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size:2vw;
  }
`
const precioConDescuento = css`
  font-weight: 700;
  font-size: 4vw;
  text-decoration: none;
  color:#000;
  text-align: left;

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    font-size:3vw;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size:2vw;
  }
`

// pie de pagina

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  height:auto;
  background-color: #ddd;
  gap: 50px;
  padding: 20px;
`
export const ContenedorRedesSocialesStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;


  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    grid-template-columns: repeat(3, 1fr);
  }
`
export const LinkRedes = styled.a`
  width: auto;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #ff6500;
  text-transform: uppercase;
  height:auto;
  display: grid;
  place-items: center;
  font-size: 4vw;

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    font-size:3vw;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size: 2vw;
  }
`
export const Text = styled.p<StyleProps>`
  font-family: 'Montserrat', sans-serif;
  text-transform: capitalize;
  font-weight: 200;
  ${props => props.textocarrito && textoCarrito}
  text-align:${props => props.talign || "center"};
  margin: ${props => props.margin || null};
  font-size: 4vw;
  color: ${props => (props.errors ? "red" : "black")};
  ${props => props.etiquetausuario && etiquetaUsuario}
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    font-size:3vw;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size: 2vw;
  }
`
const textoCarrito = css<StyleProps>`
  font-weight: 400;
  color: #000;
  width: 100%;
  padding: ${props => props.padding || null};
  font-weight: 200;
  text-align: ${props => props.talign || null};
  font-size: 4vw;

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    font-size:3vw;
  }

  @media screen and (min-width: ${breakpoints.desktop}){
    font-size: 2vw;
  }
`
const etiquetaUsuario = css`
  color: #ff6500;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  text-align: left;
  z-index: 1;
  padding: 20px;
  border-left: 5px solid #ff6500;
  overflow: hidden;
  overflow-x: scroll;
  width: 100%;
  text-overflow: ellipsis;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: darken(red, 15%); /* Fondo de la animación */
    z-index: -2;
    transition: background-color 0.3s; /* Transición para suavizar el cambio de color */
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: darken(yellow, 15%);
    transition: all 3s;

    z-index: -1;
  }

  &:hover {
    color: #ff6500;
    &:before {
      width: 100%;
    }
    &:after {
      background-color: #f4f48d; /* Cambia el fondo de la animación al hacer hover */
    }
  }
`;

// usaurios

export const ContenedorDeDatosUsuario = styled.main<StyleProps>`
  height: auto;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  ${props => props.datosusuarios && datosUsuarios }
`
const datosUsuarios = css`
  display: grid;
  row-gap: 50px;
  place-items: center;
  width: 100%;
  @media screen and (min-width:${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`
export const FormularioDatosUsuario = styled.form`
  width: 90%;
  font-family: 'Montserrat',sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 4vw;
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    font-size: 3vw;
    gap:40px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 2vw;
    gap: 60px;
  }
`
export const ContenedorEntradaDeDatos = styled.div<StyleProps>`
  width:100%;
  height:auto;
  ${props => props.contenedorusuarioetiqueta && contenedorUsuarioEtiqueta}
`
export const EntradaDeDatosUsuario = styled.input`
  font-family: 'Montserrat',sans-serif;
  outline: none;
  border: 1px solid #ff6500;
  background-color: yellow;
  border-radius: 10px;
  color:#ff6500;
  width: 100%;
  text-indent: 20px;
  margin-top: 10px;
  padding: 10px 0;
  font-size: 4vw;
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    font-size: 3vw;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 2vw;
  }
`
const botonUsuarios = css`
  text-decoration: underline;
  background-color: transparent;
`
const botonEnviarUsuarios = css`
  background-color:yellow;
  width: 60%;
  align-self: center;
  padding: 10px;
  border: 1px solid #ff6500;
  border-radius: 10px;
  font-size: 4vw;
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}){
    font-size: 3vw;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 2vw;
  }
`
const contenedorUsuarioEtiqueta = css`
  display: flex;
  align-items: center;
  @media screen and (min-width:${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  @media screen and (min-width:${breakpoints.desktop}) {
    width: 80%;
  }
`
const imagenUsuario = css`
  width:30%;
  max-height: 50px;
  object-fit: contain;
`

//

export const Table = styled.table`
  width: 90%;
  border:1px solid #000;
  border-radius:5px;
  font-size: 4vw;
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 3vw;
  }
  
  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 2vw;
  }
`
export const Tr = styled.tr`
  border:1px solid #000;
`
export const Th = styled.th`
  padding: 10px;
  border: 1px solid rgb(0, 0, 0);
  color: #000;
  background-color: #ff6500;
  width:auto;
`
export const Td = styled.td`
  width: 50%;
  padding: 10px;
  background-color: #8bf5e5;
  border:1px solid #000;
  width:auto;
`
