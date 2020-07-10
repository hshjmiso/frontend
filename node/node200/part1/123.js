const fs = require('fs');

const contents = 'hello\nbye\n안녕';
// 첫 번째 인자로 파일 경로를 넣고, 두 번째 인자로 파일에 쓸 내용을 넣는다. 세 번째 인자 callback 함수 필수!!
fs.writeFile('./message.txt', contents, err => {
    console.log(err);
});
/**
 * fs.writeFile()을 실행하면 소스코드를 실행한 위치에 message.txt라는 파일이 생성되고 파일의 내용이 입력된다.
 */
