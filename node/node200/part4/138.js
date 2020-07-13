const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    let pathname = url.parse(request.url);
    pathname = url.parse(request.url).pathname;

    if (pathname === '/') {
        fs.readFile(`${__dirname}/138_index.html`, (error, data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
            console.log(url.parse(request.url));
        });
    } else if (pathname === '/example') {
        fs.readFile(`${__dirname}/136_example.html`, (error, data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
            console.log(url.parse(request.url));
        });
    }
}).listen(50000, () => {
    console.log('서버 동작 중, http://127.0.0.1:50000');
});
/**
 * request 객체는 사용자가 서버에 보낸 요청에 관한 정보들이 들어 있다. 
 * request 객체에 들어 있는 사용자의 요청에 대한 세부 사항을 이용해 사용자에게 어떤 정보를 요청했는지 판단해서 필요한 정보를 제공할 수 있다.
 
 * request 객체로 처리할 수 있는 여러 가지 기능 중 fs 모듈을 활용한 방식에다 url 정보만 확인하여 구별된 페이지를 제공한다.

 * request 객체를 통해 요청 방식(GET, POST) 확인 및 페이지를 적절하게 구분하여 제공할 수 있다.
 * request 이벤트가 발생할 때 이벤트 리스너의 첫 번째 매개변수에는 request 객체가 들어간다.
 * request 객체의 속성
   * url: 요청한 URL 정보
   * headers: 요청 메시지 헤더 정보
   * method: 클라이언트의 요청 방식
   * httpVersion: HTTP 프로토콜의 버전
 */
