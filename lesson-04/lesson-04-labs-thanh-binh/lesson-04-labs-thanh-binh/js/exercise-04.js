var n = Number(prompt("Nhập số nguyên dương n: "));
var count = 0;

function uocsochan(){
    
    if (n > 1){
        say();
        for (var i = 1; i <= n; i++){
            if (n % i == 0 && i % 2 == 0 ) count++; }
            console.log(count);
            document.write(" " + count + " số");
    }
    else{
        alert("Vì bạn nhập sai số, vui lòng nhấn F5 để nhập lại!");
        document.write("Vì bạn nhập sai số, vui lòng nhấn F5 để nhập lại!");
    }
}

function say(){
    var name;
    name = "Uước số chẵn của " + n + " có ";
    console.log(name);
    document.write(name);
}

uocsochan();