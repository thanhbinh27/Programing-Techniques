var prompt = require('prompt-sync')();

class Coordinates {
    constructor(xintercept, yintercept) { // x-intercept: tung độ, y-intercept: hoành độ
        this.xintercept = xintercept;
        this.yintercept = yintercept;
    }
}

let arr = [];
let n = Number(prompt("Enter n: "));

function inputNumber(n, arr) {
    for (var i = 0; i < n; i++) {
        let coordinates = new Coordinates()
        coordinates.xintercept = Number(prompt("Enter coordinates [" + i + "] xintercept: "));
        coordinates.yintercept = Number(prompt("Enter coordinates [" + i + "] yintercept: "));
        arr[i] = coordinates;
    }
}

function countYinterceptPositive(n, arr) {
    var count = 0;
    for (var i = 0; i < n; i++) {
        if (arr[i].yintercept > 0) {
            count++;
        }
    }
    return count;
}

function findMaxXintercpt(n, arr) {
    var max = arr[0];

    for (var i = 0; i < n; i++) {
        if (arr[i].xintercept > max.xintercept) {
            max = arr[i];
        }
    }
    return max;
}

function main() {
    console.log("\n--- Input Array Coordinates ---");
    inputNumber(n, arr);

    console.log("\n--- Ouput Array Coordinates ---");
    console.log(arr)

    console.log("\n--- Count Y-intercept Positive ---");
    console.log("Count Y-intercept Positive: " + countYinterceptPositive(n, arr));

    console.log("\n--- Find Max X-intercpt ---");
    console.log(findMaxXintercpt(n, arr));
}

main();