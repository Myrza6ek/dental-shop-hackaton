import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import "./HomePage.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HomePage() {
  return (
    <Box>
      <Grid
        mx="auto"
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",

          height: "80vh",
          width: "60vw",
          bgcolor: "rgb(3, 117, 117)",
        }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            mt: "20px",
          }}>
          <Grid item xs={4} sm={5}>
            <Item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                bgcolor: "#55c2ce",
                color: "white",
              }}>
              <div>
                <h4>Ортодонтия</h4>
                <p>количество товаров</p>
              </div>

              <img
                width="100vw"
                height="100vh"
                src="https://ortholight.ru/upload/iblock/39e/39ec44e9fb7307df908c748e0031903d.jpg"
                alt="ortodontia"
              />
            </Item>
          </Grid>
          <Grid item xs={4} sm={5}>
            <Item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                bgcolor: "#55c2ce",
                color: "white",
              }}>
              <div>
                <h4>Терапия</h4>
                количество товаров
              </div>
              <img
                width="100vw"
                height="100vh"
                src="https://rocadamed.ru/upload/iblock/491/4913f6f023c9ea5dcf0b4f1e3fa53a34.jpg"
                alt="Terapia"
              />
            </Item>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
          <Grid item xs={4} sm={5}>
            <Item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                bgcolor: "#55c2ce",
                color: "white",
              }}>
              <div>
                <h4>Ортопедия</h4>
                количество товаров
              </div>
              <img
                width="100vw"
                height="100vh"
                src="https://el-dent.ru/UserFiles/Image/catalog-img/silikon-dvuhfaznye.jpg"
                alt="ortopedia"
              />
            </Item>
          </Grid>
          <Grid item xs={4} sm={5}>
            <Item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                bgcolor: "#55c2ce",
                color: "white",
              }}>
              <div>
                <h4>Хирургия</h4>
                количество товаров
              </div>
              <img
                width="100vw"
                height="100vh"
                src="https://dental-shop.kg/uploads/products/WhatsApp_Image_2020-11-17_at_12.32.16.jpg"
                alt="hirurgia"
              />
            </Item>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
          <Grid item xs={3} sm={5}>
            <Item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                bgcolor: "#55c2ce",
                color: "white",
              }}>
              <div>
                <h4>Вспомогательные материалы</h4>
                количество товаров
              </div>
              <img
                width="100vw"
                height="100vh"
                src="https://dentalmagazine.ru//wp-content/uploads/2014/08/2_2_opt.jpg"
                alt="vspomogat mater"
              />
            </Item>
          </Grid>
          <Grid item xs={4} sm={5}>
            <Item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                bgcolor: "#55c2ce",
                color: "white",
              }}>
              <div>
                <h4>Оборудывания</h4>
                количество товаров
              </div>
              <img
                width="100vw"
                height="100vh"
                src="https://medmetr.ru/upload/uf/319/319844a099b281171a92dcac101aa33a.jpg"
                alt="oborudyvaniya"
              />
            </Item>
          </Grid>
        </Grid>
      </Grid>

      <Box className="bg" mt="50px" sx={{ mx: "auto", width: "61%" }}>
        <Grid
          mt="60px"
          sx={{
            mx: "auto",
            width: "50vw",
            height: "60vh",
          }}>
          <br />
          <h3>О магазине</h3>
          <h2>Магазин Dental Shop</h2>
          <p>
            Наша цель – придерживаясь бережного и ответственного отношения к
            покупателям делать приобретение стоматологических материалов,
            средств, принадлежностей, инструментов и оборудования выгодным,
            удобным и предсказуемым процессом. Для достижения цели Эджайл Дент
            имеет широкий ассортимент товаров, штат подготовленных сотрудников,
            программы лояльности покупателей, продуманную логистику, развитую
            систему коммуникаций с клиентами, современные технические и
            программные средства для Интернет-торговли. Ассортимент Эджайл Дент
            – это более 1000 наименований популярных товаров: от препаратов для
            профилактики стоматологических заболеваний до материалов и
            оборудования для зуботехнической лаборатории. Наши цены более чем
            компромиссные, а бонусные программы и специальные акции позволяют
            сэкономить еще больше.
          </p>
        </Grid>
        <Grid></Grid>
      </Box>
    </Box>
  );
}

export default HomePage;
