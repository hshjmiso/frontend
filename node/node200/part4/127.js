const fs = require('fs');

const list = [1, 2, 3, 4, 5];

list.forEach(item => fs.appendFile('./chapters.txt', `chapter ${item}\n`, err => {
    console.log(err);
}));
/**
 * fs.appendFile()을 이용하면 파일을 새로 만들지 않고 내용을 추가 할 수 있다.
 * fs.appendFile(파일 경로 이름, 추가할 내용, callback)
 * 한 줄씩 추가될 때 순서는 비동기이기 때문에 랜덤하게 된다.
 */