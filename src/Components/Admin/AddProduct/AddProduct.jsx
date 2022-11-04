import { Button, Paper, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../../../context/ProductContextProvider";
import "./AddProduct.css";

const AddProduct = () => {
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
      <h2 id="add-title">Добавление товара</h2>
      <Paper
        sx={{ padding: "30px", mx: "auto", width: "60%", bgcolor: "#818987ca" }}
        elevation={9}>
        <form id="form-add">
          <TextField
            className="outlined-basic"
            label="Категория"
            variant="outlined"
          />
          <TextField
            className="outlined-basic"
            label="Название"
            variant="outlined"
          />
          <TextField
            className="outlined-basic"
            label="Модель"
            variant="outlined"
          />
          <TextField
            className="outlined-basic"
            label="Описание"
            variant="outlined"
          />
          <TextField
            className="outlined-basic"
            label="Цвет"
            variant="outlined"
          />
          <TextField
            type="number"
            className="outlined-basic"
            label="Цена"
            variant="outlined"
          />
          <TextField
            className="outlined-basic"
            label="Фото 1"
            variant="outlined"
          />
          <TextField
            className="outlined-basic"
            label="Фото 2"
            variant="outlined"
          />
          <TextField
            className="outlined-basic"
            label="Фото 3"
            variant="outlined"
          />
          <Button
            sx={{ my: "30px", mx: "auto", width: "40%" }}
            variant="contained"
            type="submit">
            Добавить
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default AddProduct;
