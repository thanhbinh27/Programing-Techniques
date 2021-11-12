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

function segmentXY(arr, n) {
    console.log("\nInput x, y:")
    var x = Number(prompt("Enter x: "));
    var y = Number(prompt("Enter y: "));
    console.log("\nNumber arry in " + "[" + x + ", " + y + "]" + " is:");
    for(var i = 0; i < n; i++) {
        if(x <= arr[i] && arr[i] <= y) {
            console.log(arr[i]);
        }
    } 
}

function maxPositionArray(arr, n) {
    var max = arr[0];
    var pos = 0;
    for(var i = 0; i < n; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    for(var i = 0; i < n; i++) {
        if(arr[i] == max) {
            pos = i;
        }
    }
    return console.log("arr[" + pos + "] = " + max);
}

function main() {
    console.log("\nInput number array is: ");
    inputNumber(arr, n);
    console.log("\nOutput number array is: ");
    outputNumber(arr, n);
    segmentXY(arr, n);
    console.log("\nPosition have biggest number is:");
    maxPositionArray(arr, n);
}

main();