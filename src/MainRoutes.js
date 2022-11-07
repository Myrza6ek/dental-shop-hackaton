import React from "react";
import Footer from "./Components/Footer/Footer";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
};

export default MainRoutes;
