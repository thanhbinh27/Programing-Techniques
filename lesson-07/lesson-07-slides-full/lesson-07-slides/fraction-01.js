// Cách 1:
var fractionA = {
    numerator: 1,
    denominator: 2,

    printFraction: function() {
        return this.numerator + "/" + this.denominator;
    }
}
console.log(fractionA);
console.log(fractionA.printFraction());

// Cách 2:
var fractionB = new Object();
fractionB.numerator = 3;
fractionB.denominator = 4;
console.log(fractionB);