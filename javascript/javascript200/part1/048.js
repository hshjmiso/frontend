/**
 * 객체지향 프로그래밍이란, 프로그램을 객체들로 구성하고 객체들 간에 서로 상호작용하도록 작성하는 방법이다.
 * 객체지향에서 객체란, 식별 가능한 구체적인 사물 또는 추상적인 개념이라고 정의한다.
 * 객체는 특징적인 행동과 변경 가능한 상태를 가진다.
 * 자바스크립트에서는 함수 값으로 가지는 속성을 메소드라고 하는데, 이 메소드를 특징적인 행동이며,
 * 그 외에 다른 값들은 변경 가능한 상태라고 볼 수 있다.
 */
const teacherJay = {
    name: '제이',
    age: 30,
    teachJavascript: function(student) {
        student.gainExp();
    }
}

const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0,
    gainExp: function() {
        this.exp++;
    }
}
console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);