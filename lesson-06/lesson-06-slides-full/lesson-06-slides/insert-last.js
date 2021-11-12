var arr = [6, 9, 1];
var n = arr.length;
console.log(n);

for (let i = 0; i < n; i++) {
    console.log("arr[" + i + "]: " + arr[i]);
}

console.log("---");

var x = 8;

function insertLast(x) {
    arr[n] = x;
    n++;
}

insertLast(x);

console.log(n);
for (let i = 0; i < n; i++) {
    console.log("arr[" + i + "]: " + arr[i]);
}