/**
 * 속성 계산명 (Computed Property Name)은 속성 이름을 정의하는 다른 방법이다. 
 * 대괄호[] 안에 식을 넣거나 변수를 대입하여 동적으로 객체 속성들을 생성할 수 있다.
 */

let obj = {};
for (let i = 0; i < 4; i++) {
    obj['key' + i] = i;
}
console.log(obj);

let profile = 'chloe:30';
let person = {
    [profile]: true,
    [profile.split(':')[0]]: profile.split(':')[1]
};
console.log(person);