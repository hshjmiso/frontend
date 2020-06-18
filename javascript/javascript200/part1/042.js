/**
 * const 키워드는 선언 시 값을 할당해야 하고 이후에 재할당을 할 수 없다.
 */
const URL = 'http://js.com';
URL = 'http://js.com'; // TypeError: Assignment to constant variable

if (true) {
    const URL2 = 'http://js.com';
}

console.log(URL2);