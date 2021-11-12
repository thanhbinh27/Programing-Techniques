var arr1 = [9, 100, 45, 33];
console.log("Array 01 is: ");
console.log(arr1.sort());
// => [100, 33, 45, 9] // NOT sort

function compareNumbers(a, b) {
    return a - b; // Sắp xếp tăng dần
    //     b - a; // Sắp xếp giảm dần
}

var arr2 = [9, 100, 45, 33];
console.log("Array 02 is: ");
console.log(arr2.sort(compareNumbers));
// => [9, 33, 45, 100] // sorted

var arr = [100, 232, 3, 123];
console.log(arr.sort());