import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Box from "@mui/material/Box";

const App = () => {
  return (
    <>
      <Box mt="120px">
        <NavBar />
        <HomePage />
      </Box>
    </>
  );
};

export default App;
