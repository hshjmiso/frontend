const puppeteer = require('puppeteer');
const cheerio = require("cheerio");

(async () => {
  const browser = await puppeteer.launch({
      headless: false // 기본값 true, false로 설정하면, 브라우저가 실행된다.
    });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1440,
    height: 1080
  });
  await page.goto('https://www.tistory.com/category/life');
  const html = await page.content();
  const $ = cheerio.load(html);
  let hrefArray = [];
  $("ul > li > a").each((index, element) => {
    console.log(element);
    const href = $(element).attr('href');
    const title = $(element).find('.inner_desc_tit').text();
    hrefArray.push(href, title);
  });
  console.log(hrefArray);  

  // const mArticleText = $('#mArticle').text();
  // console.log(mArticleText);

  // await page.screenshot({ path: 'example.png' });
  await browser.close();
})();