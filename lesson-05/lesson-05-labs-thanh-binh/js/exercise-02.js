var arr = [];
var n = Number(prompt("Enter number n: "));

function input(arr, n){
    for (var i = 0; i < n; i++){
        arr[i] = prompt("Enter a number arr[" + i + "]: ");
    }
}

function output(arr, n){
    if (n >= 0) {
        for(var i = 0; i < n ; i++){
            if (arr[i] % 2 == 0){
                document.write("a[" + i + "]: " + arr[i] + " is even number <br>");
            }
            else{
                document.write("a[" + i + "]: " + arr[i] + " is odd number <br>");
            }
        }
    }
    else {
        document.write("Invalid n! press F5 input again !");
    }
}

input(arr, n);
output(arr, n);
