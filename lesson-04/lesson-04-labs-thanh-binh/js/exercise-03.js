var n = Number(prompt("Nhập n: "));
var sum = 0;

function tong_usc(){
    if (n > 1)
    { 
        say();
        for(var i = 1; i <= n; i++) {
            if(n % i == 0 && i % 2 == 0) {
                sum += i;
            } 
        }
        console.log(sum);
        document.write(sum);
    }
    else{   
        alert("Vì bạn nhập sai số (n > 1), vui lòng nhấn F5 để nhập lại!");
        document.write("Vì bạn nhập sai số (n > 1), vui lòng nhấn F5 để nhập lại!");
    }
}

function say(){
    var name;
    name = "Tổng ước số chẵn của " + n + " là: ";
    console.log(name);
    document.write(name);
}

tong_usc()
