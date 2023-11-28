import { nanoid } from "nanoid";
//camisas
import camisaVerde from "../assets/imagenes/camisas/camisa_verde.webp";
import camisaAzul from "../assets/imagenes/camisas/camisa_azul.jpg";
import camisaNegra from "../assets/imagenes/camisas/camisa_negra.jpg";
import camisaRoja from "../assets/imagenes/camisas/camisa_roja.jpg";
import camisaCafe from "../assets/imagenes/camisas/camisa_cafe.jpg";
// pantalones
import pantalonCafe from "../assets/imagenes/pantalones/pantalon_cafe.webp";
import pantalonNegro from "../assets/imagenes/pantalones/pantalon_negro.jpg";
import pantalonRojo from "../assets/imagenes/pantalones/pantalon_rojo.jpg";
import pantalonVerde from "../assets/imagenes/pantalones/pantalon_verde.jpg";
import pantalonAzul from "../assets/imagenes/pantalones/pantalon_azul.jpg";
// zapatos
import zapatoCafe from "../assets/imagenes/zapatos/zapato_cafe.jpg";
import zapatoVerde from "../assets/imagenes/zapatos/zapato_verde.jpg";
import zapatoAzul from "../assets/imagenes/zapatos/zapato_azul.jpg";
import zapatoRojo from "../assets/imagenes/zapatos/zapato_rojo.jpg";
import zapatoNegro    from "../assets/imagenes/zapatos/zapato_negra.jpg";

//consolas
import xbox360 from "../assets/imagenes/consolas/xbox_360.jpg"
import xboxSeriesX from "../assets/imagenes/consolas/Xbox-Series-X.jpg"
import playStation4 from "../assets/imagenes/consolas/play_station_4.webp"
import wii from "../assets/imagenes/consolas/wii.jpg"
import nintendoSwitch from "../assets/imagenes/consolas/nintendo_switch.jpg"

// alcohol
import bicardi from "../assets/imagenes/alcohol/bicardi.jpg";
import gordons from "../assets/imagenes/alcohol/gordons.jpg";
import brandi from "../assets/imagenes/alcohol/brandi.jpg";
import zedda_piras from "../assets/imagenes/alcohol/zedda_piras.jpg";
import label from "../assets/imagenes/alcohol/label.jpg";

// perfumes
import paris from "../assets/imagenes/perfumes/paris.jpg"
import clive from "../assets/imagenes/perfumes/clive.jpg"
import roger from "../assets/imagenes/perfumes/roger.jpg"
import tresor from "../assets/imagenes/perfumes/tresor.jpg"
import versace from "../assets/imagenes/perfumes/versace.jpg"

// relojes
import jecob from "../assets/imagenes/relojes/jacob&co.jpg"
import guess from "../assets/imagenes/relojes/guess.jpg"
import gucci from "../assets/imagenes/relojes/reloj_gucci.jpg"
import casio from "../assets/imagenes/relojes/casio.jpg"
import digital from "../assets/imagenes/relojes/digital.jpg"


interface Camisa {
  id: string;
  titulo: string;
  precio:number;
  imagen:string; 
  descuento?:number;
  descripcion:string;
  cantidad:number;
}
interface Pantalon {
  id: string;
  titulo: string;
  precio:number;
  imagen:string;
  descuento?:number;
  descripcion:string ;
  cantidad:number;
}
interface Consolas {
  id: string;
  titulo: string;
  precio:number;
  imagen:string;
  descuento?:number;
  descripcion: string ;
  cantidad:number;
}
interface Zapatos {
  id: string;
  titulo: string;
  precio:number;
  imagen:string;
  descuento?:number;
  descripcion: string ;
  cantidad:number;
}
interface Alcohol {
  id: string;
  titulo: string;
  precio:number;
  imagen:string;
  descuento?:number;
  descripcion:string ;
  cantidad:number;
}
interface Relojes {
  id: string;
  titulo: string;
  precio:number;
  imagen:string;
  descuento?:number;
  descripcion:string;
  cantidad:number;
}
interface Perfumes {
  id: string;
  titulo: string;
  precio:number;
  imagen:string;
  descuento?:number;
  descripcion:string ;
  cantidad:number;
}
interface Articulos {
  camisas: Camisa[],
  pantalon: Pantalon[],
  zapatos:Zapatos[],
  consolas: Consolas[],
  alcohol: Alcohol[],
  perfumes: Perfumes[],
  relojes:Relojes[],
}

