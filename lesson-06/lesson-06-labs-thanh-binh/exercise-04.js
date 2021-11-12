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

function sumNumber(arr, n) {
    var sum = 0;
    for(var i = 0; i < n; i++) {
        sum += arr[i];
    }
    console.log("\nSum of elements in array:\n" + sum);
}

function sumNumberPositive(arr, n) {
    console.log("\nPositive sum of elements in array:");
    var sum2 = 0;
    for(var i = 0; i < n; i++) {
        if(arr[i] > 0) {
            sum2 += arr[i];
        }
    }
    return sum2;
}

function findFirstOdd(n) {
    var u;
    n = Math.abs(n);
    while(n >= 10) {
        u = n % 10;
        n /= 10;
    }
    if(n % 2 == 0) {
        return 0;
    }
    return 1;
}

function sumFirstOdd(n, arr) {
    console.log("\nSum of element ​​whose first digit is odd in array:")
    var sum3 = 0;
    for(var i = 0; i < n; i++) {
        if(findFirstOdd(arr[i]) == 1) {
            sum3 += arr[i];
        }
    }
    return sum3;
}

function main() {
    console.log("\nInput number array is: ");
    inputNumber(arr, n);
    console.log("\nOutput number array is: ");
    outputNumber(arr, n);
    sumNumber(arr, n);
    console.log(sumNumberPositive(arr, n));
    console.log(sumFirstOdd(n, arr));
}

main();
