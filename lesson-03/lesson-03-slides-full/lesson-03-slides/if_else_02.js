const ACCESSORY_PRICE = 9.99; //giá phụ kiện
var bank_balance = 302.13; //số dư ngân hàng
var amount = 99.99;
amount = amount * 2; //giá điện thoại tăng gấp đôi

//can we afford the extra purchase?
if (amount < bank_balance) {
    console.log("I'll take the accessory!");
    amount = amount + ACCESSORY_PRICE;
} else {
    console.log("No, thanks. I don't have enough money!");
}