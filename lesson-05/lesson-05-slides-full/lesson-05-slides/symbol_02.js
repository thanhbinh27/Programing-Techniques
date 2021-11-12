// var check = Symbol() === Symbol();
// console.log(check); //false

var check = Symbol();
console.log(check);
console.log(Symbol());
var isCompare = check === Symbol();
console.log(isCompare); // false