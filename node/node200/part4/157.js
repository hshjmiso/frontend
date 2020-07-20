const pug = require('pug');
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    fs.readFile('157_pug_example2.pug', 'utf-8', (error, data) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        const fn = pug.compile(data);
        response.end(fn());
    });
}).listen(50000, () => {
    console.log('서버 동작 중, http://127.0.0.1:50000');
});
/**
 * style: style 태그를 입력할 때 사용, style + '.'
 * script: script 태그를 입력할 때 사용, script + '.'
 * //: 주석 처리
 * #: div 태그
 * .: div class 속성
 * ul: ul 태그
 * li: li 태그
 */
