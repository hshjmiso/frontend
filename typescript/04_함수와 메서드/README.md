# 함수와 메서드

## 함수 선언문

자바스크립트에서 함수는 function 키워드로 만드는 함수와 => 기호로 만드는 화살표 함수 두 가지가 있다. 

function 키워드로 만드는 함수 선어문의 구조
``` typescript
function 함수 이름(매개변수1, 매개변수2[, ...]) {
    함수 몸통
}
```

타입스크립트 함수 선언문은 자바스크립트 함수 선언문에서 매개변수와 함수 반환값(return type)에 타입 주석을 붙이는 다음 형태로 구성된다. 
``` typescript
function 함수 이름(매개변수1: 타입1, 매개변수2: 타입2[, ...]): 반환값 타입 {
    함수 몸통
}
```
``` typescript
function add(a: number, b: number): number {
    return a + b
}
```

### 매개변수와 인수, 인자
일반적으로 parameter는 '매개변수'라고 하고, argument는 '인수' 혹은 '인자'라고 한다. 매개변수는 함수 선언문에서 함수 이름 뒤 괄호 안에 선언하는 변수이고, 인수는 함수를 호출할 때 전달하는 값이다.

### 매개변수와 반환값의 타입 주석 생략
변수 때와 마찬가지로 함수 선언문에서도 매개변수와 반환값에 대한 타입 주석을 생략할 수 있다. 다만, 변수 때와는 달리 함수의 매개변수 타입과 반환 타입을 생략하는 것은 바람직하지 않다. 왜냐하면, 타입이 생략되어 있으면 함수의 구현 의도를 알기 어렵고 잘못 사용하기 쉽기 때문이다.

### void 타입
값을 반환하지 않는 함수는 반환 타입이 void이다. void타입은 함수 반환 타입으로만 사용할 수 있다.

``` typescript
function printMe(name: string, age: number): void {
    console.log(`name: ${name}, age: ${age}`)
}
```

### 함수 시그니처
변수에 타입이 있듯이 함수 또한 타입이 있는데, 함수의 타입을 함수 시그니처(function signature)라고 한다.
``` typescript
(매개변수1 타입, 매개변수2 타입[, ...]) => 반환값 타입
```

``` typescript
let printMe: (string, number) => void = function (name: string, age: number): void {}
```
printMe 함수는 string과 number 타입의 매개변수가 두 개 있고 반환 타입이 void이다. 따라서 함수 시그니처는 (string, number) => void 이다.

만약 매개변수가 없으면 단순히 ()로 표현한다. () => void는 매개변수도 없고 반환값도 없는 함수 시그니처이다.

### type 키워드로 타입 별칭 만들기
타입스크립트는 type이라는 키워드를 제공한다. type 키워드는 기존에 존재하는 타입을 단순히 이름만 바꿔서 사용할 수 있게 해준다. 이러한 기능을 타입 별칭(type alias)이라고 한다.

``` typescript
type 새로운 타입 = 기존 타입
```
``` typescript
type stringNumberFunc = (string, number) => void
let f: stringNumberFunc = function (a: string, b: number): void {}
let g: stringNumberFunc = function (c: string, d: number): void {}
```
함수의 타입, 즉 함수 시그니처를 명시하면 매개변수의 개수나 타입, 반환 타입이 다른 함수를 선언하는 잘못을 미연에 방지할 수 있다.

### undefined 관련 주의 사항
undefined 타입은 타입스크립트의 타입 계층도에서 모든 타입 중 최하위 타입이다. 
undefined를 고려하지 않은 코드 예
``` typescript
interface INameable {
    name: string
}
function getName(o: INameable) {return o.name}

let n = getName(undefined)  // 오류 발생 Cannot read property 'name' of undefined
console.log(n)
```

getName은 INameable 타입의 매개변수를 요구하지만, INameable 타입 객체가 아니라 undefined를 매개변수로 호출해도 구문 오류가 발생하지 않는다. 즉, undefined는 최하위 타입이므로 INameable을 상속하는 자식 타입으로 간주한다.

오류를 방지하려면 매개변숫값이 undefined인지 판별하는 코드를 작성해야 한다.
``` typescript
interface INameable {
    name: string
}
function getName(o: INameable) {
    return o != undefined ? o.name : 'unknown name'
}

let n = getName(undefined)
console.log(n)                          // unknown name
console.log(getName({name: 'Jack'}))    // Jack
```

