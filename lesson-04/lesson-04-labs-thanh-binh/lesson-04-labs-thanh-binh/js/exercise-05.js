var n = Number(prompt("Nhập số nguyên dương n: ")); //6
var sumPerfectNumber = 0;

function sohoanthien(){
    for (var i = 1; i < n; i++)
        if (n % i == 0){  
            sumPerfectNumber += i;  
        } 
    if (sumPerfectNumber == n){
        console.log(n + " là số hoàn thiện");
        document.write(n + " là số hoàn thiện");
    }
    else{
        console.log(n + " không phải là số hoàn thiện");
        document.write(n + " không phải là số hoàn thiện");
    }
}

sohoanthien();
