var arr = [];
var n = Number(prompt("Enter number n: "));


function input(n, arr) {
    for (var i = 0; i < n; i++) {
        if(n > 0) {
        arr[i] = Number(prompt("Enter a number arr [" + i + "]: "));
        }
    }
}


function sumEven(n, arr) {
    var sum = 0;
    if (n > 0) {
        for(var i = 0; i < n; i++) {
            if(arr[i] % 2 != 0) {
                sum += arr[i];
            }
        }
        document.write("Odd element sum: " + sum );
    }
    else {
        document.write("Invalid n! press F5 input again !");
    }
}

input(n, arr);
sumEven(n, arr);

