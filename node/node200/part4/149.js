const request = require('request');

request({
    url: 'https://www.google.com/search',
    method: 'GET',
    qs: { q: '신사역 맛집' },
}, (error, response, body) => console.log(body));

/**
 * http 요청(request)을 보낼 때 파라미터를 같이 보내려면 qs: {}라는 프로퍼티(propoerty)를 사용한다.
 * qs는 쿼리스트링(query string)의 약자로 보인다.
 * url을 만들 때 주소 뒤에 ?,& 등으로 붙이는 것을 쿼리스트링이라고 한다.
 * 구글에서 검색을 할 때는 q라는 이름으로 키워드를 받아서 처리한다.
 */
