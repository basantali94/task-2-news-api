const request = require("request");
const url =
  "http://newsapi.org/v2/top-headlines?country=eg&apiKey=901399229e764d5ea1904145fbe28287";
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));
app.set("view engine", "hbs");
const viewspath = path.join(__dirname, "../tempates/views");
app.set("views", viewspath);

request({ url, json: true }, (error, response) => {
  //console.log(error)
  //console.log(response.body.articles[0].title)
  const news = response.body.articles;
  app.get("", (req, res) => {
    res.render("index", { news: news });
  });
  //console.log(news[0].description)
});

const hbs = require("hbs");
const partialsPath = path.join(__dirname, "../tempates/partials");
hbs.registerPartials(partialsPath);

app.listen(port, () => console.log("Listening on server 3000"));
