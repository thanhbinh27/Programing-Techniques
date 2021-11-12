
function isPrime(i){
    var flag = true;
    var j;

    if(i < 2){
        flag = false;
    }
    else{
        for (j = 2; j <= i - 1; j++){
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}

function listPrimes(){    
    var n = Number(prompt("Nhập n: "));
    var i ;

    if (n >= 2){
        console.log("Các số nguyên tố từ 1 -> " + n + " là: ");
        document.write("Các số nguyên tố từ 1 -> " + n + " là: ");
        for(i = 2; i <= n; i++){
            if (isPrime(i) == true){
                    console.log(i);
                    document.write("<br>"+ i);
            } 
        }
    }
    else{
        console.log(n + " không phải là số nguyên tố !");
        document.write(n + " không phải là số nguyên tố !");
    }
}

listPrimes();

