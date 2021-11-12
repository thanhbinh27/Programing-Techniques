const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
let bank_balance = 303.91;
let amount = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

// continue buy if have enough money
while (amount < bank_balance) {
    // buy new phone
    amount = amount + PHONE_PRICE;
    // can we buy accessories?
    if (amount < SPENDING_THRESHOLD) {
        amount = amount + ACCESSORY_PRICE;
    }
}

// calculate amount again with tax
amount = amount + calculateTax(amount);
console.log("Your purchase: " + formatAmount(amount));

// You used: $334.76
// Can you pay for it?
if (amount > bank_balance) {
    console.log("You can't afford this purchase. :(");
}