인터페이스에 선택 속성이 있다면
``` typescript
interface INameable {
    age?: number
}
function getAge(o: INameable) {
    return o != undefined && o.age ? o.age : 0
}

console.log(getAge(undefined))      // 0
console.log(getAge(null))           // 0
console.log(getAge({name: 'Jack'})) // Jack
```

### 선택적 매개변수
함수의 매개변수에도 이름 뒤에 물음표를 붙일 수 있으면, 이를 **선택적 매개변수**(optional parameter)라고 한다.
``` typescript
function fn(arg1: string, arg?: number) {console.log(`arg: ${arg}`)}

fn('hello', 1)  // arg: 1
fn('hello')     // arg: undefined
```

선택적 매개변수가 있는 함수의 시그니처는 타입 뒤에 물음표를 붙인다.
``` typescript
type OptionalArgFunc = (string, number?) => void
```

## 함수 표현식

### 함수는 객체다
자바스키립트는 함수형 언어 '스킴(scheme)'과 프로토타입(prototype) 기반 객체지향 언어 '셀프(self)'를 모델로 만들어졌다.
따라서 자바스크립트는 객체지향 언어와 함수형 언어의 특징이 모두 있다. 타입스크립트 또한 자바스크립트의 이런 특징을 모두 포함한다. 자바스크립트에서 함수는 Function 클래스의 인스턴스(instance)이다.
``` typescript
let add = new Function('a', 'b', 'return a + b')
let result = add(1, 2)
console.log(result) // 3
```

``` typescript
let add2 = function(a ,b) {return a + b}
console.log(add2(1, 2)) // 3
```
함수 선언문에서 함수 이름을 제외한 **function(a, b) {return a + b}** 와 같은 코드를 **함수 표현식**(function expression)이라고 한다. 함수 표현식은 함수형 언어의 핵심 기능이다.

### 일등 함수
프로그래밍 언어가 일등 함수(first-class function) 기능을 제공하면 '함수형 프로그래밍 언어(functional programming language)'라고 한다. 자바스크립트와 타입스크립트는 일등 함수 기능이 있으므로 함수형 프로그래밍 언어이다. 일등 함수란, 함수와 변수를 구분(혹은 차별)하지 않는다는 의미이다.
``` typescript
let f = function(a, b) {return a + b}
f = function(a, b) {return a - b}
```

### 표현식
프로그래밍 언어에서 '표현식(expression)'이라는 용어는 리터럴(literal), 연산자(operator), 변수, 함수 호출(function call) 등이 복합적으로 구성된 코드 형태를 의미한다. 표현식은 항상 컴파일러에 의해 계산법(evaluation)이 적용되어 어떤 값이 된다. 

### 함수 표현식
변수 f에는 function(a, b) {return a + b} 를 마치 값처럼 대입하는데, 이 function(a, b) {return a + b;} 부분을 함수 표현식(function expression)이라고 한다.

### 계산법
컴파일러는 표현식을 만나면 계산법(evaluation)을 적용해 어떤 값을 만든다. 계산법에는 조급한 계산법(eager evaluation)과 느긋한(또는 지연) 계산법(lazy evaluation) 두 가지가 있다. 컴파일러가 1 + 2라는 표현식을 만나면 조급한 계산법을 적용해 3이라는 값을 만든다. 반면에 컴파일러가 function(a, b) {return a + b} 라는 함수 표현식을 만나면, 심벌 a와 b가 어떤 값인지 알 수 없어서 느긋한 계산법을 적용해 계산을 보류한다.

### 함수 호출 연산자
어떤 변수가 함수 표현식을 담고 있다면, 변수 이름 뒤에 함수 호출 연산자(function call operator) () 를 붙여서 호출할 수 있다.'함수 호출'이란, 함수 표현식의 몸통 부분을 실행한다는 뜻이다. 만약, 함수가 매개변수를 요구한다면 함수 호출 연산자 () 안에 필요한 매개변수를 명시할 수 있다.

``` typescript
let functionExpression = function(a, b) {return a + b}
let value = functionExpression(1, 2)    // 3
```

컴파일러는 함수 호출문을 만나면 지금까지 미뤘던 함수 표현식에 조급한 계산법을 적용해 함수 표현식을 값으로 바꾼다. 즉, functionExpression(1, 2) 형태로 함수가 호출되면, 컴파일러는 functionExpression 변수에 저장된 함수 표현식을 끄집어 낸 뒤 조급한 계산법을 적용한다.

