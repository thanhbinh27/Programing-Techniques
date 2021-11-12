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

function findMax(n, arr) {
    let element = arr[0];

    for (let i = 0; i < n; i++) {
        if (arr[i] > element) {
            element = arr[i];
        }
    }

    return element;
}

function main() {
    var n = Number(prompt("Enter number of elements in the array (n): "));
    var arr = [];

    generateRandomArray(n, arr);
    document.write("Our array is: <br>");
    outputArray(n, arr);
    document.write("<br>Max number is: " + findMax(n, arr));
}

main();