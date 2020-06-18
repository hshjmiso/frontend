/**
 * function(parameter, ...restParameter) {
 *   // arguments 객체는 나머지 매개변수와 다르게 함수 몸통에서만 사용한다.
 * }
 * arguments 객체와 나머지 매개변수와의 가장 큰 차이점은 arguments 객체는 배열이 아니지만
 * 나머지 매개변수는 배열이라는 점이다.
 */
function sum(...args) {
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1));
    return total;
}
console.log(sum(1, 2, 3));

function sum2(a, b, ...others) {
    var total = a + b;
    for (var i = 0; i < others.length; i++) {
        total += others[i];
    }
    return total;
}
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4));