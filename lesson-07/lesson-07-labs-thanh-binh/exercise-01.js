var prompt = require('prompt-sync')();

console.log("\nInput fraction:")
var fractionX = {
    numerator: Number(prompt("Enter numerator of X:")),
    denominator: Number(prompt("Enter denominator of X:")),

    printFraction: function () {
        return this.numerator + "/" + this.denominator;
    }
}

var fractionY = {
    numerator: Number(prompt("Enter numerator of Y:")),
    denominator: Number(prompt("Enter denominator of Y:")),

    printFraction: function () {
        return this.numerator + "/" + this.denominator;
    }
}

function outputFraction() {
    console.log("\nOutput fraction:")
    console.log("Fraction X: " + fractionX.numerator + "/" + fractionX.denominator);
    console.log("Fraction Y: " + fractionY.numerator + "/" + fractionY.denominator);
}

function findGCD(a, b) {
    if (a == 0 && b != 0) {
        return b;
    } else if (b == 0 && a != 0) {
        return a;
    } else if (a == 0 && b == 0) {
        return false;
    } else if (a % b == 0) {
        return b;
    } else if (b % a == 0) {
        return a;
    } else {
        while (a != b) {
            if (a > b) {
                a -= b;
            } else {
                b -= a;
            }
        }
    }
    return a;
}

function gCD() {
    console.log("\nGreatest common divisor of fraction X: " + findGCD(fractionX.numerator, fractionX.denominator));
    console.log("Greatest common divisorof fraction Y: " + findGCD(fractionY.numerator, fractionY.denominator));
}

function reduceFraction() {
    factionReduceX = fractionX.numerator / findGCD(fractionX.numerator, fractionX.denominator) + "/" + fractionX.denominator / findGCD(fractionX.numerator, fractionX.denominator);
    console.log("\nFaction X is: " + fractionX.numerator + "/" + fractionX.denominator);
    console.log("Simplify fraction X: " + factionReduceX);

    factionReduceY = fractionY.numerator / findGCD(fractionY.numerator, fractionY.denominator) + "/" + fractionY.denominator / findGCD(fractionY.numerator, fractionY.denominator);
    console.log("\nFaction Y is: " + fractionY.numerator + "/" + fractionY.denominator);
    console.log("Simplify fraction Y: " + factionReduceY);
}

function sumFractions(x, y) {
    var a = x.numerator;
    var b = x.denominator;
    var c = y.numerator;
    var d = y.denominator;

    let fractionTemp = new Object();
    fractionTemp.numerator = (a * d) + (c * b);
    fractionTemp.denominator = b * d;

    console.log("\nSum of 2 fractions is: " + fractionTemp.numerator + "/" + fractionTemp.denominator);
    return fractionTemp.numerator / findGCD(fractionTemp.numerator, fractionTemp.denominator) + "/" + fractionTemp.denominator / findGCD(fractionTemp.numerator, fractionTemp.denominator);
}

function outputSumFractions() {
    let x = fractionX;
    let y = fractionY;
    console.log("Simplify sum of 2 fractions is: " + sumFractions(x, y));
}

function multiplyFractions(x, y) {
    var a = x.numerator;
    var b = x.denominator;
    var c = y.numerator;
    var d = y.denominator;

    let fractionTemp = new Object();
    fractionTemp.numerator = a * c;
    fractionTemp.denominator = b * d;

    console.log("\nMultiply of 2 fractions is: " + fractionTemp.numerator + "/" + fractionTemp.denominator);
    return fractionTemp.numerator / findGCD(fractionTemp.numerator, fractionTemp.denominator) + "/" + fractionTemp.denominator / findGCD(fractionTemp.numerator, fractionTemp.denominator);
}

function outputMultiplyFractions() {
    let x = fractionX;
    let y = fractionY;
    console.log("Simplify multiply of 2 fractions is: " + multiplyFractions(x, y));
}

function isSimplestFractionX() {
    let result = findGCD(fractionX.numerator, fractionX.denominator);
    if (result == 1)
        return 1;
    return 0;
}

function isSimplestFractionY() {
    let result = findGCD(fractionY.numerator, fractionY.denominator);
    if (result == 1)
        return 1;
    return 0;
}

function checkSimplestFractions() {
    if (isSimplestFractionX() == 1 && isSimplestFractionY() == 1)
        console.log("\nFractions is simplest!");
    else ("Fractions is NOT simplest!")
}

function isPositiveFractionX() {
    if (fractionX.numerator * fractionX.denominator > 0)
        return 1;
    return 0;
}

function isPositiveFractionY() {
    if (fractionY.numerator * fractionY.denominator > 0)
        return 1;
    return 0;
}

function checkPositiveFractions() {
    if (isPositiveFractionX() == 1 && isPositiveFractionY() == 1)
        console.log("Fractions is positive!")
    else ("Fractions is NOT positive!")
}

function homogenizeDenominator(fractionX, fractionY) {
    let bc = fractionX.denominator * fractionY.denominator;
    fractionX.numerator = fractionX.numerator * fractionY.denominator;
    fractionY.numerator = fractionY.numerator * fractionX.denominator;
    fractionX.denominator = bc;
    fractionY.denominator = bc;
}

function checkHomogenizeDenominator() {
    console.log("\nBefore homogeniza denominator: ");
    console.log("FractionX is: " + fractionX.printFraction());
    console.log("FractionY is: " + fractionY.printFraction());

    homogenizeDenominator(fractionX, fractionY);

    console.log("\nAfter homogeniza denominator: ");
    console.log("FractionX is: " + fractionX.printFraction());
    console.log("FractionY is: " + fractionY.printFraction());
}

function compare2Fractions(fractionX, fractionY) {
    if (fractionX.numerator == fractionY.numerator) return -1;

    if (fractionX.numerator > fractionY.numerator) return 1;
    else return 0;
}

function checkCompare2Fractions() {
    if (compare2Fractions(fractionX, fractionY) == -1)
        console.log("\nFractionX = fractionY");
    else if (compare2Fractions(fractionX, fractionY) == 1)
        console.log("\nFractionX > fractionY");
    else if (compare2Fractions(fractionX, fractionY) == 0)
        console.log("\nFractionX < fractionY");
}

function main() {
    outputFraction();
    gCD();
    reduceFraction();
    outputSumFractions();
    outputMultiplyFractions();
    checkSimplestFractions();
    checkPositiveFractions();
    checkHomogenizeDenominator();
    checkCompare2Fractions();
}
main();