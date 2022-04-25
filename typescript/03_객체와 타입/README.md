# 객체와 타입

## 타입스크립트 변수 선언문

### 타입스크립트 기본 제공 타입

타입스크립트는 자바스크립트와 호환성을 위해 자바스크립트 타입은 물론 그에 대응하는 타입스크립트 타입 또한 제공한다.

자바스크립트와 타입스크립트의 기본 타입
| 유형 | 자바스크립트 타입 | 타입스크립트 타입 |
|:---:|:---:|:---:|
|수 타입|Number|number|
|불리언 타입|Boolean|boolean|
|문자열 타입|String|string|
|객체 타입|Object|object|

### let과 const 키워드

let 키워드로 변수를 선언하는 방법. let으로 선언한 변수는 코드에서 그 값이 수시로 변경될 수 있음을 암시한다.
``` typescript
let 변수이름 [= 초깃값]
```

const 키워드로 변수를 선언하는 방법. const로 변수를 선언할 때는 반드시 초깃값을 명시해야 한다. const 변수는 코드에서 변숫값이 절대 변하지 않는다는 것을 암시한다.
``` typescript
const 변수이름 = 초깃값
```

### 타입 주석
타입스크립트는 자바스크립트 변수 선언문을 확장해 타입을 명시할 수 있다. 이를 타입 주석(type annotation)이라고 한다.
``` typescript
let 변수이름: 타입 [= 초깃값]
const 변수이름: 타입 = 초깃값
```

타입 주석을 붙여 변수를 선언한 예
``` typescript
let n: number = 1;
let b: boolean = true // 혹은 false
let s: string = 'hello'
let o: object = {} 
```

let으로 선언한 변숫값은 타입 주석으로 명시한 타입에 해당하는 값으로만 바꿀 수 있다.
타입 불일치 오류 발생 예
``` typescript
let n: number = 1
let b: boolean = true // 혹은 false
let s: string = 'hello'
let o: object = {}

n = 'a'
b = 1
s = false
o = {name: 'Jack', age: 32}
```

### 타입 추론
타입스크립트는 자바스크립트와 호환성을 위해 타입 주석 부분을 생략할 수 있다. 타입스크립트 컴파일러는 대입 연산자= 오른쪽 값에 따라 변수의 타입을 지정한다. 이를 타입 추론(type inference)이라고 한다.
``` typescript
let n = 1       // n의 타입을 number로 판단
let b = true    // b의 타입을 boolean으로 판단
let s = 'hello' // s의 타입을 string으로 판단
let o = {}      // o의 타입을 object로 판단
```

컴파일러가 초깃값에 따라 타입을 추론하므로 각 변수는 초깃값에 해당하는 타입으로 지정된다. 따라서 이후에 각 변수에는 해당 타입의 값만 저장할 수 있다.

### any 타입
타입스크립트는 자바스크립트와 호환을 위해 any라는 이름의 타입을 제공한다. 변수 a는 타입이 any이므로 값의 타입과 무관하게 어떤 종류의 값도 저장할 수 있다.

``` typescript
let a:any = 0
a = 'hello'
a = true
a = {}
```

### undefined 타입
자바스크립트에서 undefined는 값이다. 변수를 초기화하지 않으면 해당 변수는 undefined 값을 가진다. 그러나 타입스크립트에서 undefined는 타입이기도 하고 값이기도 하다.
undefined 타입 예
``` typescript
let u: undefined = undefined
u = 1 // Type '1' is not assignable to type 'undefined' 오류 발생
```

변수 u는 undefined 타입으로 선언되었으므로 오직 undefined값만 가질 수 있다. 밑에서 undefined의 상위 타입인 number 타입 1을 저장하려고 했으므로 오류가 발생한다.
타입의 상속 관계를 보면 any는 모든 타입의 루트 타입, 즉 최상위 타입이다. 반면에 undefined는 모든 타입의 최하위 타입이다. 
```
                            any 
number, boolean, string                 object
                                    interface, class
                                         ...
                        undefined
```

