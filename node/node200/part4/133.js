// 웹 서버 생성과 실행
const http = require('http');

const server = http.createServer();

server.listen(50000, () => {
    console.log('서버 실행, http://127.0.0.1:50000');
});

// 웹서버 종료
const testClose = function() {
    server.close();
    console.log('서버 종료, http://127.0.0.1:50000');
};

// 강제로 서버 종료
setTimeout(testClose, 5000);
/**
 * http 모듈은 웹 개발에 있어 가장 중료한 모듈 중 하나이다.
 * Node.js로 웹 서버를 만들때 http 모듈을 사용한다.
 * server 객체
   * http 모듈에서 가장 중요한 객체로 createServer() 메소드를 통해 객체 생성
   * 주요 메서드
     * listen(): 서버 실행
     * close(): 서버 종료
 */
