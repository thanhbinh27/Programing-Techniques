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
        console.log("Invalid n! Input again!");
    }
}

function listedOdd(arr, n) {
    console.log("\nOdd numbers in array:");   
    if(arr[i] % 2 != 0 && arr[i] > 0) {
        for(var i = 0; i < n; i++){
            console.log(arr[i]);
        }
    }
    else {
        console.log("No odd number in array!");
    }
}

function totalNegativeNumber(arr, n) {
    console.log("\nTotal negative number in array:");
    var demam = 0;
    for(var i = 0; i < n; i++) {
        if(arr[i] < 0) {
            demam++;
        }
    }
    console.log(demam);
}

function isPrime(i){
    var flag = true;
    var i;
    var j;

    if(i < 2){
        flag = false;
    }
    else{
        for (j = 2; j <= i - 1; j++){
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}

function prime() {
    var count = 0;
    console.log("\nTotal prime in array");
    if(n >= 2) {
        for(i = 2; i <= n; i++){
            if (isPrime(i) == true && isPrime(i) < 100){
                count++;               
            }
        }
    }
    console.log(count);
}

function biggestNumber(n, arr) {
    console.log("\nBiggest number in array:")
    var max = arr[0];
    for (var i = 1; i < n; i++){
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

function findEven(n, arr) {
    var flag = false;
    console.log("\nIs there an even and less than 100 in array?");   
    for(var i = 0; i < n; i++) {
        if(arr[i] % 2 == 0 && arr[i] < 100) {
            flag = true;
        }
        else {
            flag = false;
        }
    return flag;  
    }
}

function checkFindEven(n, arr) {
    if(findEven(n, arr) == false){
        console.log("No!");
    }
    else {
        console.log("Yes!");
    }
}

function main() {
    console.log("\nInput number array is: ");
    inputNumber(arr, n);
    console.log("\nOutput number array is: ");
    outputNumber(arr, n);
    listedOdd(arr, n);
    totalNegativeNumber(arr, n)
    prime();
    console.log(biggestNumber(n, arr));
    checkFindEven(n, arr);
}

main();