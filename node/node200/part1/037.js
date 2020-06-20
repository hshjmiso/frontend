/**
 *
 */
const today = new Date();
const date1 = new Date(2017, 9 - 1, 2);
const date2 = new Date(2017, 8, 3); // 월은 1부터 세지 않고 0부터 11까지 세기 때문에
const date3 = new Date(2017, 8, 3, 18);
const date4 = new Date(2017, 8, 3, 18, 20);
const date5 = new Date(2017, 8, 3, 18, 20, 30);

console.log(today.toLocaleString());
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());