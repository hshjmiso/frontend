const http = require('http');

http.createServer((request, response) => {
    // cookie
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['soju = grilledPork', 'beer = chicken'], 
    });

    // cookie output
    response.end(`<h1>${request.headers.cookie}</h1>`);
}).listen(50000, () => {
    console.log('서버 동작 중, http://127.0.0.1:50000');
});
/**
 * 쿠키(cookie)란 인터넷 사용자가 어떠한 웹 사이트를 방문할 경우 그 사이트가 사용하고 있는 
 * 서버를 통해 인터넷 사용자의 컴퓨터에 설치되는 작은 기록 정보 파일을 의미한다.
 
 * 쿠키는 서버와 클라이언트 모두 저장하고 사용 가능하며, 일정 기간 동안 데이터를 저장
 * 할 수 있기 때문에 로그인 상태를 일정 시간 유지해야 하는 웹 사이트에서 사용한다. 그리고
 * 이 기록 파일에 담긴 정보는 인터넷 사용자가 같은 웹사이트를 방문할 때마다 읽히고 수시로
 * 새로운 정보로 바뀐다.
 
 * response 객체를 사용해서 클라이언트에 쿠키를 할당하며 Set-Cookie 속성을 사용한다.
 */