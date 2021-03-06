/**
 * 자바스크립트에서는 함수를 선언하기 전에 호출이 가능하다.
 * 이러한 현상을 호이스팅이라고 한다.
 * 호이스팅을 직역하면 '끌어 올리기'인데 함수가 실제 호출하기 이전으로 끌어 올라간 것처럼 동작하기 때문이다.
 */

hello();
function hello() {
    console.log('안녕하세요');
}

// TypeError 실제로는 hello2 이름으로 선언된 변수는 호이스팅이 이루어졌고,
// 여기에는 undefined가 할당된다.
// 만약 호이스팅이 이루어지지 않았다면 ReferenceError로 hello가 선언되지 않았다는 에러가 나와야 한다.
hello2();
var hello2 = function() {
    console.log('안녕하세요');
}

/**
 * 호이스팅은 자바스크립트의 코드를 해석하고 실행하는 방식 때문에 나타난다. 
 * 자바스크립트는 코드를 해석하는 단계와 실행하는 단계로 나뉘고, 
 * 해석하는 단계에서 선언 문장을 초기화하면서 스코프를 형성하고 
 * 실행하는 단계에서 값을 할당하거나 계산을 하는 행위를 한다고 볼 수 있다.
 */