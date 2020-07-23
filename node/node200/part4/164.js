const express = require('express');

// express 객체 생성
const app = express();

app.use(express.static(`${__dirname}/multimedia`));
app.use((request, response) => {
    response.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
    response.end('<img src="/newyork.jpg" width="100%"/>');
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
/**
 * express 모듈에서는 static 미들웨어를 활용하여 손쉽게 이미지 파일, Javascript 파일, CSS 파일을 처리할 수 있다.
 */
