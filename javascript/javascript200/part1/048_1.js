/**
 * 객체지향에서는 무수히 많은 객체들을 공통적인 특성을 기준으로 객체를 묶어서 하나의 타입으로 정의한다.
 * 이렇게 타입을 정의하는 작업을 분류(classfication)라고 하며, 이는 일종의 추상화를 하는 것이다.
 * 자바스크립트는 프로토타입 기반으로 객체지향 프로그래밍을 지원한다. 
 * 자바의 클래스 기반과의 큰 차이점으로 프로토타입으로 객체에 공통 사항을 적용할 수 있다.
 * 즉, 모든 객체는 다른 객체의 원형(Prototype)이 될 수 있다.
 * 특징을 묘사하는 원형 객체를 만들고 이 원형 객체에 기반하는 여러 객체들을 만들면 모두 같은 특징을 가질 수 있다.
 */
const studentProto = {
    gainExp: function () {
        this.exp++;
    }
}
// __proto__ 속성에 다른 객체를 할당하지 않으면 기본적으로 Object.prototype 객체가 연결되어 있다.

const harin = {
    name: '하린',
    age: 10,
    exp: 0,
    __proto__: studentProto
};

const bbo = {
    name: '뽀',
    age: 20,
    exp: 10,
    __proto__: studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(bbo);