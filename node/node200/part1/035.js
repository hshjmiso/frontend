/**
 * .forEach()를 이용하면 값을 하나씩 뽑아서 바로 함수에 넣어서 계산할 때 편하다.
 * each는 각각이라는 뜻이다.
 */
const listUser = [
    { name: 'kyeongrok', age: 31 },
    { name: 'jihyun', age: 31 },
    { name: 'minsup', age: 35 },
];

listUser.forEach(function(user){
    console.log(user);
});
console.log('--------------------');
// arrow function
listUser.forEach(user => console.log(user));
