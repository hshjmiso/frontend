const fs = require('fs');

const renameFile = (fromFilePathName, toFilePathName) => {
    fs.rename(fromFilePathName, toFilePathName, (err) => {
        if (err) console.log(`ERROR: ${err}`);
    });
};

const fromFilePathName = './hello.txt';
const toFilePathName = './bye.txt';

renameFile(fromFilePathName, toFilePathName);
/**
 * 한 개의 파일 이름을 변경하는 코드
 * fs.rename(from_경로_파일명, to_경로_파일명, (err) => { 에러났을 때 수행할 코드});
 */
