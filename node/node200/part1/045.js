/**
 * Parameter(매개변수) 함수를 선언할 때 외부에서 받은 값을 어떤 이름의 변수에 넣을지 지정해 놓은 것이다.
   * 매개변수는 함수가 외부로부터 값을 받을 때 사용하는 '변수'이다.
   * 값이 넘어오는 매개체가 된다고 해서 '매개변수'라고 한다.
 
 * Argument(인수) 함수로 넘기는 값 자체를 말한다.
   * printMessage('hello');에서 'hello'
 */
function printMessage(pMessage) {
    console.log(pMessage);
}
printMessage('hello');

const printMessage2 = (pMessage) => {
    console.log(pMessage);
}
printMessage2('bye');