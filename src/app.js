const express = require("express");

const path = require("path");

const app = express();

const cors = require("cors");

const Port = process.env.PORT || 3000;

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

//path for html

// const p = path.join(__dirname, "../public");
// console.log(p);

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "../public")));

//routhing
app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("error", { errorMsg: "Oops! page not found" });
});

app.listen(Port, () => {
  console.log("server running on port " + Port);
});
