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

function listOutOddNumbers(n, arr) {
    let oddArray = [];

    for (i = 0; i < n; i++) {
        if (arr[i] % 2 != 0 && isOddExist(arr[i], oddArray) == false) {
            oddArray[i] = arr[i];
            document.write("arr[" + i + "]: " + oddArray[i] + "<br>");
        }
    }
}

function isOddExist(arrI, oddArray) {
    for (let i = 0; i < oddArray.length; i++) {
        if (arrI == oddArray[i]) {
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
    document.write("<br>Odd numbers are: <br>");
    listOutOddNumbers(n, arr);
}

main();