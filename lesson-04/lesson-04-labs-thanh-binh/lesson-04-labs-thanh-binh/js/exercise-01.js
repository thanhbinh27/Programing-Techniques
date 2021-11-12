var n = Number(prompt("Nhập số nguyên dương n: "));

function uocso(){
    if (n > 0){    
        for( var i = 1; i <= n; i++)
        {
            if(n % i == 0){
                console.log(i);
                document.write("<br>" + i);            
            }
        } 
    }
    else{
        alert("Vì bạn nhập sai số, vui lòng nhấn F5 để nhập lại!");
        document.write("Vì bạn nhập sai số, vui lòng nhấn F5 để nhập lại!");
    }   
}

function say(){
        var name;
        name = "Các ước số của số " + n + " là: ";
        console.log(name);
        document.write(name);    
}

say();
uocso();

