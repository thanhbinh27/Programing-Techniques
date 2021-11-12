function generateRandomArray(n, arr) {
    for (i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * n) + 1;
    }
}

function outputArray(n, arr) {
    for (i = 0; i < n; i++) {
        document.write("arr[" + i + "]: " + arr[i] + "<br>");
    }
}

function countEvenNumbers(n, arr) {
    let count = 0;

    for (i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            count += 1;
        }
    }

    return count;
}

function main() {
    var n = Number(prompt("Enter number of elements in the array (n): "));
    var arr = [];

    generateRandomArray(n, arr);
    document.write("Our array is: <br>");
    outputArray(n, arr);
    document.write("<br>Count of even numbers is: " + countEvenNumbers(n, arr));
}

main();