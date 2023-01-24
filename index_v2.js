const PORT = 999;
const axios = require("axios");

const express = require("express");
const app = express();
const url = "https://krakenfiles.com/view/HoKlPPbQA8/file.html";
// get the html from the url

axios(url) // axios returns a promise
  .then((response) => {
    const html = response.data; // html
    let musicLink = html
      .split("\n")
      .filter((line) => line.includes("m4a:"))[0]
      .trim()
      .substring(6)
      .replace("'", "");
    musicLink = "https:" + musicLink;
    console.log(musicLink);
  })
  .catch(console.error);
// express comes with use, listen, get, etc.
// to listen to a port, we use app.listen
app.listen(PORT, () => {
  console.log(`Server Running & Listening on port ${PORT}`);
});
