var prompt = require('prompt-sync')();

var n = Number(prompt("Enter n: "));
var arr = [];

function inputArray(arr, n) {
    for (var i = 0; i < n; i++){
        arr[i] = Number(prompt("Enter a number arr[" + i + "]: "));
    }
}

function outputArray(arr, n) {
    if (n > 0){
        for(var i = 0; i < n; i++) {
            console.log("arr[" + i + "]: " + arr[i]);
        }
    }
    else {
        console.log("Invalid n! Input again!");
    }
}



function sumEvenPositive(arr, n) {
    var sum = 0;
    for(var i = 0; i < n; i++)
    if(arr[i] > 0 && arr[i] % 2 == 0 ) {
        sum += arr[i];
    }
    return sum;
}

function findMinPositiveNumbers(arr, n) {
    var min = arr[0]
    for(var i = 0; i < n; i++)
    if(arr[i] < min ) {
        min = arr[i];
    }
    return min;
}

function sortDescending(arr, n) {
    for (let i = 0; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function main() {
    inputArray(arr, n);
    outputArray(arr, n);
    console.log("Sum Even Positive: " + sumEvenPositive(arr, n));
    console.log("Min:" + findMinPositiveNumbers(arr, n));

    sortDescending(arr, n); // Descending Array

    console.log("\nArray after sort descending is:");
    outputArray(arr, n);
}

main();