/**
 * 자바스크립트에서는 자료형 간 변환을 지원한다. 예를 들어, 숫자형 변수값을 문자형으로 변환하거나,
 문자형 변수값을 숫자형으로 변환할 수 있다. 자바스크립트에서는 이를 자료형 변환(type coercion)또는 형변환이라고 부른다.
 */

console.log('5' + 1);
console.log('5' - 1);
console.log('5' * 2);
console.log('There is ' + 5);
console.log('Five' * 2);

console.log('- 연산자를 활용한 자료형 변환');
var str = 5 + '1';
console.log(str);
console.log(typeof str);
var num = +str;
console.log(num);
console.log(typeof num);

console.log('- 함수를 활용한 자료형 변환');
str = String(num);
console.log(str);
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);