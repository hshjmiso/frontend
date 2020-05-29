/**
 * 비구조화 할당(Destructuring Assignment)이란, 배열이나 객체의 값을 새로운 변수에 쉽게 할당한다.
 * 객체 비구조화 할당 중괄호 {} 안에 속성 이름을 넣어 객체의 여러 속성을 한 번에 가져올 수 있다.
 */

let obj = {a: 1, b: 2, c: 30, d: 44, e: 5};

let {a, c} = obj;

console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

let {a:newA=10, f:newF=5} = obj;
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);