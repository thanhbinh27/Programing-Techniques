var fractionX = {
    numerator: 1,
    denominator: 2,

    printFraction: function() {
        return this.numerator + "/" + this.denominator;
    }
}

var fractionY = {
    numerator: 3,
    denominator: 4,

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

function main() {
    console.log("Before homogeniza denominator: ");
    console.log("FractionX is: " + fractionX.printFraction());
    console.log("FractionY is: " + fractionY.printFraction());

    homogenizeDenominator(fractionX, fractionY);

    console.log("\nAfter homogeniza denominator: ");
    console.log("FractionX is: " + fractionX.printFraction());
    console.log("FractionY is: " + fractionY.printFraction());
}

main();