const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) { //amt = 99.99
    //calculate the new amount with the tax
    amt = amt + (amt * TAX_RATE); //amt = 99.99 + (99.99 * 0.08)
    // return the new amount

    return amt; //107.99
}

var amount = 99.99;
amount = calculateFinalPurchaseAmount(amount);
console.log(amount.toFixed(2)); // "107.99"