function inputArray(n, arr) {
    for (i = 0; i < n; i++) {
        do {
            arr[i] = Number(prompt("arr[" + i + "] is:"));
        } while (arr[i] % 1 != 0);
    }
}

function outputArray(n, arr) {
    for (i = 0; i < n; i++) {
        document.write("arr[" + i + "]: " + arr[i] + "<br>");
    }
}

function calculateSum(n, arr) {
    let sum = 0;

    for (i = 0; i < n; i++) {
        if (arr[i] < 0) {
            sum += arr[i]; // sum = sum + arr[i];
        }
    }

    return sum;
}

function main() {
    var n = Number(prompt("Enter number of elements in the array (n): "));
    var arr = [];

    inputArray(n, arr);
    document.write("Our array is: <br>");
    outputArray(n, arr);
    document.write("<br>Sum of negative numbers is: " + calculateSum(n, arr));
}

main();