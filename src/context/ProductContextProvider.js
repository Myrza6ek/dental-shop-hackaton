import React, { createContext } from "react";

export const productContext = createContext();
const ProductContextProvider = ({ children }) => {
  return <productContext.Provider>{children}</productContext.Provider>;
};

export default ProductContextProvider;
