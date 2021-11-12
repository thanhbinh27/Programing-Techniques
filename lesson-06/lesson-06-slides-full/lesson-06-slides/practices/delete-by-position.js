let arr = ['Tý', 'Tèo', 'Tồ'];
var n = arr.length; // 3
console.log(n);
console.log(arr);
console.log("---");

function deleteByPosition(pos) {
    for (let i = pos; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
    n--;
}

var pos = 1;

deleteByPosition(pos);
console.log(n);
console.log(arr);