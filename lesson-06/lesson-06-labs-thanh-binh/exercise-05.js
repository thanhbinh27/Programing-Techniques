var prompt = require('prompt-sync')();

var n = Number(prompt("Enter n: "));
var arr = [];

function inputNumber(arr, n) {
    for (var i = 0; i < n; i++){
        arr[i] = Number(prompt("Enter a number arr[" + i + "]: "));
    }
}

function outputNumber(arr, n) {
    if (n > 0){
        for(var i = 0; i < n; i++) {
            console.log("arr[" + i + "]: " + arr[i]);
        }
    }
    else {
        console.log("Invalid n! Input again!");
    }
}

function countEven(n, arr) {
    console.log("\nEven number in array:")
    var count = 0;
    for(var i = 0; i < n; i++) {
        if (arr[i] % 2 == 0 && arr[i] >= 0) {
        count++;
        }
    }
    return count;
}

function countDivisible(n, arr) {
    console.log("\nPositive number and divisible by 7:")
    var count2 = 0;
    for(var i = 0; i < n; i++) {
        if (arr[i] % 7 == 0 && arr[i] > 0) {
        count2++;
        }
    }
    return count2;
}

function countX(n, arr) {
    console.log("");
    var x = Number(prompt("Enter x: "));
    console.log("Number of occurrences of x:")
    var countx = 0;
    for(var i = 0; i < n; i++) {
        if (arr[i] == x) {
        countx++;
        }
    }
    return countx;
}

function main() {
    console.log("\nInput number array is: ");
    inputNumber(arr, n);
    console.log("\nOutput number array is: ");
    outputNumber(arr, n);
    console.log(countEven(n, arr));
    console.log(countDivisible(n, arr));
    console.log(countX(n, arr));
}

main();