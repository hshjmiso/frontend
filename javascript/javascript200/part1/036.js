/**
 * 전달 인자(argument)
 * 매개변수가 함수 선언 시 작성되는 변수라면, 전달 인자는 함수가 호출될 때 전달되는 값이다.
 */

 function sum() {
     var total = 0;
     for (var i = 0; i < arguments.length; i++) {
         total += arguments[i];
     }
     console.log(arguments instanceof Array);
     return total;
 }

 var sumOf1to3 = sum(1, 2, 3);
 console.log(sumOf1to3)

 function testArg() {
     // arguments 객체를 배열로 바꾸기 위해 배열의 프로토타입에 정의된 slice 메소드를 호출한다.
     var newArr = Array.prototype.slice.call(arguments); 
     console.log(newArr);
     console.log(newArr.indexOf('b'));
     console.log(arguments.indexOf('b')); // arguments 객체는 배열이 아니기 때문에 에러가 발생한다.
 }

 testArg('a', 'b');