var fractionX = {
    numerator: 1,
    denominator: 2
}

var fractionY = {
    numerator: 3,
    denominator: 4
}

function sumFractions(fracX, fracY) {
    let a = fracX.numerator;
    let b = fracX.denominator;
    let c = fracY.numerator;
    let d = fracY.denominator;

    let fractionTemp = new Object();
    fractionTemp.numerator = (a * d) + (c * b);
    fractionTemp.denominator = b * d;

    return fractionTemp.numerator + "/" + fractionTemp.denominator;
}

function main() {
    let fracX = fractionX;
    let fracY = fractionY;

    console.log("Sum of 2 fractions is: " + sumFractions(fracX, fracY));
}

main();