함수 표현식에 조급한 계산법을 적용한다는 의미는 함수 표현식의 몸통 부분을 실행한다는 의미이다. 앞 코드에서 함수 몸통은 return a + b인데, 매개변수 a와 b의 값이 1과 2로 확정되면 몸통은 return 1 + 2가 된다. 여기에 다시 조급한 계산법이 적용되어 return 3이 된다. 그리고 최종적으로 functionExpression(1, 2)라는 표현식은 3이라는 값이 된다.

### 익명 함수
함수 표현식(function expression)은 사실 대부분 언어에서 언급되는 익명(혹은 무명) 함수(annonymous function)의 다른 표현이다. 

``` typescript
let value = (function(a, b) {return a + b;})(1, 2)  // 3
```

코드를 이해하려면 연산자 우선순위(operator precedence)를 고려해 코드를 분해해야 한다. 함수 호출 연산자는 연산자의 우선순위가 매우 높으므로 함수 표현식 부분을 소괄호로 묶어서 컴파일러가 정상적으로 함수 표현식의 시작과 끝 부분을 알 수 있게 해야 한다.

``` typescript
let value = 
(function(a, b) {return a + b;})
(1, 2)  // 3
```
컴파일러는 익명 함수 부분에 게으른 계산법을 적용해 그 상태로 놔두지만, 곧바로 함수 호출 연산자를 만나므로 함수 몸통에 조급한 계산법을 적용해 최종적으로 3이라는 값을 만들어 낸다. 그다음 value 변수에 이 값을 대입한다.

### const 키워드와 함수 표현식
함수 표현식을 담는 변수는 let보다는 const 키워드로 선언하는 것이 바람직하다. let 키워드는 변숫값이 변할 수 있으므로 코드를 작성하면 함수 f는 언젠가 다른 내용으로 바뀔수 있다.
``` typescript
let f = () => {}
```

함수 표현식을 담는 변수를 const 키워드로 선언하면, 함수 내용이 이후에 절대로 바뀔 수 없다.

``` typescript
const f = () => {}
```

## 화살표 함수와 표현식 문
function 키워드가 아닌 => 기호로 만드는 화살표 함수도 제공한다.
``` typescript
const 함수 이름 = (매개변수1: 타입1, 매개변수2: 타입2[, ...]): 반환 타입 => 함수 몸통
```

화살표 함수의 몸통은 function 때와는 다르게 중괄호를 사용할 수도 있고 생략할 수도 있다.
``` typescript
const arrow1 = (a: number, b: number): number => {return a + b} // 실행문 방식 몸통
const arrow1 = (a: number, b: number): number => a + b          // 표현식 문 방식 몸통
```

중괄호 사용 여부에 따라 타입스크립트 문법이 동작하는 방식이 실행문(execution statement, 보통 줄여서 statement) 방식과 표현식 문(expression statement) 방식으로 달라진다.

### 실행문과 표현식 문
오래전부터 프로그래밍 언어는 실행문 지향 언어(execution-oriented language)와 표현식 지향 언어(expression-oriented language)로 구분되어 왔다. C가 대표적인 실행문 지향 언어이고, 스클라(scala)가 대표적인 표현식 지향 언어이다. 자바스크립트는 ES5는 실행문 지향 언어이지만, ESNext와 타입스크립트는 실행문과 표현식 문을 동시에 지원한다. 보통 이런 언어를 '다중 패러다임 언어(multi-paradigm language)'라고 한다.

프로그래밍 언어에서 실행문은 CPU에서 실행되는 코드를 의미한다. 그런데 실행문은 CPU에서 실행만 될 뿐 결과를 알려주지 않는다. 실행문이 실행된 결과를 알려면 반드시 return 키워드를 사용해야 한다. 반면에 표현식 문은 CPU에서 실행된 결과를 굳이 return 키워드를 사용하지 않아도 알려준다.

변수에 값을 대입하는 것은 대표적인 실행문이다.
``` typescript
let x
x = 1
```

반면에 x > 0 부분은 CPU가 평가한 후 true나 false라는 값으로 결과를 알려주지 않으면 if문이 정상적으로 동작할 수없다.
``` typescript
let x = 10
if (x > 0)
    x = 1
```

``` typescript
if (return x > 0)
    x = 1
```
프로그래밍 문법이 위와 같다면 코드를 작성하기가 상당히 번거로워진다.

