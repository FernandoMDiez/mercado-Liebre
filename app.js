const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.listen(3070, () => {
  console.log("Servidor levantado");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/home-secundario.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve("./views/register.html"));
});

app.get("/login-fer", (req, res) => {
  res.sendFile(path.resolve("./views/login-fer.html"));
});

app.get("/login-yediz", (req, res) => {
  res.sendFile(path.resolve("./views/login-yediz.html"));
});

app.get("/productCar", (req, res) => {
  res.sendFile(path.resolve("./views/productCar.html"));
});
