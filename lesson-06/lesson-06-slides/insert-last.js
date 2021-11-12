let phone = ['Iphone', 'Samsung', 'Vivo',' Oppo'];
var n = phone.length;
console.log(phone);

var x = 'Bphone' ;
function insertLast(x){
    phone[n] = x ;
    n++;
}

insertLast(x);
console.log(phone);