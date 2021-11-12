var add = function sum(val1, val2){
    return val1 + val2;
};

var result1 = add(10, 20);
var result2 = sum(10, 20); // sum is not defined
console.log("result1: " + result1);
console.log("result2: " + result2);