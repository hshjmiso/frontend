/**
 * 심볼(Symbol)은 함수 호출을 통해 생성가능하다. new 키워드를 통한 호출은 에러가 발생.
 * Symbol을 함수 호출 시 값을 전달할 수 있는데 이 값은 디버깅 용도이며 고유한 Symbol 값은 만들어지지 않는다.
 * 즉, Symbol()은 늘 고유할 값을 반환한다.
 * 심볼은 객체의 키로 사용가능하다. 객체의 키로 사용하기 위해선 Symbol에 대한 레퍼런스를 변수에 담고 있다가 접근할 때 사용해야 한다.
 * 심볼이 객체의 키로 사용되면 for-in 루프를 통해 심볼 키를 가져올 수 없다.
 * Object.getOwnPropertySymbols 메소드를 통해 해당 객체의 키에 해당하는 심볼들을 가져올 수 있다.
 */
const symbol = Symbol(); // 
const hello = Symbol('hello');

console.log(Number(3) === Number(3));
console.log(Symbol('symbol') === Symbol('symbol')); // 
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationility = Symbol('nationility');
const user = {
    name: 'jay'
};
user[nationility] = 'korean';
console.log(user[nationility]);

for (let key in user) {
    console.log(key);
}
console.log('1', Object.keys(user));
console.log('2', Object.getOwnPropertyNames(user));
console.log('3', JSON.stringify(user));

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log('4', symbolProperties);
console.log('5', user[symbolProperties[0]]);