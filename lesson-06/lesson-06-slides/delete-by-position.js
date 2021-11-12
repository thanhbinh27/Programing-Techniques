var arr = [6, 8, 9, 1];
var n = arr.length;
console.log(n);
console.log(arr);
console.log("---");

function deletePosition(pos) {
    for (let i = pos; i < n - 1 ; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
    n--;
}

var pos = 1;

deletePosition(pos);
console.log(n);
console.log(arr);