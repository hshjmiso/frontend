// morgan 미들웨어
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(morgan('common'));
app.use(morgan(':method + :date'));
app.use(morgan(':status + :url'));
app.use((request, response) => {
    response.send('express morgan');
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
/**
 * express 모듈의 morgan 미들웨어를 통해 웹 요청이 들어왔을 때 로깅을 한다.
 * morgan 메소드의 매개 변수로 combined, common이 가장 기본적으로 쓰이는 로그 형식이다.
 * 더 많은 token을 확인하고 싶다면
 * https://github.com/expressjs/morgan
 */
