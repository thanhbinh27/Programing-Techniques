var prompt = require('prompt-sync')();

class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    printFraction() {
        return this.numerator + "/" + this.denominator;
    }
}


let arr = [];
let n = Number(prompt("Enter n: "));

function inputNumber(n, arr) {
    for (var i = 0; i < n; i++) {
        let fraction = new Fraction()
        fraction.numerator = Number(prompt("Enter fractions [" + i + "] numerator: "));
        fraction.denominator = Number(prompt("Enter fractions [" + i + "] demominator: "));
        arr[i] = fraction;
    }
}

function countFractionPositive(n, arr) {
    var count = 0;

    for (var i = 0; i < n; i++) {
        if (arr[i].numerator > 0 && arr[i].denominator > 0) {
            count ++;
        }
    }
    return count;
}

function findMaxFraction(n, arr) {
    var max = arr[0];

    for (var i = 0; i < n; i++) {
        if (max.numerator/max.denominator < arr[i].numerator/arr[i].denominator ) {
            max = arr[i];
        }
    }
    return max;
}

function sortDescending(n, arr) {
    for (let i = 0; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            if (arr[i].numerator/arr[i].denominator > arr[j].numerator/arr[j].denominator) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function main() {
    console.log("\n--- Input Array Fractions ---");
    inputNumber(n, arr);

    console.log("\n--- Output Array Fractions ---");
    console.log(arr);

    console.log("\n--- Count Fraction Positive ---");
    console.log("Count Fraction Positive is: " + countFractionPositive(n, arr));

    console.log("\n--- Count Fraction Positive ---");
    console.log("Largest fraction is: ");
    console.log(findMaxFraction(n, arr));

    sortDescending(n, arr)
    console.log("\n--- Array after sort descending ---");
    console.log(arr);
}

main();

