var fractionX = {
    numerator: 1,
    denominator: 2
}

var fractionY = {
    numerator: 3,
    denominator: 4
}

function multiplyFractions(fracX, fracY) {
    let a = fracX.numerator;
    let b = fracX.denominator;
    let c = fracY.numerator;
    let d = fracY.denominator;

    let fractionTemp = new Object();
    fractionTemp.numerator = a * c;
    fractionTemp.denominator = b * d;

    return fractionTemp.numerator + "/" + fractionTemp.denominator;
}

function main() {
    let fracX = fractionX;
    let fracY = fractionY;

    console.log("Multiply of 2 fractions is: " + multiplyFractions(fracX, fracY));
}

main();