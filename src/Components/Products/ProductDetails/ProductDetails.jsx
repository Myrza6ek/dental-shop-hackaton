import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { productContext } from "../../../context/ProductContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { AddShoppingCart } from "@mui/icons-material";

const ProductDetails = () => {
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);
  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  const navigate = useNavigate();
  return (
    <>
      details
      {productDetails ? (
        <Container sx={{ marginTop: "40px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper elevation={3} sx={{ padding: "10px", marginTop: "40px" }}>
                <Typography variant="h4">
                  {productDetails.title}{" "}
                  <PhoneIphoneIcon sx={{ fontSize: "30px" }} />
                </Typography>
                <Typography variant="h5">{productDetails.model}</Typography>
                <hr />
                <Typography sx={{ marginTop: "30px" }}>
                  {productDetails.description}
                </Typography>
                <Alert
                  icon={<AttachMoneyIcon />}
                  sx={{
                    fontSize: "25px",
                    fontWeight: 700,
                    mt: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  Цена: {productDetails.price} сом
                  <Button variant="contained" sx={{ marginLeft: "20px" }}>
                    Купить
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ marginLeft: "20px" }}
                    // onClick={() => addProductToBasket(productDetails)}
                  >
                    <AddShoppingCart />
                  </Button>
                </Alert>
                <Box
                  sx={{
                    mt: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ width: "48%" }}
                    onClick={() => deleteProduct(productDetails.id)}>
                    Delete
                  </Button>
                  {/* <Link
                    to={`/edit/${productDetails.id}`}
                    style={{ width: "50%" }}
                  > */}
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ width: "48%" }}
                    onClick={() => navigate(`/edit/${productDetails.id}`)}>
                    Edit
                  </Button>
                  {/* </Link> */}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default ProductDetails;
