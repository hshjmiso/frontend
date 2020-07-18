const request = require('request');
const iconv = require('iconv-lite');

request({
    url: 'https://www.google.com/search',
    method: 'GET',
    qs: { q: '신사역 맛집' },
    encoding: null,
}, (error, response, body) => {
    const decodedResult = iconv.decode(body, 'euc-kr');
    console.log(decodedResult);
});
/**
 * 인코딩이 깨지는 문제를 해결하려면 iconv-lite 모듈이 필요하다.
 * iconv-lite는 인코딩을 변경해주는 모듈이다. 
 * 한글이 깨지는 경우에는 인코딩을 'euc-kr'로 변경해주면 해결되는 경우가 많기 때문에 iconv-lite를 이용해 'euc-kr'로 인코딩을 변경한다.
 */
