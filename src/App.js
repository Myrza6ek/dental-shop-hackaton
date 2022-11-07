import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Box from "@mui/material/Box";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import ProductList from "./Components/Products/ProductList/ProductList";
import ProductCard from "./Components/Products/ProductCard/ProductCard";

const App = () => {
  return (
    <>
      <Box mt="110px">
        <NavBar />
        {/* <EditProduct /> */}
        {/* <AddProduct /> */}
        {/* <br /> */}
        {/* <HomePage /> */}
        {/* <ProductList /> */}
        <ProductCard />
      </Box>
    </>
  );
};

export default App;
