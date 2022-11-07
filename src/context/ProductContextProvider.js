import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation } from "react-router-dom";

export const productContext = createContext();

const API = "http://localhost:8000/dentalProducts";

const INIT_STATE = {
  product: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        product: action.payload.data,
      };
    default:
      return prevState;
  }
}

const ProductContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();

  // create
  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
      readProduct();
    } catch (error) {
      return error;
    }
  }
  //read
  async function readProduct() {
    const res = await axios(`${API}${location.search}`);
    dispatch({
      type: "GET_PRODUCT",
      payload: res,
    });
  }
  // readProduct();

  let cloud = {
    addProduct,
    readProduct,
    productsArr: state.product,
  };
  return (
    <productContext.Provider value={cloud}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
