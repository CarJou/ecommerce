import React, { createContext, useState } from "react";
export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: 0,
      img: "https://http2.mlstatic.com/D_NQ_NP_774646-MLA43196387330_082020-O.webp",
      title: "Smart TV Tedge Led 50 pulgadas NTV504K LED 4K 50 220V",
      price: "48.999",
    },
    {
      id: 1,
      img: "https://http2.mlstatic.com/D_NQ_NP_892699-MLA46182693815_052021-O.webp",
      title: "Notebook Hp I3 1115g4 8gb 256gb Ssd 14 Full Hd Windows 10",
      price: "69.999",
    },
    {
      id: 2,
      img: "https://http2.mlstatic.com/D_NQ_NP_648486-MLA46041513130_052021-O.webp",
      title: "Microondas Grill Bgh Quick Chef B223ds20 Silver 23l 220v",
      price: "27.999",
    },
    {
      id: 3,
      img: "https://http2.mlstatic.com/D_Q_NP_2X_968399-MLA46552827851_062021-P.webp",
      title: "Bicicleta Mtb Armor Aluminio R29 21 Cambios Freno A Disco Pc",
      price: "31.449",
    },
    {
      id: 4,
      img: "https://http2.mlstatic.com/D_NQ_NP_841327-MLA46951993680_082021-O.webp",
      title: "Impresora Hp Multifuncion 2375 Deskjet Ink Advantage Via Usb",
      price: "9.499",
    },
    {
      id: 5,
      img: "https://http2.mlstatic.com/D_NQ_NP_718066-MLA44163079933_112020-O.webp",
      title: "Auriculares Inalámbricos Soundpeats Trueair 2 Bluetooth 5.2",
      price: "5.085",
    },
    {
      id: 6,
      img: "https://http2.mlstatic.com/D_NQ_NP_905840-MLA46350882401_062021-O.webp",
      title: "Minicomponente Daewoo Dmw-8021 Mp3 Cd Usb Aux Radio 750 W",
      price: "12.950",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
