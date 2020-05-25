/**
 * 논리 연산자(Logical Operators)는 어떠한 명제에 대한 논리적인 판단을 내리는 연산자이다.
 참 또는 거짓의 값을 받아 논리적 연산의 결과로 true, false를 반환한다.
 연산자 종류로는 AND 연산자 &&, OR 연산자 ||, NOT 연산자 !가 있고, 결과값은 항상 불리언(Boolean) 자료형으로 반환한다.
 */
// AND 논리 연산자 &&
console.log(true && true);
console.log(true && false);
console.log('문장' == '문장' && 5 == 5);
console.log(5 == 5 && '다른 문장 1' == '다른 문장 2');
console.log('-----');
// OR 논리 연산자 ||
console.log(true || false);
console.log(false || false);
console.log('문장' == '문장' || 5 == 10);
console.log('-----');
// NOT 논리 연산자 !
console.log(!true);
console.log(!false);
console.log(!5);
console.log(!'문장');
console.log(!!5);
console.log(!!'문장');