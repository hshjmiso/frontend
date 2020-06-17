/**
 * for of는 list에 있는 데이터 개수만큼 하나씩 뽑아서 반복문을 실행하는 구문이다.
 */
const userList = [
    { name: 'kyeongrok', age: 31, score: 85 },
    { name: 'jihyun', age: 31, score: 95 },
    { name: 'minsup', age: 35, score: 76 },
];

for (const user of userList) {
    console.log('user:', user);
}