## 객체와 인터페이스

타입스크립트의 타입 계층도에서 object 타입은 인터페이스와 클래스의 상위 타입이다. object 타입으로 선언된 변수는 number, boolean, string 타입의 값을 가질 수는 없지만, 속성 이름이 다른 객체를 모두 자유롭게 담을 수 있다.
``` typescript
let o: object = {name: 'Jack', age: 32}
o = {first: 1, second: 2}
```
object 타입은 마치 객체를 대상으로 하는 any 타입처럼 동작한다. 타입스크립트의 인터페이스 구문은 이렇게 동작하지 않게 하려는 목적으로 고안되었다. 즉, 변수 o에는 항상 name과 age 속성으로 구성된 객체만 가질 수 있게 해서 위와 같은 코드는 오류가 발생하게 한다.

### 인터페이스 선언문
타입스크립트는 객체의 타입을 정의할 수 있게 하는 interface라는 키워드를 제공한다. 인터페이스는 객체의 타입을 정의하는 것이 목적이므로 다음처럼 객체를 의미하는 중괄호 {}로 속성과 속성의 타입 주석을 나열하는 형태로 사용한다.
``` typescript
interface 인터페이스 이름 {
    속성 이름[?]: 속성 타입[,...]
}
```
인터페이스 구문 예
``` typescript
interface IPerson {
    name: string
    age: number
}
```
IPerson 인터페이스의 목적은 name과 age라는 이름의 속성이 둘 다 있는 객체만 유효하도록 객체의 타입 범위를 좁히는 데 있다. 

인터페이스의 조건을 벗어나는 예
``` typescript
interface IPerson {
    name: string
    age: number
}
let good: IPerson = {name: 'Jack', age: 32}

let bad1: IPerson = {name: 'Jack'}  // age 속성이 없으므로 오류
let bad2: IPerson = {age: 32}       // name 속성이 없으므로 오류
let bad3: IPerson = {}              // name과 age 속성이 없으므로 오류
let bad4: IPerson = {name: 'Jack', age: 32, etc: true}  // etc 속성이 있어서 오류
```

### 선택 속성 구문
인터페이스를 설계할 때 어떤 속성은 반드시 있어야 하지만, 어떤 속성은 있어도 되고 없어도 되는 형태로 만들고 싶을 때가 있다. 이러한 속성을 선택 속성(optional property)이라고 한다.

etc가 선택 속성인 IPerson2
``` typescript
interface IPerson2 {
    name: string    // 필수 속성
    age: number     // 필수 속성
    etc?: boolean    // 선택 속성
}

let good1: IPerson2 = {name: 'Jack', age: 32}
let good2: IPerson2 = {name: 'Jack', age: 32, etc: true}
```

### 익명 인터페이스
타입스크립트는 interface 키워드도 사용하지 않고 인터페이스의 이름도 없는 인터페이스를 만들 수 있다. 이를 익명 인터페이스(anonymous interface)라고 한다. 

익명 인터페이스
``` typescript
let ai: {
    name: string
    age: number
    etc?: boolean
} = {name: 'Jack', age: 32}
```
익명 인터페이스는 주로 함수를 구현할 때 사용한다.

``` typescript
function printMe(me: {name: string, age: number, etc?: boolean}) {
    console.log(
        me.etc ?
            `${me.name} ${me.age} ${me.etc}` :
            `${me.name} ${me.age}`
    )
}
printMe(ai) // Jack 32
```

## 객체와 클래스

### 클래스 선언문
타입스크립트는 객체지향 언어에서 흔히 볼 수 있는 class, private, pubilc, protected, implements, extend와 같은 키워드를 제공한다. 

클래스 선언문의 기본 형태
``` typescript
class 클래스 이름 {
    [private | protected | public] 속성 이름[?]: 속성 타입[...]
}
```

name과 age라는 속성을 가진 클래스를 선언
``` typescript
class Person1 {
    name: string
    age?: number
}
```

