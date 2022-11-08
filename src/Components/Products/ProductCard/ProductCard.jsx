

import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import { productContext } from "../../../context/ProductContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductCard = ({ obj }) => {
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);
  console.log(obj);

  useEffect(() => {
    readOneProduct(obj.id);
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ maxWidth: 355, mx: "auto" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="380"
          image={obj.img1}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h7"
            color="text.secondary"
            component="div">
            {obj.subCategory}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {obj.title}
          </Typography>

          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          <Typography gutterBottom variant="h4" component="div">
            {obj.price}
          </Typography>
        </CardContent>

        <Card>
          <CardActions>
            <Button
              variant="contained"
              // color="warning"
              sx={{ background: "linear-gradient(60deg, #077275 0, #69c5b1)" }}
              // sx={{ marginLeft: "20px" }}
              // onClick={() => addProductToBasket(productDetails)}
            >
              <AddShoppingCartIcon />
            </Button>

            <Link to={`/details/${obj.id}`}>
              <Button size="small">Подробнее</Button>
            </Link>
          </CardActions>
          <CardActions>
            <Button
              variant="outlined"
              color="warning"
              onClick={() => navigate(`/edit/${obj.id}`)}>
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteProduct(obj.id)}>
              delete
            </Button>
          </CardActions>
        </Card>
      </Card>
    </>
  );
};

export default ProductCard;
