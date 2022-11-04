import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Box from "@mui/material/Box";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";

const App = () => {
  return (
    <>
      <Box mt="120px">
        <NavBar />
        <AddProduct />
        <br />
        <HomePage />
      </Box>
    </>
  );
};

export default App;
