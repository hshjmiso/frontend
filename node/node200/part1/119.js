const printHello = () => console.log('hello');

exports.printHello = printHello;

exports.printMessage = (message) => {
    console.log(message);
};
/**
 * 프로그램 규모가 커지면 재사용 해야 하는 코드들이 있다. 
 * 이럴 때는 다른 곳에서도 사용해야 하기 때문에 모듈별로 분리를 해야한다.
 * 모듈을 분리하고 다른 곳에서 불러와 쓰게 하려면 exports를 사용한다.
 * exports한 모듈을 불러 오려면 require를 사용해야 한다.
 * exports.함수 이름 = 위에서_선언한_함수_이름
 * exports.함수 이름 = (message) => { console.log(message); 
 */
