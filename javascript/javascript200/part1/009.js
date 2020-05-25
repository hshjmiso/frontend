/**
 * 콘솔(console)은 자바스크립트 내장 객체이다. 그 중에서 log 메소드는 console.log(메시지)와 같이 사용하여
 괄호 안에 대입된 값을 일반적인 로그 메시지로 출렵한다.
 */

var str = 'Javascript';
var num = 200;
var arr = [1, 2, 3, 4 , 5];
var obj = {a: 1, b: 2, c: 3};

console.log(str);
console.log(num);
console.log(arr);
console.log(obj);

console.debug('log와 동일한 로그 메시지를 출력한다.');
console.error('에러 메시지를 출력한다.');
console.info('정보성 메시지를 출력한다.');
console.warn('경고성 메시지를 출력한다.');