클래스 생성
``` typescript
let jack1: Person1 = new Person1()
jack1.name = 'Jack' 
jack1.age = 32
console.log(jack1)  // Person1 { name: 'Jack', age: 32 }
```

### 접근 제한자
클래스의 속성은 public, private, protect와 같은 접근 제한자(access modifier)를 이름 앞에 붙일 수 있다. 생략하면 public으로 간주한다.

### 생성자
타입스크립트 클래스는 constructor라는 이름의 특별한 메서드를 포함하는데, 이를 생성자(constructor)라고 한다. 

``` typescript
class Person2 {
    constructor(public name: string, public age?: number) {}
}
let jack2: Person2 = new Person2('Jack', 32)
console.log(jack2)  // Person2 { name: 'Jack', age: 32 }
```
타입스크립트 생성자의 매개변수에 public과 같은 접근 제한자를 붙이면 해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것처럼 동작한다. 즉, 클래스를 함축해서 구현한 것이다.

``` typescript
class Person3 {
    name: string
    age?: number
    constructor(name: string, age?: number) {
        this.name = name
        this.age = age
    }
}
let jack3: Person3 = new Person3('Jack', 32)
console.log(jack3)  // Person3 { name: 'Jack', age: 32 }
```

### 인터페이스 구현
다른 객체지향 언어와 마찬가지로 타입스크립트 클래스는 인터페이스를 구현할 수 있다. 클래스가 인터페이스를 구현할 때는 implements 키워드를 사용한다.
```typescript
class 클래스 이름 implements 인터페이스 이름 {
    ...
}
```
인터페이스는 이러이러한 속성이 있어야 한다는 규약(spec)에 불과할 뿐 물리적으로 해당 속성을 만들지 않는다는 점이다. 따라서 클래스 몸통에는 반드시 인터페이스가 정의하고 있는 속성을 멤버 속성으로 포함해야 한다.

인터페이스 구현 예
``` typescript
interface IPerson4 {
    name: string
    age?: number
}

class Person4 implements IPerson4 {
    name: string
    age: number
}
```

``` typescript
interface IPerson4 {
    name: string
    age?: number
}

class Person4 implements IPerson4 {
    constructor(public name: string, public age?: number) {}
}
let jack4: IPerson4 = new Person4('Jack', 32)
console.log(jack4)  // Person4 { name: 'Jack', age: 32 }
```

### 추상 클래스
타입스크립트는 다른 언어처럼 abstract 키워드를 사용해 추상 클래스를 만들 수 있다. 추상 클래스는 abstract 키워드를 class 키워드 앞에 붙여서 만든다. 추상 클래스는 자신의 속성이나 메서드 앞에 abstract를 붙여 나를 상속하는 다른 클래스에서 이 속성이나 메서드를 구현하게 한다. 

``` typescript
abstract class 클래스 이름 {
    abstract 속성 이름: 속성 타입
    abstract 메서드 이름() {}
}
```

``` typescript
abstract class AbstarctPerson5 {
    abstract name: string
    constructor(public age?: number) {}
}
```
name 속성 앞에 abstract가 붙었으므로 new 연산자를 적용해 객체를 만들 수 없다.

### 클래스의 상속
객체지향 언어는 부모 클래스를 상속받는 상속 클래스를 만들 수 있는데, 타입스크립트는 extends 키워드를 사용해 상속 클래스를 만든다.
``` typescript
class 상속 클래스 extends 부모 클래스 { ... }
```

``` typescript
class Person5 extends APerson5 {
    constructor(public name: string, age?: number) {
        super(age)
    }
}
let jack5: Person5 = new Person5('Jack', 32)
console.log(jack5)  // Person5 { name: 'Jack', age: 32 }
```
타입스크립트에서는 부모 클래스의 생성잘르 super 키워드로 호출할 수 있다.

### static 속성
다른 객체지향 언어처럼 타입스크립트 클래스는 정적인 속성을 가질 수 있다.
``` typescript
class 클래스 이름 {
    static 정적 속성 이름: 속성 타입
}
```

