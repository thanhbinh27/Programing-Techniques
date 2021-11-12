var arr = [6, 9 ,1];
var n = arr.length;
console.log(n);
console.log(arr);
console.log("---");

function insertFirst(x) {
    for (let i = n; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = x;
    n++;
}

var x = 8;

insertFirst(x);
console.log(n);
console.log(arr);