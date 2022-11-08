import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../../context/ProductContextProvider";
import "./EditProduct.css";

const EditProduct = () => {
  const { productDetails, readOneProduct, editProduct } =
    useContext(productContext);
  const [inpValues, setInpValues] = useState(productDetails);

  const { id } = useParams();
  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  function handleChange(e) {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  }

  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !inpValues.category.trim() ||
      !inpValues.title.trim() ||
      !inpValues.model.trim() ||
      !inpValues.description.trim() ||
      !inpValues.color.trim() ||
      !inpValues.price ||
      !inpValues.img1.trim() ||
      !inpValues.img2.trim() ||
      !inpValues.img3.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    editProduct(id, inpValues);
    navigate("/list");
  }

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
        <form id="form-add" onSubmit={e => handleSave(e)}>
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Категория"
            variant="outlined"
            value={inpValues.category}
            onChange={e => handleChange(e)}
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Название"
            variant="outlined"
            value={inpValues.title}
            onChange={e => handleChange(e)}
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Подкатегория"
            variant="outlined"
            value={inpValues.subCategory}
            onChange={e => handleChange(e)}
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Описание"
            variant="outlined"
            value={inpValues.description}
            onChange={e => handleChange(e)}
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
            value={inpValues.price}
            onChange={e => handleChange(e)}
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Фото 1"
            variant="outlined"
            value={inpValues.img1}
            onChange={e => handleChange(e)}
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Фото 2"
            variant="outlined"
            value={inpValues.img2}
            onChange={e => handleChange(e)}
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Фото 3"
            variant="outlined"
            value={inpValues.img3}
            onChange={e => handleChange(e)}
          />
          <Button
            sx={{ my: "30px", mx: "auto", width: "40%" }}
            variant="contained"
            type="submit">
            Сохранить
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default EditProduct;
