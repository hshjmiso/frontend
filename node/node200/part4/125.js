const fs = require('fs');

fs.readFile('./message.txt', (err, data) => {
    if (err) throw err;
    console.log('async work01');
    console.log(data.toString());
});
/**
 * 비동기 방식은 동기 방식에 비해 속도가 빠르기 때문에 실제 프로젝트에서도 많이 사용하는 방식이다.
 * 여러 개의 파일에 있는 여러 줄의 내용을 동시에 처리해야 하는 경우 비동기의 장점을 확인할 수 있다.
 * 비동기 방식은 return이 없기 때문에 다음에 실행할 로직을 callback 함수를 이용해 넘겨주고, 
 * 바로 이어서 실행하는 구조이다. (err, data) => {} 함수를 넘겼다.
 */