``` typescript
class A {
    static initValue = 1
}

let initVal = A.initValue   // 1
```
'클래스 이름.정적 속성 이름' 형태의 점 표기법(dot notation)을 사용해 값을 얻거나 설정한다.

## 객체 비구조화 할당문

인터페이스나 클래스를 사용해 관련된 정보를 묶어 새로운 타입으로 표현한다. 이를 구조화(structuring)라고 한다.
``` typescript
export interface IPerson {
    name: string
    age: number
}

export interface ICompany {
    name: string
    age: number
}
```

``` typescript
import {IPerson, ICompany} from './IPerson_ICompany'

let jack: IPerson = {name: 'Jack', age: 32}
let jane: IPerson = {name: 'Jane', age: 32}

let apple: ICompany = {name: 'Apple Computer, Inc', age: 43}
let ms: ICompany = {name: 'Microsoft', age: 44}
```

### 비구조화란?
구조화된 데이터는 어떤 시점에서 데이터의 일부만 사용해야 할 때가 있다. 구조화된 데이터를 분해하는 것을 비구조화(destructuring)라고 한다.

``` typescript
let name = jack.name, age = jack.age
```

### 비구조화 할당
비구조화 할당(destructuring)은 객체와 더불어 배열과 튜플에도 적용할 수 있다. 비구조화 할당을 객체에 적용하려면 얻고 싶은 속성을 중괄호로 묶는다.

``` typescript
let {name, age} = jack
```

``` typescript
import {IPerson} from './IPerson_ICompany'

let jack: IPerson = {name: 'Jack', age: 32}
let {name, age} = jack
console.log(name, age)  // Jack 32
```

### 잔여 연산자
점을 연이어 3개 사용하는 ...연산자를 제공한다. 이 연산자는 사용되는 위치에 따라 잔여 연산자(rest operator) 혹은 전개 연산자(spread operator)라고 부른다.

``` typescript
let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address1: 'Sinsa-dong 123-456',
    address1: '789 street, 2 Floor ABC building',
}
const {country, city, ...detail} = address
console.log(detail)
```

### 전개 연산자
점 3개 연산자가 비구조화 할당문이 아닌 곳에서 사용될 때 이를 전개 연산자(spread operator)라고 한다.
``` typescript
let coord = {...{x: 0}, ...{y: 0}}
console.log(coord)  // {x: 0, y: 0}
```

``` typescript
let part1 = {name: 'jame'}, part2 = {age: 22}, part3 = {city: 'Seoul', country: 'Kr'};
let merged = {...part1, ...part2, ...part3}
console.log(merged)
```

## 객체의 타입 변환

### 타입 변환
타입이 있는 언어들은 특정 타입의 변숫값을 다른 타입의 값으로 변환할 수 있는 기능을 제공한다. 이를 타입 변환(type conversion)이라고 한다.

### 'type conversion'과 'type casting' 그리고 'type coercion'의 차이 
type conversion은 type casting과 type coercion을 모두 포함하는 의미로 사용된다. type casting은 명시적 타입 변환(explicit type conversion)을 의미하지만, type coercion은 암시적 타입 변환(implicit type conversion)을 의미한다. '명시적'은 코드에서 직접 표현한다는 의미이고, '암시적'은 코드에 굳이 표현하지 않아도 컴파일러나 해석기가 알아서 처리한다는 의미이다.

### 타입 단언
타입스크립트는 독특하게 타입 변환이 아닌 타입 단언(type assertion)이라는 용어를 사용한다. 두가지 형태가 있다.
``` typescript
(<타입>객체)
(객체 as 타입)
```

자바스크립트의 타입 변환 구문과 구분하기 위해 타입 단언이라는 용어를 사용한다.
``` typescript
export default interface INameable {
    name: string
}
```

``` typescript
import INameable from './INameable'
let obj: object = {name: 'Jack'}

let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
console.log(name1, name2)   // Jack Jack
```