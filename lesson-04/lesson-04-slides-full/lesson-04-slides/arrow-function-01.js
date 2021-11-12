// (param1, param2, paramN) => expression 

//JS
function multiply(x, y) {
    return x * y;
}
console.log(multiply(1, 2)); // 2

// ES5 
var multiply = function(x, y) {
    return x * y;
};
console.log(multiply(1, 2)); // 2

// ES6
var multiply = (x, y) => { return x * y };
console.log(multiply(1, 2)); //2

// Arrow Function
var multiply = (x, y) => x * y;
console.log(multiply(1, 2)); //2