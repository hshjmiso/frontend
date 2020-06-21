function createCounterClosure() {
    let count = 0;
    return {
        increase: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();
console.log('counter 1의 값 : ' + counter1.getCount());
counter2.increase();
console.log('counter 2의 값 : ' + counter2.getCount());

/**
 * 위 코드에서 counter1과 counter2의 메소드들이 다른 count에 접근하는 것은 다른 렉시컬 환경의 레코드에서 count에 접근하는 것이다.
 * 이러한 현상이 가능한 이유는 클로저 때문이다.
 * 클로저란 함수가 정의될 때 렉시컬 환경을 기억하는 함수를 말한다.
 * increase와 getCount 함수가 정의될 때의 렉시컬 환경은 createCounterClosure 실행 컨텍스트의 렉시컬 환경이다.
 * 이 실행 컨텍스트는 각각 생성된다. 
 * 그래서 increase 함수와 getCount 함수는 createCounterClosure 실행 컨텍스트의 렉시컬 환경을 기헉하고 있는 클로저가 된다.
 * 
 * 대체로 실행 컨텍스트가 컨텍스트 스택에서 제거되면 해당 환경은 사라지기 마련인데 위 예제처럼 클로저가 만들어지면 해당 환경은 사라지지 않는다.
 * 해당 참조가 존재하기 때문이다.
 */