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
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
