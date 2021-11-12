var arr = [6, 9, 1, 8];
var n = arr.length; // 4
console.log(n);
console.log(arr);
console.log("---");

function deleteLast() {
    arr.length--; //arr[4] = arr[4]-1 = arr[3]
    n--; // 4-1=3
}

deleteLast();
console.log(n);
console.log(arr);