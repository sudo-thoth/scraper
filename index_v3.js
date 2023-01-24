const axios = require("axios-observable").Axios;
const url = "https://krakenfiles.com/view/HoKlPPbQA8/file.html";
// get the html from the url
axios.get(url).subscribe(
  (response) => {
    const html = response.data; // html
    let musicLink = html
      .split("\n")
      .filter((line) => line.includes("m4a:"))[0]
      .trim()
      .substring(6)
      .replace("'", "");
    musicLink = "https:" + musicLink;
    console.log(musicLink);
  },
  (error) => {
    console.log(error);
  }
);