즉, 똑같이 CPU에서 실행되는 구문이더라도 x > 0처럼 return 키워드 없이 결괏값을 반환하는 실행문이 필요하다. 이를 '**표현식 문**(expression statement)'이라고 구분해서 부른다.

### 복합 실행문
프로그래밍 언어에서 if와 같은 구문은 조건을 만족하면 단순히 실행문만을 실행하는 형태로 설계한다.
``` typescript
if (조건식)
    실행문
```

이런 설계가 가능한 이유는 복합 실행문(compound statement)이라는 또 다른 형태를 함께 제공하기 때문이다. 대부분 언어에서 복합 실행문은 중괄호 {}를 사용해 다음처럼 이용한다.
``` typescript
if (조건식) {
    실행문1
    실행문2
}
```
복합 실행문은 컴파일러로 하여금 여러 실행문을 한 개처럼 인식하게 한다. 따라서 컴파일러는 앞의 형태로 작성된 if문은 여전히 한 줄의 실행문으로 인식한다.

### 함수 몸통과 복합 실행문
function 키워드로 만드는 함수는 반드시 몸통을 중괄호 {}로 감싸야 하는데, 여기서 중괄호는 복합 실행문을 의미한다. 따라서 함수 몸통은 여러 줄로 구현할 수 있다.

``` typescript
function f() {
    let x = 1, y = 2
    let result = x + y + 10
}
```

### 복합 실행문에서 변수의 유효 범위
복합 실행문은 변수의 유효 범위도 지역 범위(local scope)로 제한한다. 따라서 두 함수의 몸통에 똑같은 이름의 변수가 있더라도 각 함수의 몸통에서만 유효하므로 서로 간섭하지 않는다.

``` typescript
function f() {let x = 1}
function g() {let x = 2}
```

### return 키워드
실행문은 CPU에서 실행된 결과를 알려주지 않는다. 예를 등러, 함수 몸통을 복합 실행문으로 구현한 함수는 true나 false를 반환하지 않는다.
``` typescript
function isGreater(a: number, b: number): boolean {
    a > b // 결과를 반환하지 않음
}
```

실행문 기반 언어는 이 문제를 해결하기 위해 return이라는 키워드를 도입했다.
``` typescript
function isGreater(a: number, b: number): boolean {
    return a > b // true나 false라는 결과를 반환
}
```

return 키워드는 반드시 함수 몸통에서만 사용할 수 있다는 제약이 있다. 이러한 제약은 문법을 잘못 이해해 다음과 같은 코드를 만드는 것을 방지하려는 의도이다.

``` typescript
if (return > 0) x = 1
```

### 표현식 문 스타일의 화살표 함수 구현
function 스타일 함수 isGreater를 화살표 함수로 구현
``` typescript
const isGreater = (a: number, b: number): boolean => {
    return a > b;
}
```

``` typescript
const isGreater = (a: number, b: number): boolean => a > b
```

함수 몸통이 표현식으로 구현되었다. 표현식은 값을 반환하는 실행문이므로 return 키워드 또한 생략되었다.

### 표현식과 표현식 문의 차이
``` typescript
let a = 1, b = 0
if (a > b) console.log('a is greater than b')
const isGreater = (a: number, b: number): boolean => a > b
```
a > b 코드는 C 언어에서 '표현식'이라고 했기 때문에 그 이후 만들어진 프로그래밍 언어들도 C 언어와 같은 의미로 표현식이라고 생각한다. 따라서 C 언어 관점에서 실행문의 일부일 뿐 그 자체가 실행문인 것은 아니다. 반면에 표현식 지향 언어 관점에서 a > b 코드는 그 자체가 실행문(statement)이다.

결론적으로 '표현식(expression)'이란 용어는 두 가지 형태로 사용되는데, 이 둘을 구분하고자 표현식(expression)과 표현식 문(expression statement)으로 구분한 것이다.

### 실행문을 만드는 세미콜론
C 언어는 모든 문장이 반드시 세미콜론 ;으로 끝나야 한다. C 언어 구문을 참조해 만든 ES5 자바스크립트 또한 모든 문장 끝에 세미콜론이 있어야 한다. 반면에 ESNext 자바스크립트와 타입스크립트에서는 세미콜론을 생략할 수 있다. 다만, 타입스크립트에서는 관습적으로 표현식 문에는 세미콜론을 붙이지 않는다.

## 일등 함수 살펴보기

