var prompt = require('prompt-sync')();

var fraction = {
    numerator: 1,
    denominator: 1,

    printFraction: function() {
        let a = this.numerator;
        let b = this.denominator;

        if (a == 0 && b != 0) {
            return 0;
        } else if (a != 0 && b == 0) {
            return "Cannot reduce this fraction!";
        }

        return this.numerator + "/" + this.denominator;
    }
}

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

function reduceFraction(fractionA) {
    let fractionReduced = fraction;
    let fractionGCD = findGCD(fractionA.numerator, fractionA.denominator);

    if (fractionGCD == false) {
        return "Cannot reduce this fraction!";
    }

    fractionReduced.numerator = fractionA.numerator / fractionGCD;
    fractionReduced.denominator = fractionA.denominator / fractionGCD;
    return fractionReduced.printFraction();
}

function main() {
    var a = prompt("Enter a: ");
    var b = prompt("Enter b: ");

    var fractionA = new Object();
    fractionA.numerator = a;
    fractionA.denominator = b;

    console.log("Fraction reduced is: " + reduceFraction(fractionA));
}

main();