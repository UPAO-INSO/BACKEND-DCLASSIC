import {
  PresentacionBebida,
  PresentacionTaper,
  TipoProducto,
} from 'generated/prisma';

export const TipoProductoList = [
  TipoProducto.BEBIDA,
  TipoProducto.ENTRADA,
  TipoProducto.PLATO,
  TipoProducto.TAPER,
];

export const PresentacionBebidaList = [
  PresentacionBebida.CUSQUENA,
  PresentacionBebida.GORDITA,
  PresentacionBebida.HEINEKEN,
  PresentacionBebida.JARRA,
  PresentacionBebida.LITRO,
  PresentacionBebida.LITRO_Y_MEDIO,
  PresentacionBebida.MEDIA_JARRA,
  PresentacionBebida.MEDIO_LITRO,
  PresentacionBebida.PERSONAL,
  PresentacionBebida.PILSEN,
  PresentacionBebida.VASO,
];

export const PresentacionTaperList = [
  PresentacionTaper.CHICO,
  PresentacionTaper.GRANDE,
  PresentacionTaper.MEDIANO,
];
