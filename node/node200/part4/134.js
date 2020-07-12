// 웹 서버 생성과 실행
const http = require('http');

const server = http.createServer();

// 이벤트 연결
server.on('request', () => {
   console.log('Request');
});

server.on('connection', () => {
    console.log('Connection');
});

server.on('close', () => {
    console.log('Close');
});

server.listen(50000, () => {
    console.log('서버 실행, http://127.0.0.1:50000');
});

// 웹서버 종료
const testClose = function() {
    server.close();
    console.log('서버 종료, http://127.0.0.1:50000');
};

// 강제로 서버 종료
setTimeout(testClose, 10000);
/**
 * http 모듈 server 객체의 주요 이벤트
   * request: 클라이언트가 요청할 때 발생하는 이벤트
   * connection: 클라이언트가 접속할 때 발생하는 이벤트
   * close: 서버가 종료될 때 발생하는 이벤트
   * clientError: 클라이언트에서 오류가 날 때 발생하는 이벤트
   * checkContinue: 클라이언트가 지속적인 연결을 하고 있을 때 발생하는 이벤트
 * on() 메소드를 활용하여 server 객체에 주요 이벤트를 다음과 같이 연결한다.
 * // 이벤트 연결
 * server.on('request', () => {
 *   console.log('Request);
 * });
 */
