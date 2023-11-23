import styled, {css, keyframes} from "styled-components";
import { Link } from "react-router-dom"


// header
export const CabezeraStyle = styled.header`
  height: 60px;
  padding: 0 10px;
  display: flex;
`
export const ContenedorBusquedaStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 5px;
  align-items: center;
  align-self: flex-end;

`
export const InputStyle = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 30px;
  border: none;
  text-indent: 30px;
  text-align: left;
  box-shadow: 1px 2px 3px 1px #ccc;
  line-height: 5;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  outline: none;
`
export const IconoStyle = styled.i`
  padding: 5px;
  position: relative;
  display: grid;
  place-items: center;
  ${props => props.iconoSearch && iconoSearch}
  ${props => props.iconoBack && iconoBack}
  ${props => props.iconoRemove && iconoRemove}
`
const iconoSearch = css`
  position: absolute;
  left: 20px;
`

export const BotonLink = styled(Link)`
  border: 2px solid #ccc;
  border-radius: 20px;
  width: 80%;
  font-size: 20px;
  color: #000;
`
export const CantidadCarritoStyle = styled.span`
  font-size: 12px;
  position: ${props => props.position || null};
  bottom:5px;
  font-weight: 700;
  z-index: 2;
  top: 0;
  right: 0;
  color: red;
  border: ${props => props.border || null};
  border-radius: 50%;
  width: ${props => props.width || null};
  height: ${props => props.height || null};
  display: grid;
  place-items: center;
  background-color: ${props => props.bColor || null};
`

// usuario
export const UsuarioStyle = styled.div`
  width: 100%;
  padding:10px 0;
  background-color: #000;
  display: grid;
  place-items: center;
  color: #fff;
`
export const TituloUsuarioStyle = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
  font-family: 'Montserrat', sans-serif;
`

// opciones articulos
export const OpcionesArticulosStyle = styled.div`
  height: 250px;
  display: grid;
  overflow-x: scroll;
  overflow-y: hidden;
  grid-template-columns:repeat(4, auto);
  place-items: center;
  background-color: #ddd;
  column-gap:20px;
  padding: 0 20px;

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
`
export const ContenedorOpcionesArticulosStyle = styled(Link)`
  display: grid;
  place-items: center;
  gap: 5px;
  font-family: 'Montserrat', sans-serif;
  width:100px;
  text-decoration: none;
  color:#000;
`
export const ParrafoOpcionesArticulos = styled.p`
  font-size: 18px;
  text-align: center;
  text-transform: capitalize;
`
export const BotonStyle = styled.button`
  background-color: ${prop => prop.bgColor || null};
  border-radius: ${props => props.bRadius || null};
  border: 1px solid #ff9500;
  background-color: yellow;
  padding: ${props => props.padding || "0"};
  text-decoration: none;
  color:#ff9500;
  font-family: 'Montserrat', sans-serif;
  font-size:18px;
  ${props => props.botonVerMasDescripcion && botonVerMasDescripcion}
  ${props => props.botonesCarritoStyle && botonesCarritoStyle}
  ${props => props.botonIconoRemove && botonIconoRemove}
  width: ${props => props.width || null};
  margin-top: ${props => props.marginTop || null};

  &:hover {
    cursor: pointer;
  }
`
export const BotonConLinkStyle = styled(Link)`
  background-color: ${prop => prop.bgColor || null};
  border-radius: ${props => props.bRadius || null};
  border: 1px solid #ff9500;
  background-color: yellow;
  padding: ${props => props.padding || "0"};
  text-decoration: none;
  color:#ff9500;
  font-family: 'Montserrat', sans-serif;
  font-size:18px;
  ${props => props.botonCarritoLink && botonCarritoLink}
