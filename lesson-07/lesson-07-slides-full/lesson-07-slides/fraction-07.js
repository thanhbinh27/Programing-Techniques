var fractionX = {
    numerator: 1,
    denominator: 2
}

var fractionY = {
    numerator: 2,
    denominator: 4
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

function isSimplestFraction(fraction) {
    let result = findGCD(fraction.numerator, fraction.denominator);
    if (result == 1)
        return true;
    return false;
}

function main() {
    console.log("Fractions is simplest or not? " + isSimplestFraction(fractionY));
}

main();