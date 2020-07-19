const request = require('request');
const iconv = require('iconv-lite');
const charset = require('charset');

const crawl = callback => queryString => request({
    url: 'https://www.google.com/search',
    encoding: null,
    method: 'GET',
    qs: queryString,
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10,
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const enc = charset(response.headers, body); // response.header를 통해 현재 사이트의 헤더 정보에서 인코딩 정보를 받아온다.
        const decodeResult = iconv.decode(body, enc); // iconv를 이용하여 해당 사이트의 인코딩 방식으로 body를 디코드한다.
        callback(decodeResult);
    } else {
        console.log(`error${response.statusCode}`);
    }
});

module.exports.crawl = crawl;
/**
 * request에 여러 가지 파라미터를 사용하여 홈페이지를 다운로드하기 위해 요청한다.
 * url, method는 해당 사이트(google.com)에 GET 요청을 보내도록 한다.
 * 한글이 깨지는 문제를 해결하기 위해 encoding: null로 설정한다.
 * request에 전달하는 queryString은 크롤러를 이후 사용할 때 인자로 전달되는 값을 이용한다.
 * timeout은 단위가 밀리초이므로, 10000은 10초 이후 응답을 포기한다.
 * followRedirect는 리다이렉션할 경우 사이트 이동을 허요알 것이지 체크하는 항목이면,
 * maxRedirect는 리다이렌션을 최대 몇 번 할지 설정할 수 있도록 한다.
 */
