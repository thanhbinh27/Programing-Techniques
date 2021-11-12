var arr1 = [9, 100, 45, 33];
console.log(arr1.sort(function(a, b) {
    return a - b;
}));
// => [9, 33, 45, 100] // ascending

var arr2 = [9, 100, 45, 33];
console.log(arr2.sort(function(a, b) {
    return b - a;
}));
// => [100, 45, 33, 9] // descending