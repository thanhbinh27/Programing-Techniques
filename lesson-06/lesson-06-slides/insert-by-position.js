var arr = [6, 9 ,1];
var n = arr.length;
console.log(n);
console.log(arr);
console.log("---");

function insertPosition(x, pos) {
    for (let i = n; i > pos; i--) {
        arr[i] = arr[i - 1];
    }
    arr[pos] = x;
    n++;
}

var x = 8;
var pos = 0;

insertPosition(x, pos);
console.log(n);
console.log(arr);