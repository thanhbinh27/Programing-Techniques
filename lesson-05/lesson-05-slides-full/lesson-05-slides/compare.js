//Tham trị
// let name1 = 'Giang';
// let name2 = name1;
// let name3 = 'Đức';
// let name4 = name2;
// console.log(name1); //'Giang'
// console.log(name2); //'Giang'
// console.log(name3); //'Đức'
// console.log(name4); //'Giang'

// console.log("---");

// name1 = 'Tèo';
// name3 = name1;
// name4 = name2;
// console.log(name1); //'Tèo'
// console.log(name2); //'Giang'
// console.log(name3); //'Tèo'
// console.log(name4); //'Giang'

//Tham chiếu
let subjects1 = ['Toán', 'Lý'];
let subjects2 = ['Văn', 'Anh'];
subjects2 = subjects1;
console.log(subjects1); //['Toán', 'Lý']
console.log(subjects2); //['Toán', 'Lý']

console.log("---");

let subjects3 = ['Văn', 'Anh'];
subjects1 = subjects3;
console.log(subjects1); //['Văn', 'Anh']
console.log(subjects2); //['Văn', 'Anh']
console.log(subjects3); //['Văn', 'Anh']