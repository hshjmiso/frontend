const express = require('express');
const fs = require('fs');
const multipart = require('connect-multiparty');

const app = express();

app.use(multipart({ uploadDir: `${__dirname}/upload` }));

app.get('/', (request, response) => {
    fs.readFile(`${__dirname}/connect-multiparty.html`, (error, data) => {
        response.send(data.toString());
    });
});

app.post('/', (request, response) => {
    const imgFile = request.files.image;
    const outputPath = `${__dirname}/upload/${Date.now()}_${imgFile.name}`;
    console.log(outputPath);
    console.log(request.body, request.files);
    fs.rename(imgFile.path, outputPath, () => {
        response.redirect('/');
    });
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
/**
 * 웹 브라우저에서 파일을 전송할때 multipart/form-data 인코딩 방식을 사용한다.
 * 기존에는 일반적인 방식인 application/x-www-form-urlencoded 인코딩 방식을 사용했다.
 * body parser 미들웨어에서는 multipart/form-data를 지원하지 않는다.
 * 따라서 multipart/form-data 인코딩 방식으로 파일을 업로드 할 수 있게 해주는 미들웨어가 connect-multiparty이다.
 */
