import React, { createContext } from "react";

export const productContext = createContext();
const ProductContextProvider = () => {
  return <productContext.Provider></productContext.Provider>;
};

export default ProductContextProvider;
