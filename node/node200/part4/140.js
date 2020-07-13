const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    if (request.method === 'GET') {
        fs.readFile(`${__dirname}/140_example_2.html`, (error, data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
            console.log(`${request.method}방식의 요청`);
        });
    } else if (request.method === 'POST') {
        request.on('data', (data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
            console.log(`${request.method}방식의 요청`);
        });
    }
}).listen(50000, () => {
    console.log('서버 동작 중, http://127.0.0.1:50000');
});
/**
 * 사용자가 회원가입이나 로그인 등을 할 때는 POST 요청을 이용해 여러 개의 값을 숨겨서 보낸다.
 
 * 웹 페이지 상에서 입력창에 정보를 기입한 후 전송할 때 GET 방식이나 POST 방식을 사용하게 된다.
 * GET 방식은 form 태그에서 method='get'이라고 넣어 주고, POST 방식은 method='post'라고 입력한다.
 
 * GET 방식은 속도가 빠르다는 장점이 있는 반면 정보를 url에 붙여 서버로 전달하기 때문에 
 * 입력한 정보가 노출된다는 점에서 보안이 POST 방식에 비해 취약하다.
 * 반면 POST 방식은 입력한 정보를 본문 안에 포함하여 서버에 전달하기 때문에 url 상에 노출되지 않아 
 * 보안이 GET 방식보다 우수하다. 그리고 데이터 양이 많고 복잡한 자료를 전송할 때 유리하다.
 
 * request 이벤트 발생 후 data 이벤트로 데이터가 전달된다.
 */