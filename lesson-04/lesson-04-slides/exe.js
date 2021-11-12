var n = 6;
dem = 0;
sum = 0;

function tong_usc2(){
    if (n >= 0){
        for (var i = 1; i <= n; i++){
            if (n % i == 0 && i % 2 == 0){          
                console.log(i);
                dem++;
                sum +=i;
            }
        }
        console.log(dem);
        console.log(sum);
    }
    else
    {
        console.log(false);
    }
}

tong_usc2();