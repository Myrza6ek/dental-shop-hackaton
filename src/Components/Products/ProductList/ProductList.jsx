import { Filter } from "@mui/icons-material";
import { Grid, Pagination, Typography } from "@mui/material";
import React from "react";

const ProductList = () => {
  return (
    <>
      List
      <Grid sx={{ width: "40%" }} ml="40px" my="20px">
        <Typography variant="h4">Filter</Typography>
        {/* <Filter
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
        /> */}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "90%" }}
        mx="auto"
        my="40px">
        <Grid xs={3.5} item={true} mb={7}>
          {/* <ProductCard /> */}
        </Grid>
        {/* {productsArr
          ? productsArr.map(item => (
            ))
          : null} */}
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
    </>
  );
};

export default ProductList;
