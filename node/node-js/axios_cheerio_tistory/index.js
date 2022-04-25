const axios = require("axios");
const cheerio = require('cheerio');

axios.get("https://www.tistory.com/category/life").then(response => {
    const htmlString = response.data;
    // const $ = cheerio.load(htmlString);
    // // document.querySelector("h1");
    // const h1 = $('h1').text();  // h1에 할당된 텍스트 획득
    // const p = $('p').text();
    // const href = $('a').attr('href');
    // console.log(h1);    
    // console.log(p);
    console.log(htmlString);
});