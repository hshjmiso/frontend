/**
 * 프로그래밍 언어는 값을 특정 유형으로 분류한다. 특정 유형은 다른 말로 자료형 똔느 타입(type)이다.
 */

var x = 5; // 숫자형(Number)
var y = 'five'; // 문자형(String)
var isTrue = true; // 불린형(Boolean)
var empty = null; // null
var nothing; // undefined
var sym = Symbol('me') // Symbol

var item = {
    price: 5000,
    count: 10,
}; // 객체(Object)
var fruits = ['apple', 'orange', 'banana']; // 배열(Array)
var addFruit = function (fruit) {
    fruits.push(fruit);
} // 함수(function)
addFruit('watermelon');
console.log(fruits);

/**
 * 원시 타입(Primitive Data Type)
   * 숫자형(Number)
   * 불린형(Boolean)
   * 문자형(String)
   * 심볼형(Symbol)
   * null
   * undefined
 * 참조 타입
   * 객체(Object)
   * 배열(Array)
   * 함수(Function)
 * 원시 타입은 값이 변수에 할당될 때 메모리 상에 고정된 크기로 저장된다. 즉, 해당 변수가 직접 값을 보관한다.
 고정된 공간에 보관된 원시 타입의 값은 변경 불가능한 값, 불변값(Immutable Value)인 특징을 가진다.
 * 참조 타입은 원시 타입과 달리 변수에 고정된 크기를 저장하지 않고, 값의 메모리 주소를 참조한다.
 고정되지 않은 값을 변수에 할당하려면 직접 해당 값을 저장할 수 없으나 참조하는 것은 가능하다.
 따라서 참조타입은 값의 메모리 주소를 변수에 할당하여 값을 참조한다.
 */