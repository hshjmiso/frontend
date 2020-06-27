/**
 * 객체를 생성하기 위해 직접적으로 객체를 반환해도 되지만, 
 * new 키워드를 사용하여 함수를 호출하게 되면 return 문이 없어도 새로운 객체가 반환된다.
 * 그리고 함수 바디에서 this 키워드를 사용하여 반환되는 객체의 초기 상태와 행위를 정의할 수 있다.
 
 * 객체를 생성하는 역할을 하는 함수를 생성자 함수라고 하는데 생성자 함수는 new 키워드를 사용하지 않으면 
 * 일반적인 함수와 동일하게 동작하며 새로운 객체를 반환하지 않는다.
 * 그렇기 때문에 함수명을 대문자로 시작하는 관례를 가진다.
 */

/**
 * 객체에 타입이 적용되면 해당 객체는 그 타입의 인스턴스라고 부른다. 
 * 앞의 예제에서는 두 객체 모두가 학생 타입의 인스턴스라 할 수 있다.
 * 생성자 함수는 새로운 타입을 정의하는데 사용된다.
 * 그래서 new 키워드로 만들어진 객체는 해당 타입의 인스턴스가 된다.
 */
function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
        console.log(student + '에게 ' + this.subject + '를 가르친다.');
    };
}

const jay = new Teacher('jay', 30, 'Javascript');
console.log(jay);
jay.teach('bbo');

console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher('jay', 30, 'Javascript'); 
console.log(jay2);
console.log(age);
/**
 * new 키워드를 빼고 Teacher 생성자 함수를 호출한다.
 * 이때 생성자 함수의 this는 전역 객체를 가리키게 된다.
 * 전역 객체에 name과 age 그리고 subject 속성으로 전달받은 매개변수가 할당된다.
 * 전역 변수 age를 참조해 30이 출련된다. 
 * 새로운 객체가 반환되지 않아 jay2는 undefined가 출련된다.
 */

/**
 * 생성자 함수의 new 호출을 통한 객체 생성 과정
 
 * 빈 객체를 만든다.
 * 만든 빈 객체를 this에 할당한다.
 * 생성자 함수 바디의 코드를 실행한다.(this에 속성 및 메소드 추가)
 * 만든 빈 객체의 __proto__에 생성자 함수의 prototype 속성을 대입한다.
 * this를 생성자의 반환값으로 변환한다.
 */