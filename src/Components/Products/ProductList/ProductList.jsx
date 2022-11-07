import { Box, Grid, Pagination, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useContext } from "react";
import { productContext } from "../../../context/ProductContextProvider";
import Filter from "../../Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const { productsArr, readProduct } = useContext(productContext);

  useEffect(() => {
    readProduct();
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          sx={{ width: "auto", bgcolor: "white", borderRadius: "5px" }}
          my="20px">
          <Filter />
          {/* <Filter
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
        /> */}
          {/* <Filter /> */}
        </Grid>

        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            sx={{ width: "100%" }}
            mx="auto"
            my="40px">
            {/* <Grid xs={3.5} item={true} mb={7}>
              <ProductCard />
            </Grid>
            <Grid xs={3.5} item={true} mb={7}>
              <ProductCard />
            </Grid>
            <Grid xs={3.5} item={true} mb={7}>
              <ProductCard />
            </Grid> */}
            {productsArr
              ? productsArr.map(item => (
                  <Grid item={true} xs={3.5} mb={7} key={item.id}>
                    <ProductCard obj={item} />
                  </Grid>
                ))
              : null}
          </Grid>
          <Grid
            sx={{ width: "30%", display: "flex", justifyContent: "center" }}
            mx="auto"
            my="20px">
            <Pagination
              // count={+pageTotalCount}
              color="secondary"
              // page={+page}
              // onChange={(e, value) => setPage(value)}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductList;