`
const botonVerMasDescripcion = css`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: none;
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
export const ContenedorBotonesStyle = styled.div`
  display: grid;
  grid-template-columns: 110px 110px;
  column-gap: 10px;
  padding: 10px 0;
  ${props => props.contenedorCarritoStyle && contenedorCarritoStyle}
  ${props => props.redesSociales && contenedorRedesSocialesStyle}
`
const contenedorCarritoStyle = css`
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
`;
// articulos conjuntos 
export const ContenedorArticulosConjuntoStyle = styled.main`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  font-family: 'Montserrat', sans-serif;
  text-align:center;
  padding: 20px 0;
  width: 100%;
  ${props => props.position || null}
`
export const InicioTituloStyle = styled.h2`
  padding: 10px ;
  width:auto;
  font-size: 25px;
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
export const ArticulosConjuntoStyle = styled.article`
  width: 90%;
  padding: 10px 0;
  display: grid;
  place-items: center;
  border-radius: 5px;
  height: ${props => props.height || "auto"};
  box-shadow: 1px -1px  5px 2px #ccc;
  position: ${props => props.position || "relative"};
  animation: ${showArticulosConjuntoStyle} 1s ease-in-out;
  ${props => props.pagarArticulosCarrito && pagarArticulosCarrito}
`
const pagarArticulosCarrito = css`
  display: grid;
  grid-template-columns: auto auto;
  width:80%;
  padding: 20px;
`
export const ArticulosTituloStyle = styled.h3`
  font-size: 20px;
  z-index: 2;
  text-transform: capitalize;
`
export const ArticulosImagenStyle = styled.img`
  width:100% ;
  height:200px;
  object-fit: contain;
  position: ${props => props.position || null};
  ${props => props.imagenDeCarga && imagenDeCarga}
  ${props => props.imagenDescripcion && imagenDescripcion}
  ${props => props.imagenDeCarrito && imagenDeCarrito}
  ${props => props.imagenDeCarritoNoArticulos && imagenDeCarritoNoArticulos}
  ${props => props.imagenDeRutaNoEncontrada && imagenDeRutaNoEncontrada}
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
`
const imagenDeCarrito = css`
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: absolute;
  left: 10px;
  top:10px;
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
`
export const CarritoArticulo = styled.article`
  position: absolute;
  top: 0;
  padding: 10px;
  left: 70px;
  display: grid;
  text-align: left;
`
export const DescripcionArticuloStyle = styled.p`
  font-size: 18px;
  padding: 20px;
  background-color:#ff9500;
  height: ${props => props.verMasDescripcion ? "auto" : "200px"};
  overflow: hidden;
  white-space: pre-line;
  text-overflow: ellipsis;
  ${props => props.verMasDescripcion && verMasDescripcion}
`
const verMasDescripcion = css`
  background-color: #fbff00;
  transition: 2s ease-in-out;
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
  font-size: 18px;
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
  grid-template-columns: auto auto;
  height: 50px;
  padding: 0 10px ;
`
export const DescuentoDescripcionStyle = styled.span`
  font-size: 20px;
  text-align: left;
  color: #ff9500;
` 
export const PrecioArticuloStyle = styled.span`
  font-size: 18px;
  text-decoration: line-through;
  color: rgba(255, 0, 0, 0.89);
  ${props => props.precioConDescuento && precioConDescuento}
`
const precioConDescuento = css`
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  color:#000;
  text-align: left;
`

// pie de pagina

export const ContenedorPieDePaginaStyle = styled.footer`
  height: 250px;
  background-color: #ddd;
  padding: 20px;
`
const contenedorRedesSocialesStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`
export const LinkRedes = styled.a`
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
`
export const Text = styled.p`
  font-size: 18px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  text-transform: capitalize;
  font-weight: 200;
  ${props => props.textoCarrito && textoCarrito}
  text-align:${props => props.tAlign || null};
`
const textoCarrito = css`
  font-weight: 400;
  color: #000;
  padding: ${props => props.padding || null};
  align-self: flex-start;
  font-weight: 200;
  font-size: 15px;
  width: 100%;
`