### 콜백 함수
일등 함수(first-class function)는 프로그래밍 언어가 제공하는 기능이다. 일등 함수 기능을 제공하는 언어에서 함수는 '함수 표현식'이라는 일종의 값이다. 따라서 변수에 담을 수 있다. 이 말은 함수 표현식을 매개변수로 받을 수 있다는 것으 의미한다. 이처럼 매개변수 형태로 동작하는 함수를 **콜백 함수**(callback function)라고 한다.

``` typescript
const f = (callback: () => void): void => callback()
```
f는 callback이라는 매개변수가 있는데, 함수 몸통에서 함수로서 호출한다.

``` typescript
export const init = (callback: () => void): void => {
    console.log('default initialization finished')
    callback()
    console.log('all initialization finished.')
}
```
init 함수는 중간에 매개변수로 받은 callback에 담긴 함수 표현식을 실행한다.
``` typescript
import {init} from './init'
init(() => console.log('custom initialization finished.'))
```

### 중첩 함수
함수형 언어에서 함수는 변수에 담긴 함수 표현식이므로 함수 안에 또 다른 함수를 중첩(nested)해서 구현할 수 있다. 

``` typescript
const calc = (value: number, cb: (number) => void): void => {
    let add = (a, b) => a + b
    function multiply(a, b) {return a * b}

    let result = multiply(add(1, 2), value)
    cb(result)
}

calc(30, (result: number) => console.log(`result is ${result}`)) // result is 90
```

### 고차 함수와 클로저, 그리고 부분 함수
고차 함수(high-order function)는 또 다른 함수를 반환하는 함수를 말한다. 함수형 언어에서 함수는 단순히 함수 표현식이라는 값이므로 다른 함수를 반환할 수 있다. 고차 함수 기능이 없다면 함수형 프로그래밍이 불가능할 정도로 고차 함수는 매우 중요한 기능이다.

``` typescript
const add1 = (a: number, b: number): number => a + b // 보통 함수
const add2 = (a: number): (number) => number => (b: number): number => a + b // 고차 함수
```

``` typescript
const add = (a: number): (number) => number => (b: number): number => a + b
const result = add(1)(2)
console.log(result) // 3
```

``` typescript
type NumberToNumberFunc = (number) => number
export const add = (a: number): NumberToNumberFunc => {
    // NumberToNumberFunc 타입의 함수 반환
    const _add: NumberToNumberFunc = (b: number): number => {
        // number 타입의 값 반환
        return a + b // 클로저
    }
    return _add
}
```

a는 add 함수의 매개변수이고 b는 _add 함수의 매개변수이다. 즉, _add 함수의 관점에서 보면 a는 외부에 선언된 변수이다. 함수형 프로그래밍 언어에서는 이를 클로저(closure)라고 한다.

``` typescript
import {NumberToNumberFunc, add} from './add'

let fn: NumberToNumberFunc = add(1)

let result = fn(2)
console.log(result)     // 3
console.log(add(1)(2))  // 3
```

fn은 단순히 add(1)을 저장하는 임시 변수(temporary variable)의 역할만 한다. 따라서 fn과 같은 임시 변수를 사용하지 않는다면 2차 고차 함수인 add는 add(1)(2)처럼 함수 호출 연산자를 두 개 사용해야만 함수가 아닌 값을 얻을 수 있다.

``` typescript
const multiply = a => b => c => a * b * c
```
3차 고차 함수인 multiply에 함수 호출 연산자를 하나나 두 개만 붙여서 multiply(1)이나 multiply(1)(2)처럼 사용하면 아직 값이 아닌 함수이다. 이것을 '부분 애플리케이션(partial application)' 혹은 '부분 적용 함수(partially applied function)'라고 한다.

## 함수 구현 기법

### 매개변수 기본값 지정하기
선택적 매개변수는 항상 그 값이 undefined로 고정된다. 만일, 함수 호출 시 인수를 전달하지 않더라도 매개변수에 어떤 값을 설정하고 싶다면 매개변수의 기본값을 지정할 수 있다. 이를 **디폴트 매개변수**(default parameter)라고 한다.
``` typescript
(매개변수: 타입 = 매개변수 기본값)
```

``` typescript
export type Person = {name: string, age: number}

export const makePerson = (name: string, age: number = 10): Person => {
    const person = {name, age}
    return person
}
console.log(makePerson('Jack'))     // {name: 'Jack', age: 10}
console.log(makePerson('Jane', 33)) // {name: 'Jane', age: 33}
```

