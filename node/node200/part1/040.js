/**
 * Timestamp란, '타임스탬프' 또는 '타임스템프'라고 읽는다. 날짜와 시간을 숫자로 표현해 놓은 값이다.
 * 자바스크립트에서는 총 13자리의 숫자를 쓴다.
 * 숫자로 표현할 때 1970년 1월 1일 0시 0분 0초 000을 기준으로 한다.
 * 그리고 +1이 될 때마다 1밀리초(sec)씩 증가한다.
 */
const date = new Date();
const dateToTimestamp = date.getTime();
const timestampToDate = new Date(1570274211107);
const timestampToInit = new Date(1);

console.log('Date to timestamp', dateToTimestamp);
console.log('Initial timestamp', timestampToInit);
console.log('Timestamp to date', timestampToDate);