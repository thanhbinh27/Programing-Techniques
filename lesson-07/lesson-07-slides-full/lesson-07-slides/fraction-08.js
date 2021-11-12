var fractionX = {
    numerator: 1,
    denominator: 2
}

var fractionY = {
    numerator: -2,
    denominator: 4
}

var fractionZ = {
    numerator: 0,
    denominator: 4
}

function isPositiveFraction(fraction) {
    if (fraction.numerator * fraction.denominator == 0)
        return -1;
    if (fraction.numerator * fraction.denominator > 0)
        return true;
    return false;
}

function main() {
    if (isPositiveFraction(fractionZ) == true) {
        console.log("This is positive fraction!");
    } else if (isPositiveFraction(fractionZ) == false) {
        console.log("This is NOT positive fraction!");
    } else if (isPositiveFraction(fractionZ) == -1) {
        console.log("This fraction is not positive/negative fraction!");
    }
}

main();