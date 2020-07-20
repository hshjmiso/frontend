const pug = require('pug');
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    fs.readFile('158_pug_example3.pug', 'utf-8', (error, data) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        const fn = pug.compile(data);
        response.end(fn({
            table_name: 'Multiplication table 19 X',
            number: '19',
        }));
    });
}).listen(50000, () => {
    console.log('서버 동작 중, http://127.0.0.1:50000');
});
/**
 * pug 페이지에서 사용되는 특수 태그
   * #{값}: 데이터를 출력할 때 사용
   * -: Javascript를 입력할 때 사용
   * =값: 데이터를 출력할 때 사용
 */
