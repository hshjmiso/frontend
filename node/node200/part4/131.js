const fs = require('fs');

fs.readFile('./list.json', (err, data) => {
    if (err) throw err;
    const json = JSON.parse(data.toString());
    console.log('name: ', json[0].name);
    console.log('name: ', json[1].name);
});
/** 
 * JSON.parse()는 JSON String 객체를 자바스크립트 오브젝트로 변환하는 기능을 가지고 있다.
 * 즉, JSON.stringify()의 기능과 반대되는 역할을 한다고 볼 수 있다.
 * JSON.parse(변환할 문자열)
 */