export const articulos: Articulos = {
  camisas: [
    {
      id:nanoid(),
      titulo:"camisa verde",
      cantidad:1,
      precio: 100000,
      imagen: camisaVerde,
      descuento: 10,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"camisa roja",
      precio:50000,
      cantidad:1,
      imagen:camisaRoja,
      descuento:5,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"camisa azul",
      precio:70000,
      imagen:camisaAzul,
      descuento:15,
      cantidad:1,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"camisa negra",
      precio: 120000,
      imagen: camisaNegra,
      descuento: 7,
      cantidad:1,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"camisa cafe",
      precio: 60000,
      imagen:camisaCafe,
      descuento:40,
      cantidad:1,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    }
  ],
  pantalon: [
    {
      id:nanoid(),
      titulo:"pantalon verde",
      precio: 20000,
      imagen: pantalonVerde,
      descuento: 30,
      cantidad:1,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"pantalon rojo",
      precio:80000,
      imagen: pantalonRojo,
      descuento:7,
      cantidad:1,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"pantalon azul",
      precio:200000,
      imagen: pantalonAzul,
      descuento:30,
      cantidad:1,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"pantalon negro",
      precio: 150000,
      imagen: pantalonNegro,
      descuento: 2,
      cantidad:1,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"pantalon cafe",
      precio: 20000,
      cantidad:1,
      imagen: pantalonCafe,
      descuento:3,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    }
  ],
  zapatos : [
    {
      cantidad:1,
      id:nanoid(),
      titulo:"zapatos verde",
      precio: 80000,
      imagen: zapatoVerde,
      descuento: 20,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      cantidad:1,
      titulo:"zapato rojo",
      precio:70000,
      imagen: zapatoRojo,
      descuento:7,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      cantidad:1,
      titulo:"zapatos azul",
      precio:120000,
      imagen: zapatoAzul,
      descuento:30,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      cantidad:1,
      titulo:"zapatos negro",
      precio: 250000,
      imagen: zapatoNegro,
      descuento: 30,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"zapatos cafe",
      cantidad:1,
      precio: 40000,
      imagen: zapatoCafe,
      descuento:0,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    }
  ],
  consolas: [
    {
      id:nanoid(),
      titulo:"xbox 360",
      precio: 1000000,
      imagen: xbox360,
      descuento: 40,
      cantidad:1,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"play Station 4",
      precio:2500000,
      imagen: playStation4,
      cantidad:1,
      descuento:25,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"wii",
      precio:800000,
      cantidad:1,
      imagen: wii,
      descuento:60,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`, 
    },
    {
      id:nanoid(),
      titulo:"nintendo switch",
      precio: 1600000,
      cantidad:1,
      imagen: nintendoSwitch,
      descuento: 60,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"xbox series x",
      precio: 5000000,
      cantidad:1,
      imagen: xboxSeriesX,
      descuento:13,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    }
  ],
  alcohol: [
    {
      id:nanoid(),
      titulo:"bicardi",
      cantidad:1,
      precio: 8000000,
      imagen: bicardi,
      descuento: 10,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,

    },
    {
      id:nanoid(),
      titulo:"label",
      cantidad:1,
      precio:10000000,
      imagen: label,
      descuento:5,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,

    },
    {
      id:nanoid(),
      titulo:"gordons",
      precio:7000000,
      cantidad:1,
      imagen: gordons,
      descuento:2,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,

    },
    {
      id:nanoid(),
      titulo:"brandi",
      cantidad:1,
      precio: 700000,
      imagen: brandi,
      descuento: 25,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,

    },
    {
      id:nanoid(),
      titulo:"zedda piras",
      cantidad:1,
      precio: 5000000,
      imagen: zedda_piras,
      descuento:17,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,

    }
  ],
  perfumes: [
    {
      id:nanoid(),
      titulo:"versace",
      precio: 1200000,
      cantidad:1,
      imagen: versace,
      descuento: 5,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"paris",
      precio:250000,
      cantidad:1,
      imagen: paris,
      descuento:0,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"roger",
      precio:800000,
      imagen: roger,
      cantidad:1,
      descuento:8,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"clive",
      precio: 1800000,
      imagen: clive,
      cantidad:1,
      descuento: 12,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"tresor",
      precio: 30000000,
      imagen: tresor,
      cantidad:1,
      descuento:6,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    } 
  ],
  relojes: [
    {
      id:nanoid(),
      titulo:"reloj digital",
      precio: 60000,
      cantidad:1,
      imagen: digital,
      descuento: 80,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"reloj guess",
      precio:250000,
      imagen: guess,
      cantidad:1,
      descuento:15,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"reloj gucci",
      precio:800000,
      imagen: gucci,
      cantidad:1,
      descuento:0 ,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"reloj jecob&co",
      precio: 1600000,
      imagen: jecob,
      cantidad:1,
      descuento: 0,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    },
    {
      id:nanoid(),
      titulo:"casio",
      precio: 50000,
      imagen: casio,
      cantidad:1,
      descuento:10,
      descripcion:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet. Hac habitasse platea dictumst vestibulum rhoncus est. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque elit eget gravida cum sociis natoque penatibus. Cursus turpis massa tincidunt dui. Pretium lectus quam id leo in vitae turpis massa. Vitae congue eu consequat ac. Faucibus ornare suspendisse sed nisi. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Aenean vel elit scelerisque mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Facilisi etiam dignissim diam quis enim. Nec ullamcorper sit amet risus nullam eget.

      Egestas dui id ornare arcu. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales neque sodales ut. Sed egestas egestas fringilla phasellus. Fames ac turpis egestas maecenas pharetra convallis posuere. Aenean euismod elementum nisi quis. Libero id faucibus nisl tincidunt eget. Semper viverra nam libero justo laoreet sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Eget felis eget nunc lobortis. Sed arcu non odio euismod lacinia at. Malesuada nunc vel risus commodo viverra maecenas.

      Dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae. Dignissim cras tincidunt lobortis feugiat vivamus. Aenean sed adipiscing diam donec. Tincidunt praesent semper feugiat nibh. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum at varius vel pharetra vel. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Auctor eu augue ut lectus. Porta nibh venenatis cras sed felis eget velit aliquet. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed libero enim sed faucibus turpis in. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nec tincidunt praesent semper feugiat.

      Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur lorem. Est ante in nibh mauris cursus mattis molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Massa sapien faucibus et molestie. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Sagittis purus sit amet volutpat consequat mauris. Feugiat nisl pretium fusce id velit. Volutpat consequat mauris nunc congue nisi vitae. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra convallis posuere morbi leo urna molestie. Et tortor at risus viverra adipiscing at in tellus integer. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.

      Dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi non arcu risus quis varius quam quisque. Turpis nunc eget lorem dolor sed. Non quam lacus suspendisse faucibus interdum posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut pharetra sit amet aliquam id. Dignissim enim sit amet venenatis. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo integer malesuada nunc vel. Iaculis eu non diam phasellus vestibulum lorem sed risus.`,
    }
  ]
}