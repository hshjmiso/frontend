const express = require('express');

const app = express();

app.get('/one', (request, response) => {
    response.send('<a href="/two">Street 200</a>');
});

app.get('/two', (request, response) => {
    response.send('<a href="/one">Street 100</a>');
});

app.get('/three/:number', (request, response) => {
    const streetNumber = request.params.number;
    response.send(`${streetNumber}Street`);
});

app.get('/four/:number', (request, response) => {
    const aveNumber = request.params.number;
    response.send(`${aveNumber}Ave`);
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
/**
 * router 모듈은 라우팅을 지원하는 라이브러리이다.
 * 라우팅은 애플리케이션 엔드 포인트(URL)의 정의, URI가 클라이언트 요청에 응답하는 방식을 말한다.
 * 참고로 express 모듈 내에 페이지 라우팅 기능이 기본적으로 내장되어 있다.
 * 라우팅 메소드
   * get(): GET 요청 발생 시 이벤트 리스너 지정
   * post(): POST 요청 발생 시 이벤트 리스너 지정
   * all(): 모든 요청 발생 시 이벤트 리스너 지정
   * put(): PUT 요청 발생 시 이벤트 리스너 지정
   * delete(): DELETE 요청 발생 시 이벤트 리스너 지정
 * ':' 기호를 사용하여 매개변수를 전달할 수 있다. ex) three/:300
 * 페이지 라우팅을 모듈로 분리하는 라우터 모듈화 기능에 대해 알고 싶다면 
 * http://expressjs.com/ko/guide/routing.html
 */
