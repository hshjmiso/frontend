const isNaN123 = isNaN(123);
const isNaNMinus123 = isNaN(-123);
const isNaN234 = isNaN('234');
const isNaNHello = isNaN('hello');

console.log('isNaN123', isNaN123);
console.log('isNaNMinus123', isNaNMinus123);
console.log('isNaN234', isNaN234);
console.log('isNaNHello', isNaNHello);

/**
 * isNaN은 is Not a Number의 줄임말이다. isNaN()은 괄호 안에 넘겨준 파라미터가 숫자이면 False를 리턴하고
 숫자가 아닌 다른 타입이면 True를 리턴하는 기능을 수행한다.
 */