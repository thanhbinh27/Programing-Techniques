function printAmount(amt) {
    console.log(amt.toFixed(2));
}

function formatAmount() {
    return "$" + amount.toFixed(2);
}

var amount = 99.99;
printAmount(amount * 2); // "199.98"
amount = formatAmount();
console.log(amount); // "$99.99"