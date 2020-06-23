/**
 * 전역 객체란 Node.js에서 객체를 따로 선언할 필요 없이 자유롭게 사용할 수 있는 객체를 말한다.
 */
// process
console.log(process.env); // 컴퓨터 환경과 관련 정보를 가진 객체
console.log('--------------');
console.log(process.arch); // 프로세서의 아키텍쳐
console.log('--------------');
console.log(process.uptime()); // 현재 프로그램이 실행된 시간
console.log('--------------');
console.log(process.memoryUsage()); // 메모리 사용 정보를 가진 객체
console.log('--------------');
console.log(process.version); // Node.js 버전
console.log('--------------');
console.log(process.versions); // Node.js 버전


// console
console.log('Number: %d + %d = %d', 1, 2, 3 + 4);
console.log('String: %s', 'Hello World!');
console.log('JSON: %j', { name: 'node.js' });
console.log('String1', 'String2');

/**
 * 주요 전역 객체
   * process: 현재 동작 중인 프로세스의 정보
   * console: 콘솔 출력
   * buffer: 이진 데이터를 다루는 버퍼 클래스
   * require(): 모듈 로딩
   * __filename, __dirname: 현재 폴더 경로와 파일 경로
   * module, exports: 로딩된 모듈 정보와 모듈로 타입, 객체 노출시키기
   * Timeout: 타이머, 반복 함수
 */

/**
 * process(프로세스) 주요 속성과 메소드
   * env: 환경 변수 정보
   * argv: 프로세스를 실행할 때 전달되는 파라미터 정보
   * exit(): 프로세스를 끝내는 메소드
 */

/**
 * 주요 속성과 메소드
   * log(): 콘솔 화면에 문자열을 출력하는 메소드
   * dir(): 객체가 가지고 있는 속성을 그대로 출력
 */