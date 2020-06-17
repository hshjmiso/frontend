/**
 * 자바스크립트에서 사용할 수 있는 예외 처리 방법에는 throw 문과 try-catch-finally문이 있다.
 * 예외 처리 시 에러 종류는 두가지로 나눈다.
 * 하나는 예상치 못한 에러, 다른 하나는 개발자가 의도한 에러가 있다.

 * 개발자가 의도한 에러란, 코드에서 잘못될 가능성을 예상하고 발생시키는 에러를 의미한다.
 * throw문을 사용하고 에러를 발생시켜 예외 상황을 알리는 역할을 한다. 
 * 그리고 throw 문이 실행되면 실행되고 있던 블록을 빠져나간다.
 * throw 문은 예외 상황을 미리 파악하고 에러를 발생시켜 이후 코드가 실행되지 않도록 한다.
 * 이는 결국 에러를 발생시킨 것이므로, 프로그램이 중단되는 것은 막을 수 없다.
 * 이 에러 발생에 대한 대응책이 바로 try-catch-finally문이다.
 */
function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값';
    console.log('숫자형 값으로 확인');
}

checkNumber(100);
checkNumber('Wrong type');
console.log('완료');