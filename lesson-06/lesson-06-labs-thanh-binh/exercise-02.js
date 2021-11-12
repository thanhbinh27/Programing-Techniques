var prompt = require('prompt-sync')();

var n = Number(prompt("Enter n: "));
var arr = [];

function inputNumber(arr, n){
    for (var i = 0; i < n; i++){
        arr[i] = Number(prompt("Enter a number arr[" + i + "]: "));
    }
}

function outputNumber(arr, n){
    if (n > 0){
        for(var i = 0; i < n; i++){
            console.log("arr[" + i + "]: " + arr[i]);
        }
    }
    else {
        console.log("Invalid n! Input again !");
    }
}

function firstPositiveNumber(arr, n) {
    for (var i = 0; i < n; i++) {
        if (arr[i] > 0) {
            return arr[i];
        }
    }
    return -1;
}

function checkFirstPositiveNumber(arr, n) {
    console.log("\nFirst positive number:");
    if(firstPositiveNumber(arr, n) == -1) {
        console.log("No first positive number!");
    }
    else {
        console.log(firstPositiveNumber(arr, n));
    }
}

function lastEven(arr, n) {
    for(var i = n - 1; i < n; i--) {
        if (arr[i] % 2 == 0) {
            return arr[i];
        }
    }
    return -1;
}

function checkLastEven(arr, n) {
    console.log("\nLast even number in array:");
    if(lastEven(arr, n) == -1) {
        console.log("No even number in array!");
    }
    else {
        console.log(lastEven(arr, n));
    }
}

function minNumber(arr, n) {
    var min = arr[0]
    for (var i = 0; i < n; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function getMinPosition(arr, n) {
    var min = minNumber(arr, n);
    console.log("\nMinimum position in array:");
    for (i = 0; i < n; i++) {
        if(arr[i] == min) {
            console.log("arr["+ i +"]: " + arr[i]);
        }
    }
}

function minPositiveNumber(arr, n) {  
    var min;
    for(var i = 0; i < n; i++) {
        if(arr[i] > 0) {
            min = arr[i];
            break;
        }
    }
    for (var i = 0; i < n; i++) {
        if(arr[i] > 0 && arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function getMinPositiveNumber() {
    console.log("\nMinimum positive number:\n" + minPositiveNumber(arr, n))
}

function main() {
    console.log("\nInput number array is: ");
    inputNumber(arr, n);
    console.log("\nOutput number array is: ");
    outputNumber(arr, n);
    checkFirstPositiveNumber(arr, n);
    checkLastEven(arr, n);
    getMinPosition(arr, n);
    getMinPositiveNumber();
}

main();