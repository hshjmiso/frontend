/**
 * const 키워드로 정의된 상수에 객체를 할당하면 불변 객체(Immutable Object)가 되지는 않는다.
 */
const CONST_USER = {name: 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = {name: 'bbo'}; // TypeError: Assignment to constant variable