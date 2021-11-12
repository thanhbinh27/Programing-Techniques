var arr = [6, 8, 9, 1];
var n = arr.length; // 4
console.log(n);
console.log(arr);
console.log("---");

function deleteByPosition(pos) {
    for (let i = pos; i < n; i++) {
        arr[i] = arr[i + 1];
    }
    console.log(arr);
    arr.length--;
    n--;
}

var pos = 1;

deleteByPosition(pos);
console.log(n);
console.log(arr);