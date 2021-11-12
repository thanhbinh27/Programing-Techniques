arr = [6, 9, 1, 5, 3];
console.log(arr[2]); // 1

arr[2] = 2;
console.log(arr[2]); // 2

function updateXElement(x, pos) { //x: value to update, pos: postion update
    for (let i = 0; i < arr.length; i++) {
        if (i == pos) {
            arr[i] = x;
        }
    }
}

let x = 8,
    pos = 1;

console.log(arr[1]); // 9
updateXElement(x, pos);
console.log(arr[1]); // 8