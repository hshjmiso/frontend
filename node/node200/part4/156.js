const pug = require('pug');
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    fs.readFile('156_pug_example.pug', 'utf-8', (error, data) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        const fn = pug.compile(data);
        response.end(fn());
    });
}).listen(50000, () => {
    console.log('서버 동작 중, http://127.0.0.1:50000');
});
/**
 * pug 모듈도 템플릿 엔진 모듈이다. express 프레임워크가 ejs, pug 모듈을 주로 템플릿 엔진으로 사용한다.
 * pug 모듈의 메소드
   * compile(): pug 문자열을 HTML 문자열로 변경할 수 있는 함수 생성
 * pug 기본 형식에서 가장 중요한 것은 띄어쓰기이다. 
 * tab 또는 띄어쓰기 중 하나를 활용해 들여쓰기를 해야 오류가 발생하지 않는다.
 */
