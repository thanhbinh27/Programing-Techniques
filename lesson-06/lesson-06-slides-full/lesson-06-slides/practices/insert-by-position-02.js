var arr = ['Tý', 'Tèo', 'Tồ'];
var n = arr.length;
console.log(n);
console.log(arr);
console.log("---");

function insertByPosition(x, pos) {
    for (let i = n; i > pos; i--) {
        arr[i] = arr[i - 1];
    }
    arr[pos] = x;
    n++;
}

var x = 'Vy';
var pos = 1;

insertByPosition(x, pos);
console.log(n);
console.log(arr);