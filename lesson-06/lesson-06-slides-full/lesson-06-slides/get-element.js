let arr = [6, 9, 1];
// let firstElement = arr[0];
// console.log(firstElement); // 6

// let n = arr.length;
// console.log(n); // 3

// let lastElement = arr[n - 1];
// console.log(lastElement); // 1

// let x = 1;
// let positionXElement = arr[x];
// console.log(positionXElement); // 9

// let lastElementWithSlice = arr.slice(-1);
// console.log(lastElementWithSlice); // 6

arr = [6, 9, 1, 5, 3]; // index positive: 0,1,2,3,4
console.log(arr);

let positionXElementWithSlice = arr.slice(0, 2);
console.log(positionXElementWithSlice); // 6

let arr15 = arr.slice(2, 4); // 1, 5
console.log(arr15);

let arr53 = arr.slice(3, 5); // 5, 3
console.log(arr53);

arr = [6, 9, 1, 5, 3]; // index negative: -5,-4,-3,-2,-1

let arr91 = arr.slice(-4, -2); // 9, 1
console.log(arr91);

let arr915Negative = arr.slice(-4, -1); // 9, 1, 5
console.log(arr915Negative);

let arr915Positive = arr.slice(1, 4); // 9, 1, 5
console.log(arr915Positive);

function getIndexOfElement(x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x)
            return i;
    }
    return -1;
}

console.log(getIndexOfElement(5)); // 3