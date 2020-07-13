const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    const get = url.parse(request.url, true).query;

    if (request.method === 'GET') {
        response.writeHead(200, { 'Context-Type': 'text/html' });
        response.end(`<h1>${JSON.stringify(get)}</h1>`);
        console.log(`${request.method}방식의 요청`);
    } else if (request.method === 'POST') {
        console.log(`${request.method}방식의 요청`);
    }
}).listen(50000, () => {
    console.log('서버 동작 중, http://127.0.0.1:50000');
});
/**
 * 웹은 http라는 프로토콜을 이용해서 통신한다. 
 * http 프로토콜에서 메시지를 요청하는 방법(method)은 여러 가지가 있지만 가장 많이 사용하는 것이 GET과 POST이다.
  
 * GET과 POST 요청의 가장 큰 차이점은 GET은 그냥 요청하고 POST는 내용을 넣어서 요청한다.
 * GET은 네이버에서 키워드를 입력해 검색하는 것이고, POST는 회원가입을 할 때 id, 인적사항 등을 함께 보낼때 사용하는 방식이다.
 
 * 서버에서 사용자의 요청을 처리할 때 이 둘을 구분해서 처리해야 하는 경우가 많다.
 * method 속성을 사용하여 GET 요청인지 POST 요청인지 구분해보고, 
 * 더 나아가 사용자가 요청을 할 때 보낸 값들인 매개변수를 추출해 볼 수 있다.
 */
