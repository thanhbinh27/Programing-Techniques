var TAX_RATE = 0.08; // 8% sale tax
var amount = 99.99;
amount = amount * 2;
amount = amount + (amount * TAX_RATE);
console.log(amount); // kết quả sớ 215.9784
console.log(amount.toFixed(2)); // thành 1 chuỗi "215.98"
                                // nếu làm tròn thành 1 số hay tùy thích chọn hàm toFixed(1) hoặc (3)(4) tùy mình

//--------------------------------
var TAX_RATE = 0.08; // 8% sale tax
var amount = 99.99;
amount = amount * 2;
TAX_RATE - 0.09;
amount = amount + (amount * TAX_RATE);
console.log(amount); 
console.log(amount.toFixed(2)); 
// => vẫn chạy được và thay đổi kết quả bởi TAX_RATE = 0.09; vì mình sử dụng var TAX_RATE

//--------------------------------
const TAX_RATE = 0.08; // 8% sale tax
var amount = 99.99;
amount = amount * 2;
TAX_RATE - 0.09;
amount = amount + (amount * TAX_RATE);
console.log(amount); 
console.log(amount.toFixed(2)); 
// => không chạy được báo lỗi vì sử dụng biến const TAX_RATE là ko đc thay đổi giá trị sau này 
