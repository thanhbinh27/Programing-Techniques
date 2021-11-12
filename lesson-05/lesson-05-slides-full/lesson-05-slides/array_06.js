// Input array:
var arr = [];
var n = Number(prompt("Enter number n: "));

function input(arr, n) {
    for (var i = 0; i < n; i++) {
        arr[i] = prompt("Enter a number arr[" + i + "]: ");
    }
}

// Output array:
function output(arr, n) {
    for (var i = 0; i < n; i++) {
        document.write("a[" + i + "]: " + arr[i] + "<br>");
    }
}

// Call function:
input(arr, n);
output(arr, n);