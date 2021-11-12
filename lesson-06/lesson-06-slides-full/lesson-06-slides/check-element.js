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

function checkOddSmallerThan5(n, arr) {
    let flag = false;

    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 != 0 && arr[i] < 5) {
            flag = true;
        }
    }

    return flag;
}

function main() {
    var n = Number(prompt("Enter number of elements in the array (n): "));
    var arr = [];

    generateRandomArray(n, arr);
    document.write("Our array is: <br>");
    outputArray(n, arr);
    document.write("<br>Is exist at least one odd element in array (true/false)? " + checkOddSmallerThan5(n, arr));
}

main();