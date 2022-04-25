const axios = require("axios");

let article = {};
const crawler = (pageNumber) => {
    return axios
    .get(`https://api.brunch.co.kr/v1/search/article?q=IT&page=${pageNumber}&pageSize=20&highlighter=y&escape=y&sortBy=accu`)
    .then(response => {
        const data = response.data;
        article[pageNumber] = data.data.list;
        const nextNumber = pageNumber + 1;
        console.log("current page number:", pageNumber);
        if (nextNumber < 10) {
            crawler(nextNumber);
            return;
        }
        console.log(article);
    });
}

crawler(1);