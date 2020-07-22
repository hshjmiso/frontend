const express = require('express');

const app = express();

app.use((request, response) => {
    const agent = request.header('User-Agent');
    const paramName = request.query.name;
    const browserChrome = 'Hello Chrome';
    const browserOthers = 'Hello Others';

    console.log(request.headers);
    console.log(request.baseUrl);
    console.log(request.hostname);
    console.log(request.protocol);

    if (agent.toLowerCase().match(/chrome/)) {
        response.write(`<div><p>${browserChrome}</p></div>`);
    } else {
        response.write(`<div><p>${browserOthers}</p></div>`);
    }
    response.write(`<div><p>${agent}</p></div>`);
    response.write(`<div><p>${paramName}</p></div>`);
    response.end();
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
/**
 * express 모듈의 request 객체를 이용하면 사용자가 요청(request)한 내용이 어떤 것인지 알 수 있다.
 * request 객체의 메소드와 속성
   * headers: 요청 헤더의 추출
   * Header(): 요청 헤더의 속성 지정 또는 추출
   * query: GET 방식으로 요청한 매개변수 확인
   * body: POST 방식으로 요청한 매개변수 확인
   * params: 라우팅 매개변수 추출
 * const agent = request.header('User-Agent');을 통해 요청 헤더를 추출해 
 * Chrome 브라우저인지 아닌지에 따라 출력 값을 다르게 설정
 */
