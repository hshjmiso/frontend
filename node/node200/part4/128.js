const fs = require('fs');

const dirName = `${__dirname}/img`;

if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
}
/**
 * (출력 값은 없고 실행한 디렉토리 내 'img' 디렉토리가 생성됨)
 * ${__dirname}은 실행 환경 디렉토리의 절대경로를 받아오게 된다.
 * fs.existsSync(dirName) 함수는 dirName에서 지정한 디렉토리가 있는지 확인하는 함수이다.
 * 존재하지 않을 경우에만 fs.mkdirSync(dirName)를 실행시켜서 dirName대로 경로와 이름에 디렉토리를 생성한다.
 */