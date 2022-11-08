import React from "react";

import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Box from "@mui/material/Box";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Box mt="120px">
        <NavBar />
        {/* <AddProduct /> */}
        {/* <br /> */}
        <HomePage />
        <Footer />
      </Box>
    </>
  );
};

export default App;
