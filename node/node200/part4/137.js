const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    fs.readFile(`${__dirname}/newyork.jpg`, (error, data) => {
        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        response.end(data);
    });
}).listen(50001, () => {
    console.log('서버 동작 중, http://127.0.0.1:50001');
});

http.createServer((request, response) => {
    fs.readFile(`${__dirname}/Cullah_DaftPunk.mp3`, (error, data) => {
        response.writeHead(200, { 'Content-Type': 'audio/mp3' });
        response.end(data);
    });
}).listen(50002, () => {
    console.log('서버 동작 중, http://127.0.0.1:50002');
});
/**
 * http 모듈을 이용해 만든 서버 프로그램에 사용자가 요청을 보내면 .html로 되어 있는
 * 페이지뿐만 아니라 음악 파일과 이미지 파일도 사용자에게 제공할 수 있다.
 * Content-Type 속성을 사용하면 여러 가지 타입의 데이터를 제공할 수 있다.
 * text: 텍스트를 포함하는 모든 문서를 나타내며 이론상으로는 인간이 읽을 수 있어야 한다.
   * text/plain, text/html, text/css, text/javascript
 * image: 모든 종류의 이미지를 나타낸다. 애니메이션되는 이미지가 이미지 타입에 포함되긴 하지만, 비디오는 포함되지 않는다.
   * image/gif, image/png, image/jpeg, image/bmp, image/webp
 * audio: 모든 종류의 오디오 파일을 나타낸다.
   * audio/midi, audio/mpeg, audio/webm, audio/ogg, audio/wav
 * video: 모든 종류의 비디오 파일을 나타낸다.
   * video/webm, video/ogg
 * 더 많은 MIME 형식은 인터넷에서 MIME TYPE을 입력하면 쉽게 찾을 수 있다.
 */
