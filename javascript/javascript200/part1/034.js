/**
 * function 함수 이름 (매개변수 목록) {
 *   함수 실행부
 * }
 */

// 함수 표현식
let greeting_expression = function(name) {
    console.log('Hi, ' + name);
}

// 함수 선언문
function greeting_declaration(name) {
    console.log('Hi, ' + name);
}

greeting_expression('Chloe');
greeting_declaration('Chloe');