import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";

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
    <Box className="body">
      <Grid
        className="bg1"
        mx="auto"
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",

          height: "85vh",
          width: "60vw",
          // bgcolor: "rgb(3, 117, 117)",
        }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            mt: "20px",
          }}>
          <Grid item xs={4} sm={5} className="text1">
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
          <Grid item xs={4} sm={5} className="text1">
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
          <Grid item xs={4} sm={5} className="text1">
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
          <Grid item xs={4} sm={5} className="text1">
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
          <Grid item xs={4} sm={5} className="text1">
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
          <Grid item xs={4} sm={5} className="text1">
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
            height: "46vh",
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
        <Grid
          sx={{
            mx: "auto",
            width: "50vw",
            height: "30vh",
          }}>
          <Grid className="function1">
            <Grid>
              <AccessTimeIcon color="action" sx={{ fontSize: 40 }} />

              <h4>Нас знают с 1998 года</h4>
              <span>
                поэтому большинство клиентов приезжают из других городов.
              </span>
            </Grid>
            <Grid>
              <UpgradeIcon color="action" sx={{ fontSize: 40 }} />

              <h4>Более 1000 товаров</h4>
              <span>
                При заказе на сумму более 1500 сом доставка осуществляется по
                всему Бишкеку бесплатно
              </span>
            </Grid>
            <Grid>
              <ReduceCapacityIcon color="action" sx={{ fontSize: 40 }} />

              <h4>Более 100 клиник с нами</h4>
              <span>
                Наш опыт и возможности позволяют оснастить ваш кабинет с нуля,
                за несколько часов
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HomePage;
