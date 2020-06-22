/**
 * 자바스크립트의 모든 객체 속성은 자기 자신에 대한 정보를 담고 있는 속성 기술자(Property Descriptor)를 가지고 있다.
 * 이 속성 기술자는 객체로 표현된다. Object.getOwnPropertyDescriptor를 통해 속성 기술자 객체를 가지고 올 수 있다.
 */
let user = {
    name: 'jeado'
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log('user', descriptor);

let user2 = {};
// defineProperty를 통해 해당 객체의 속성을 정의한다. (객체, 속성명, 속성 기술자)
Object.defineProperty(user2, 'name', {
    value: 'jeado', // 값을 나타낸다.
    enumerable: true, // for ... in 루프나 Object.keys 메소드같이 속성을 나열할 때 나열 가능 여부를 정의한다.
    configurable: true, // 값을 변경할 수 있는 여부를 정의한다.
    writable: false, // 속성 기술자를 변경할 수 있는 여부를 정의한다.
});
console.log('user2', user2.name);
user2.name = 'bbo';
console.log('user2', user2.name);

let user3 = {
    name: 'jeado',
    toString() {
        return this.name;
    }
};
Object.defineProperty(user3, 'toString', {
    enumerable: false,
});
for (let key in user3) {
    console.log(key);
}

let user4 = {};
Object.defineProperty(user4, 'name', {
    value: 'jeado',
    configurable: false
});
delete user4.name // 지워지지 않아야 하는데..
console.log('user4', user4);
Object.defineProperty(user4, 'name', {
    writable: true 
}); // configurable이 false 이기 때문에 TypeError: Cannot redefine property: name 발생