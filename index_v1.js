const PORT = 999;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const url = "https://www.theguardian.com/uk";
// get the html from the url
axios(url) // axios returns a promise
  .then((response) => {
    const html = response.data; // html
    const $ = cheerio.load(html); // cheerio loads the html
    const articles = [];
    $(".fc-item__title").each(function () {
      const title = $(this).text();
      const url = $(this).find("a").attr("href");
      articles.push({
        title,
        url,
      });
    });
    console.log(articles);
  })
  .catch(console.error);
// express comes with use, listen, get, etc.
// to listen to a port, we use app.listen
app.listen(PORT, () => {
  console.log(`Server Running & Listening on port ${PORT}`);
});
