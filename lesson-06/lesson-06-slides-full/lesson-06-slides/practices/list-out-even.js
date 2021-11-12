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

function listOutEvenNumbers(n, arr) {
    let evenArray = [];

    for (i = 0; i < n; i++) {
        if (arr[i] % 2 == 0 &&
            isEvenExist(arr[i], evenArray) == false) {
            evenArray[i] = arr[i];
            document.write("arr[" + i + "]: " + evenArray[i] + "<br>");
        }
    }
}

function isEvenExist(num, evenArray) {
    for (let i = 0; i < evenArray.length; i++) {
        if (num == evenArray[i]) {
            return true;
        }
    }
    return false;
}

function main() {
    var n = Number(prompt("Enter number of elements in the array (n): "));
    var arr = [];

    generateRandomArray(n, arr);
    document.write("Our array is: <br>");
    outputArray(n, arr);
    document.write("<br>Even numbers are: <br>");
    listOutEvenNumbers(n, arr);
}

main();