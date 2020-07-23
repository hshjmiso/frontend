// cookie parser
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/set', (request, response) => {
    console.log('Set Cookie 호출');
    response.cookie('user', {
        id: '0070',
        name: 'brian',
        authorized: true,
    });
    response.redirect('/get');
});

app.get('/get', (request, response) => {
    console.log('Get Cookie 호출');
    response.send(request.cookies);
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
/**
 * 쿠키란 인터넷 사용자가 어떠한 웹 사이트를 방문 할 경우 그 사이트가 사용하고 있는 서버를 통해 
 * 인터넷 사용자의 컴퓨터에 저장되는 작은 기록 정보 파일이다.
 * 일정 기간 동안 데이터를 저장할 수 있기 때문에 로그인 상태를 일정 시간 유지해야 하는 웹 사이트에서 사용된다.
 */