### 객체를 반환하는 화살표 함수 만들기
``` typescript
export type Person = {name: string, age: number}

export const makePerson = (name: string, age: number = 10): Person => ({name, age})
console.log(makePerson('Jack'))     // {name: 'Jack', age: 10}
console.log(makePerson('Jane', 33)) // {name: 'Jane', age: 33}
```

### 매개변수에 비구조화 할당문 사용하기
``` typescript
export type Person = {name: string, age: number}

const printPerson = ({name, age}: Person): void =>
    console.log(`name: ${name}, age: ${age}`)

printPerson({name: 'Jack', age: 10})    // name: Jack, age: 10
```

### 색인 키와 값으로 객체 만들기
``` typescript
const makeObject = (key, value) => ({[key]: value})
``` 

객체의 속성 이름을 변수로 만들려고 할 대 사용한다. 즉, [key] 부분이 'name'이면 {name: value} 형태, 'firstName'이면 {firstName: value} 형태의 객체를 생성한다.

``` typescript
const makeObject = (key, value) => ({[key]: value})
console.log(makeObject('name', 'Jack')) // { name: 'Jack' }
console.log(makeObject('firstName', 'Jane')) // { firstName: 'Jane' }
```

타입스크립트에서는 {[key]: value} 형태의 타입을 '색인 가능 타입(indexable type)'이라고 하며, key와 value의 타입을 명시한다.

``` typescript
type KeyType = {
    [key: string]: string
}
```

``` typescript
export type KeyValueType = {
    [key: string]: string
}
export const makeObject = (key: string, value: string): KeyValueType => ({[key]: value})

console.log(makeObject('name', 'Jack')) // { name: 'Jack' }
console.log(makeObject('firstName', 'Jane')) // { firstName: 'Jane' }
```

## 클래스 메서드

### function 함수와 this 키워드
function 키워드로 만든 함수는 Function이란 클래스의 인스턴스, 즉 함수는 객체이다. 객체지향 언어에서 인스턴스는 this 키워드를 사용할 수 있다. 타입스크립트에서는 function 키워드로 만든 함수에 this 키워드를 사용할 수 있다. 반면에 화살표 함수에는 this 키워드를 사용할 수 없다.

### 메서드란?
타입스크립트에서 메서드(method)는 function으로 만든 함수 표현식을 담고 있는 속성이다.
``` typescript
export class A {
    value: number = 1
    method: () => void = function(): void {
        console.log(`value: ${this.value}`)
    }
}
```

``` typescript
import {A} from './A'
let a: A = new A
a.method()  // value: 1
```

### 클래스 메서드 구문
타입스크립트는 클래스 속성 중 함수 표현식을 담는 속성은 fucntion 키워드를 생략할 수 있게 하는 단축 구문(shorthand)을 제공한다.
``` typescript
export class B {
    contructor(public value: number = 1) {}
    method(): void {
        console.log(`value: ${this.value}`)
    }
}
```
``` typescript
import {B} from './B'
let b: B = new B(2)
b.method()  // value: 2
```

### 정적 메서드
클래스의 속성은 static 수정자(modifier)를 속성 앞에 붙여서 정적으로 만들 수 있었다. 메서드 또한 속성이므로 이름 앞에 static 수정자를 붙여 정적 메서드를 만들 수 있다.
``` typescript
export class C {
    static whoAreYou(): string {
        return `I'm class C`
    }
}

export class D {
    static whoAreYou(): string {
        return `I'm class D`
    }
}

console.log(C.whoAreYou())  // I'm class C
console.log(D.whoAreYou())  // I'm class D
```

### 메서드 체인
객체의 메서드를 이어서 계속 호출하는 방식의 코드를 작성할 수 있다. 이러한 방식을 **메서드 체인**(method chain)이라고 한다.
``` typescript
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
```
``` typescript
export class calculator {
    constructor(public value: number = 0) {}
    add(value: number) {
        this.value += value
        return this
    }
    multiply(value: number) {
        this.value *= value
        return this
    }
}
```
타입스크립트로 메서드 체인을 구현하려면 메서드가 항상 this를 반환하게 한다.

``` typescript
import {Calculator} from './method-chain'

let calc = new Calculator
let result = calc.add(1).add(2).multiply(3).multiply(4).value
console.log(result) // (0 + 1 + 2) * 3 * 4 = 36
```