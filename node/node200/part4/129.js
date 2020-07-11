const testFolder = './';
const fs = require('fs');

const filenameList = fs.readdirSync(testFolder);

filenameList.forEach((fileName) => {
    console.log(fileName);
});
/**
 * 특정 디렉토리에 있는 파일명을 출력하는 예제이다. 파일을 다루는 작업을 할 때 해당 디렉토리에 파일이 있는지,
 * 작업한 파일이 잘 만들어 졌는지 등 디렉토리에 있는 파일들의 이름을 알고 싶을 때 사용한다.
 * readdirSync() 함수는 함수의 인자로 디렉토리의 경로를 받아 해당 경로에 있는 파일 리스트를 배열로 저장하는 함수이다.
 */
