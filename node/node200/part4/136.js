const fs = require('fs');
const http = require('http');
const filePath = 
http.createServer((request, response) => {
    fs.readFile(`${__dirname}/136_example.html`, (error, data) => {
        console.log(data);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
}).listen(50000, () => {
    console.log('서버 동작 중, http://127.0.0.1:50000');
});
/**
 * fs 모듈을 이용해 서버에 있는 디스크에서 html 페이지를 읽어와 사용자에게 제공할 수 있다.
 */
