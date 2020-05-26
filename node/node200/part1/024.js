/**
 * '=='와 '==='의 차이점
 * '=='는 단순히 값만 비교하지만 '==='는 값과 Type을 같이 비교한다.
 */

 const a = 5;
 const b = 6;

 if (a == 5) {
     console.log(a == 5);
     console.log(a == b);
     console.log(a == '5');
 }

 if (a === 5) {
    console.log(a === 5);
    console.log(a === b);
    console.log(a === '5'); // equal value and equal type
}

if (a > b) {
    console.log(a > b);
}

if (a < b) {
    console.log(a < b);
}

if (a >= 5) {
    console.log(a >= 5);
    console.log(a >= b);
}

if (a <= 5) {
    console.log(a <= 5);
    console.log(a <= b);
}