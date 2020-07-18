const request = require('request');

request({
    url: 'https://www.google.com/',
    method: 'GET',
}, (error, response, body) => console.log(body));
/**
 * 크롤링이란 프로그램이 웹 사이트를 정기적으로 돌며 정보를 추출하는 기술을 말한다.
 * 웹에서 데이터를 받아오려면 request module을 사용하는 것이 좋다.
 */
