/**
 * 삼항 연산자는 if와 switch처럼 조건문을 처리하는 연산자이다.
 일반적으로 if 조건문의 축약형으로 사용되며, 세 개의 문장으로 구성된다.
 */

var condition = 5 > 10;
condition ? console.log('Left') : console.log('Right');
var result = condition ? (console.log('삼항 연산자의 첫 번째 표현식 입니다.'), '표현식1') : 
    (console.log('삼항 연산자의 두 번째 표현식 입니다.'), '표현식2');
console.log(result);

