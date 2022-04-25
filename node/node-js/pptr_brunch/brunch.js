const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.setViewport({
      width: 1440,
      height: 900,
  })
  await page.goto('https://brunch.co.kr/search');
  await page.click("input.txt_search");
  await page.keyboard.type('IT');
  await page.keyboard.press('Enter');
  // Error: Execution context was destroyed, most likely because of a navigation. 를 해결하기 위해서
  await page.waitForNavigation();

  let infiniteScrollInterval = setInterval(async() => {
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    }); // 페이지 안에 Access 하여 명령을 내린다.
  }, 1000)
  
  setTimeout(async () => {
    clearInterval(infiniteScrollInterval);
    console.log('done');
    await browser.close();
  }, 1000 * 10);
})();