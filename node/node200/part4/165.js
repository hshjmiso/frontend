// 모듈 불러오기
const express = require('express');
const bodyParser = require('body-parser');

// express 객체 생성
const app = express();

// application/x=www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));

// application/json 파싱
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/login`));

app.use((request, response) => {
    const userId = request.body.userid || request.query.userid;
    const userPassword = request.body.password || request.query.password;

    response.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
    response.write(`<h1>Login ID와 PW 결과 값</h1>`);
    response.write(`<div><p>${userId}</p></div>`);
    response.write(`<div><p>${userPassword}</p></div>`);
    response.end(JSON.stringify(request.body, null, 2));
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
/**
 * body parser 미들웨어를 통해 POST 요청을 처리할 때 사용자가 보낸 데이터를 추출할 수 있다.
 * 또한 request 객체에 body 속성이 부여된다.
 * body parser 미들웨어는 application/x=www-form-urlencoded 인코딩 방식만 지원한다.
 */
