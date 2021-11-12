var prompt = require('prompt-sync')();

function findGCD(a, b) {
    if (a == 0 && b != 0) {
        return b;
    } else if (b == 0 && a != 0) {
        return a;
    } else if (a == 0 && b == 0) {
        return false; // do not have GCD
    } else if (a % b == 0) {
        return b;
    } else if (b % a == 0) {
        return a;
    } else { // a!=0, b!=0
        while (a != b) {
            if (a > b) {
                a = a - b;
            } else { // a <= b
                b = b - a;
            }
        }
    }
    return a;
}

function main() {
    var a = prompt("Enter a: ");
    var b = prompt("Enter b: ");

    console.log("Greatest common divisor is: " + findGCD(a, b));
}

main();