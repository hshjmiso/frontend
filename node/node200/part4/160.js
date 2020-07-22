const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello express module');
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
/**
 * express 모듈은 node.js로 웹 서버를 개발할 때 가장 많이 쓰이는 모듈이다.
 * 물론 http 모듈을 통해 웹 서버를 개발해도 되지만 express 모듈은 훨씬 쉽고 편하게 개발할 수 있다.
 */
