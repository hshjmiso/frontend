/**
 * 클래스는 별도 타입의 객체를 생성하는 설계 도면이라 볼 수 있다.
 * 클래스를 통해 객체가 가져야 할 상태와 행위들을 속성과 메소드로 정의할 수 있다.
 * 특정 클래스를 통해 만들어진 객체를 해당 클래스이 인스턴스라고 한다.
 */

 class Cart {
     constructor() {
         this.store = {};
     }

     addProduct(product) {
         this.store[product.id] = product;
     }

     getProduct(id) {
         return this.store[id];
     }
 }

const cart1 = new Cart();

cart1.addProduct({id: 1, name: '노트북'});
console.log(cart1.store);

const p = cart1.getProduct(1);
console.log(p);