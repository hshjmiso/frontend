# 타입스크립트와 개발 환경 만들기

## 트랜스 파일

ESNext 자바스크립트 소스코드는 바벨(Babel)이라는 트랜스파일러(transpiler)를 거치면 ES5 자바스크립트 코드로 변환된다. 바벨과 유사하게 타입스크립트 소스코드는 TSC(TypeScript compiler)라는 트랜스파일러를 통해 ES5 자바스크립트 코드로 변환된다.
여기서 트랜스파일러란, 어떤 프로그래밍 언어로 작성된 소스코드를 또 다른 프로그래밍 언어로 된 소스코드로 바꿔주는 프로그램을 말한다. 트랜스파일러는 텍스트로 된 소스코드를 바이너리 코드로 바꿔주는 컴파일러(compiler)와 구분하기 위해 생긴 용어이다.

Polyfill(폴리필) / Transpiler(트랜스파일러)

## 타입스크립트 고유의 문법 살펴보기

### 타입 주석과 타입 추론

``` typescript
let n: number = 1;
let m = 2;
```
변수 n뒤에는 콜론(:)과 타입 이름이 있다. 이것을 '타입 주석(type annotation)'이라고 한다.
변수 m 처럼 타입 부분을 생략할 수도 있다. 생략되면 대입 연산자(=)의 오른쪽 값을 분석해 왼쪽 변수의 타입을 결정한다. 이를 '타입 추론(type inference)'이라고 한다. 타입스크립트의 타입 추론 기능은 자바스크립트 소스코드와 호환성을 보장하는 데 큰 역할을 한다. 타입 추론 덕분에 자바스크립트로 작성된 '.js'파일을 확장하지만 '.ts'로 바꾸면 타입스크립트 환경에서도 바로 동작한다.

### 인터페이스

``` typescript
interface Person {
    name: string
    age?: number
};

let person: Person = { name: "Jane" };
```

### 튜플

파이썬과 같은 몇몇 프로그래밍 언어에는 튜플(tuple)이라는 타입이 있다. 튜플은 물리적으로는 배열과 같다. 다만, 배열에 저장되는 아이템의 데이터 타입이 모두 같으면 배열, 다르면 튜플이다.

``` typescript
let numberArray: number[] = [1, 2, 3]; // 배열
let tuple: [boolean, number, string] = [true, 1, 'Ok']; // 튜플 
```

### 제네릭 타입

``` typescript
class Container<T> {
    constructor(public value: T) { }
}
let numberContainer: Container<number> = new Container<number>(1);
let stringContainer: Container<string> = new Container<string>('Hello world');
```

제네릭 타입은 다양한 타입을 한꺼번에 취급할 수 있게 해준다. 다음 코드에서 Container 클래스는 value 속성을 포함한다. 이 클래스는 Container<number>, Container<string>, Container<number[]>, Container<boolean>처럼 여러 가지 타입을 대상으로 동작할 수 있는데 이를 '제네릭 타입(generic type)'이라고 한다.

### 대수 타입
ADT란, 추상 데이터 타입(abstract data type)을 의미하기도 하지만 대수 타입(algebraic  data type)이라는 의미로도 사용된다. 대수 타입이란, 다른 자료형의 값을 가지는 자료형을 의미한다. 대수 타입에는 크게 합집합 타입(union 또는 sum type)과 교집합 타입(intersection 또는 product type) 두 가지가 있다. 합집합 타입은 '|' 기호를, 교집합 타입은 '&' 기호를 사용해 다음 코드처럼 여러 타입을 결합해서 만들 수 있다.

``` typescript
type NumberOrString = number | string // 합집합 타입 예
type AnimalAndPerson = Animal & Person // 교집합 타입 예
```

### 타입스크립트 컴파일러 설치

```
npm i -g typescript
tsc -v
```
타입스크립트는 nodejs 환경에서만 동작한다. 따라서 nodejs의 패키지 관리자인 npm을 사용해서 설치한다.
typescript 패키지는 서버와 클라이언트로 동작하는 두 개의 프로그램을 포함하고 있다. 따라서 타입스크립트 컴파일러 이름은 패키지 이름과 달리 'tsc'이다. 즉, 타입스크립트 컴파일러(typescript compiler)와 클라이언트(client)라는 의미가 동시에 있다.

### ts-node 설치
tsc는 타입스크립트 코드를 ES5 형식의 자바스크립트 코드로 변환만 할 뿐 실행하지는 않는다. 만약, 타입스크립트 코드를 ES5로 변환하고 실행까지 동시에 하려면 ts-node라는 프로그램을 설치해야 한다. ts-node는 다음 명령으로 설치할 수 있다.
```
npm i -g ts-node
```