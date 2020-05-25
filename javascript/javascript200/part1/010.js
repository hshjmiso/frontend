/**
 * 조건문이란, 어떤 조건이 참인지 거짓인지에 따라 실행 여부를 결정하는 구문을 말한다.
 이를 활용하여 조건문에 따라 특정 코드를 실행하게 만들 수도, 실행하지 못하게 만들 수도 있다.
 */

var result = true;
if (result) console.log('result가 참 이다.');
if (!result)
    console.log('실행되지 않는다.');
if (result) {
    console.log('result의 결과');
    console.log('>> 참 이다.');
}