let cars1 = ['BMW', 'Mercedes'];
let cars2 = cars1;
// console.log(cars1); // ['BMW', 'Mercedes']
// console.log(cars2); // ['BMW', 'Mercedes']

cars2 = ['Toyota', 'Hyundai'];
console.log(cars1); // ['BMW', 'Mercedes']
console.log(cars2); // ['Toyota', 'Hyundai']