var arr = [6, 9 ,1 ,8];
var n = arr.length;
console.log(n);
console.log(arr);

console.log("----------");

function deleteFirst() {
    //arr.splice(-1, 1); // .splice(start position, delete count)
    //n--;
    for (let i = n; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    n--;
}

deleteFirst();
console.log(n);
console.log(arr);