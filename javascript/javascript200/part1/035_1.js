/**
 * try-catch-finally 문은 try 블록 안에서 발생된 에러를 잡아내고, catch 블록으로 제어권을 넘긴다.
 * try 불록에서 발생된 에러 정보는 catch 문의 변수로 전달되기 때문에, 
 * 개발자는 프로그램 종료 없이 어떤 에러가 발생했는지 확인할 수 있다. 
 * finally 블록은 에러 발생 여부와 상관없이 실행되는 블록이다.
 * 이를 활용하면 파일 읽기/쓰기를 할 때 에러가 발생 되더라도 항상 파일 close 구문을 실행할 수 있다.
 */
function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값';
    console.log('숫자형 값으로 확인');
}

try {
    checkNumber(100);
    checkNumber('Wrong type');
} catch (e) {
    console.log(`에러 발생 >>> ${e}`);
} finally {
    console.log('완료');
}