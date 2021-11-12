var iphonexPrice = Number(prompt("Enter iPhoneX price: "));
var backupPhoneChargerPrice = Number(prompt("Enter backup phone charger price: "));
var voucher = Number(prompt("Enter Voucher: "));
const TAX_RATE = 0.08;

var question = confirm("Bạn đã nhập đầy đủ các thông tin món hàng chưa?");

if (question == true)
{
    console.log(question + ": Chấp nhận kết quả");
}
else 
{
    console.log(question + ": Hủy kết quả, vui lòng thực hiện thao tác lại từ đầu");
    document.write("Vì đã Cancle nên hủy kết quả, vui lòng thực hiện lại thao tác từ đầu")
    document.write("<br>");
}

var total = (iphonexPrice + backupPhoneChargerPrice) * TAX_RATE;
var totalPay = (iphonexPrice + backupPhoneChargerPrice + total) - voucher;

alert("Total amount Teo has to pay: " + totalPay);
console.log("Total amount Teo has to pay: " + totalPay);
document.write("Total amount Teo has to pay: " + totalPay);