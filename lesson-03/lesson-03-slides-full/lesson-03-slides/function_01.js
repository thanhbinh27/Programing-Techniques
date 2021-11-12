function printAmount() {
    console.log(amount.toFixed(2));
}

var amount = 99.99;
printAmount(); // "99.99"
amount = amount * 2;
printAmount(); // "199.98"