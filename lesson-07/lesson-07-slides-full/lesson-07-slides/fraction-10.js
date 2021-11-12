var fractionX = {
    numerator: 2,
    denominator: 4,

    printFraction: function() {
        return this.numerator + "/" + this.denominator;
    }
}

var fractionY = {
    numerator: 1,
    denominator: 2,

    printFraction: function() {
        return this.numerator + "/" + this.denominator;
    }
}

function homogenizeDenominator(x, y) {
    let bc = x.denominator * y.denominator;
    x.numerator = x.numerator * y.denominator;
    y.numerator = y.numerator * x.denominator;
    x.denominator = bc;
    y.denominator = bc;
}

function compare2Fractions(x, y) {
    if (x.numerator == y.numerator) return -1;

    if (x.numerator > y.numerator) return 1;
    else return 0;
}

function main() {

    homogenizeDenominator(fractionX, fractionY);

    if (compare2Fractions(fractionX, fractionY) == -1)
        console.log("FractionX = fractionY");
    else if (compare2Fractions(fractionX, fractionY) == 1)
        console.log("FractionX > fractionY");
    else if (compare2Fractions(fractionX, fractionY) == 0)
        console.log("FractionX < fractionY");
}

main();