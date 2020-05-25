/**
 * 다른 프로그래밍 언어와 달리 자바스크립트는 숫자의 형태를 구체적으로 나눠 정의하지 않는다.
 정수, 부동 소수점, 작은 수, 큰 수 등 여러 유형의 숫자를 숫자형(Number) 하나로 정의한다.
 이와 같은 자바스크립트의 숫자형은 64-bit Floating Point(64비트 부동 소수점)이다.
 국제 IEEE 754 표준에 따라 정의된 방식으로, 숫자값을 64 비트 정보로 저장한다.
 숫자는 비트 0~51에 저장되고, 지수는 비트 52~62, 그리고 부호는 비트 63에 저장된다.
 이외에도 자바스크립트에는 Infinity, NaN 값이 있다. 숫자형으로 분류되지만, 숫자와는 다른 역할을 수행한다
 */
console.log(Infinity);
console.log(1 / Infinity);
console.log(0 / 0);
console.log(Infinity - Infinity);
console.log(0 / '말도 안되는 값');