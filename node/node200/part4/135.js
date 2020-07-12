require('http').createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Hello World!');
}).listen(50000, () => {
    console.log('서버 동작 중, http://127.0.0.1:50000');
});
/**
 * response 객체는 사용자의 요청(request)에 대해 응답(response)을 줄 때 사용한다.
 * 주요 메서드
   * writeHead(): 응답 헤더 작성
   * end(): 응답 본문 작성
 * writeHead(), end() 메소드를 사용해 응답 메시지를 작성하고 웹 페이지에 결과 값을 제공한다.
 */
