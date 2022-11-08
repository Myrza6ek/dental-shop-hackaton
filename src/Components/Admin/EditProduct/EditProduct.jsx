import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../../../context/ProductContextProvider";
import "./EditProduct.css";

const EditProduct = () => {
  // const { addProduct } = useContext(productContext);
  // const [category, setCategory] = useState("");
  // const [title, setTitle] = useState("");
  // const [model, setModel] = useState("");
  // const [description, setDescription] = useState("");
  // const [color, setColor] = useState("");
  // const [price, setPrice] = useState(0);
  // const [img1, setImg1] = useState("");
  // const [img2, setImg2] = useState("");
  // const [img3, setImg3] = useState("");

  // function handleAdd(e) {
  //   e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
  //   if (
  //     !category.trim() ||
  //     !title.trim() ||
  //     !model.trim() ||
  //     !description.trim() ||
  //     !color.trim() ||
  //     !price.trim() ||
  //     !img1.trim() ||
  //     !img2.trim() ||
  //     !img3.trim()
  //   ) {
  //     alert("Заполните все поля!");
  //     return;
  //   }

  //   let obj = {
  //     category,
  //     title,
  //     model,
  //     description,
  //     color,
  //     price: +price,
  //     img1,
  //     img2,
  //     img3,
  //   };
  //   addProduct(obj);
  //   setCategory("");
  //   setTitle("");
  //   setModel("");
  //   setDescription("");
  //   setColor("");
  //   setPrice(0);
  //   setImg1("");
  //   setImg2("");
  //   setImg3("");
  // }
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          mx: "auto",
          width: "70%",
          bgcolor: "#818987ca",
        }}
        elevation={9}>
        <Typography id="add-title">Редактирование</Typography>
        <Grid id="form-add">
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Категория"
            variant="outlined"
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Название"
            variant="outlined"
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Подкатегория"
            variant="outlined"
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Описание"
            variant="outlined"
          />

          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            type="number"
            label="Цена"
            variant="outlined"
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Фото 1"
            variant="outlined"
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Фото 2"
            variant="outlined"
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Фото 3"
            variant="outlined"
          />
          <Button
            sx={{ my: "30px", mx: "auto", width: "40%" }}
            variant="contained"
            type="submit">
            Сохранить
          </Button>
        </Grid>
      </Paper>
    </>
  );
};

export default EditProduct;
