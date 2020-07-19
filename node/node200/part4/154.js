const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    fs.readFile('154_ejs_example.ejs', 'utf-8', (error, data) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(ejs.render(data));
    });
}).listen(50000, () => {
    console.log('서버 동작 중, http://127.0.0.1:50000');
});
/**
 * 응답으로 보내줄 웹 페이지의 모양을 미리 만들어 표준화한 것을 템플릿(Template)이라고 한다.
 * ejs 모듈은 웹 페이지를 동적으로 처리하는 템플릿 엔진 모듈로 특정 형식의 문자열을 HTML 형식의 문자열로 변환해 준다.
 * 템플릿 엔진 모듈을 사용해서 웹 페이지를 처리하는 이유는 각각의 요청을 웹 코드 안에 입력하는 과정에서 발생하는 오탈자가 생기기 쉽기 때문이다.
 
 * ejs 모듈의 메소드
   * render(): ejs 문자열을 HTML 문자열로 변경
 * ejs 파일의 특수 태그
   * <% CODE %>: Javascript 코드 입력
   * %=VALUE %>: 데이터 출력
 */