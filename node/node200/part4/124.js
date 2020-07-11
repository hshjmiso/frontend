const fs = require('fs');

const data = fs.readFileSync('./message.txt');
const string = data.toString();
console.log('sync work01');
console.log(string);
/**
 * readFileSync 함수는 동기적 읽기 함수로, 함수가 실행되면 해당 파일을 읽으면서 다른 작업을 동시에 할 수 없게 된다.
 * 동기로 파일을 읽는 방법이 동시성을 해치기 때문에 프로그램 실행을 느리게 할 수 있지만,
 * 설정 파일을 읽고 적용해야 하거나 사용자 로그 파일을 보고 출입을 허가해야 하는 등 실행 순서를 반드시 보장해야 할 때 등 활용할 수 있는 상황이 많다.
 */
