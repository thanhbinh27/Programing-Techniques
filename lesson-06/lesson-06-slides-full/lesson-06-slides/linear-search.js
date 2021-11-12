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

function findMaxEvenLessThan10(n, arr) {
    let element = arr[0];

    for (let i = 0; i < n; i++) {
        if (arr[i] > element && arr[i] % 2 == 0 && arr[i] < 10) {
            element = arr[i];
        }
    }

    return element;
}

function main() {
    var n = Number(prompt("Enter number of elements in the array (n): "));
    var arr = [];

    document.write("--- Linear Search --- <br>");
    generateRandomArray(n, arr);
    document.write("Our array is: <br>");
    outputArray(n, arr);
    document.write("<br>Max numbers less than 10 are: " + findMaxEvenLessThan10(n, arr) + "<br>");
}

main();