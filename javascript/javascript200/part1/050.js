/**
 * 자바스크립트에서 생성자 함수로부터 만들어진 객체는 그 생성자 함수의 프로토타입(Prototype)객체를 상속한다.
 * 즉, 모드 인스턴스는 해당 생성자 함수의 프토로타입 객체의 속성과 메소드들을 사용할 수 있다.
  
 * 자바스크립트에서 모든 함수는 prototype 속성으로 프로토타입 객체를 가진다.
 * 모든 객체는 __proto__ 속성을 가지는데 이 __proto__ 속성은 해당 객체를 생성한 함수의 prototype 객체를 가리킨다.
 * 그래서 생성자 함수를 통해서 타입을 정의할 수 있다.
 */

function Storage() {
    this.dataStore = {};
}
Storage.prototype.put = function(key, data) {
    this.dataStore[key] = data;
}
Storage.prototype.getData = function(key) {
    return this.dataStore[key];
}
const productStorage = new Storage();
productStorage.put('id001', {name: '키보드', price: 2000});
console.log(productStorage.getData('id001'));

function RemovableStorage() {
    Storage.call(this);
}
RemovableStorage.prototype = Object.create(Storage.prototype);
RemovableStorage.prototype.removeAll = function() {
    this.dataStore = {};
}
const productStorage2 = new RemovableStorage();
productStorage2.put('id001', {name: '키보드', price: 2000});
productStorage2.removeAll();
const item2 = productStorage2.getData('id001');
console.log(item2);