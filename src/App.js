import React from "react";

import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Box from "@mui/material/Box";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import ProductList from "./Components/Products/ProductList/ProductList";
import ProductCard from "./Components/Products/ProductCard/ProductCard";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import ProductContextProvider from "./context/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <Box mt="110px">
        <NavBar />
        {/* <EditProduct /> */}
        <AddProduct />
        {/* <br /> */}
        {/* <HomePage /> */}
        <ProductList />
        {/* <ProductCard /> */}
        <Footer />
      </Box>
    </ProductContextProvider>
  );
};

export default App;
