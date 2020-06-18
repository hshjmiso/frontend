/**
 * 스코프는 일반적으로 렉시컬(Lexical) 스코프와 다이나믹(Dynamic) 스코프로 분류된다.
 * 렉시컬 스코프는 작성하는 시점에 스코프가 결정지어진다고 해서 정적 스코프라고도 부른다.
 * 자바스크립트는 대표적인 렉시컬 스코프이다.
 */

var a = 'global';

function print1() {
    console.log(a); 
}

function print2() {
    var a = 'local';
    print1(); // a는 print1 함수 스코프에서 찾을 수 없어 전역에서 찾아 문자열 global을 출력하게 된다.
}

print1();
print2();