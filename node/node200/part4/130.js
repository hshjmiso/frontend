const fs = require('fs');

const userList = [
    { name: 'kyeongrok', age: 31 },
    { name: 'jihyun', age: 31 },
];

fs.writeFile('./list.json', JSON.stringify(userList), err => {
    console.log(err);
});
/**
 * JSON.stringify()는 JSON 오브젝트를 JSON 문자열(String)로 변환 해준다.
 */