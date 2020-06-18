/**
 * let으로 선언한 변수는 호이스팅에서 설명한 것과 동일하게 블록 단위로 일어난다. 하지만
 * var과 다르게 undefined 값이 할당되기보다는 블록 시작부터 선언이 이루어진 라인까지 
 * 일시적으로 접근을 막는다.
 */

let value = '바깥값';
if (true) {
    console.log(value);
    let value = '안쪽값';
}