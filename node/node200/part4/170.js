const express = require('express');
const parseurl = require('parseurl');
const session = require('express-session');
const { parse } = require('path');

const app = express();

app.use(session({
    secret: 'keyboard dog',
    resave: false,
    saveUninitialized: true,
}));

app.use((request, response, next) => {
    if (!request.session.views) {
        request.session.views = {};
    }

    console.log(request.session);

    // get the URL
    const pathname = parseurl(request).pathname;

    // count the views
    request.session.views[pathname] = (request.session.views[pathname] || 0) + 1;

    next();
});

app.get('/puddle', (request, response) => {
    response.send(`Hello puddle! you viewed this page ${request.session.views['/puddle']} times`);
});

app.get('/biggle', (request, response) => {
    response.send(`Hello biggle! you viewed this page ${request.session.views['/biggle']} times`);
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
/**
 * 세션(session)은 서버에 사용자가 로그인 했는지 여부 등의 정보를 저장하는 데 사용된다.
 * 클라이언트에 세션 식별자 쿠키를 부여하고 그 쿠키와 대응되는 저장소에 데이터를 저장한다.
 * express-session은 세션(session)을 생성할 때 사용하는 미들웨어이다.
 
 * connect.sid 쿠키가 생성되었고, express-session 모듈이 세션키를 connectsid로 저장한다.
 * 브라우저를 종료하고 다시 실행하면 connect.sid가 소멸되는 것을 확인할 수 있다.
 * 세션은 기본적으로 웹 브라우저가 켜져 있는 동안만 유지된다.
 * session() 메소드의 cookie 옵션을 통해 name, 저장소, 시간 등을 설정할 수 있다.
 * session() 메소드 옵션은 https://github.com/expressjs/session
 */
