// Ascending Array (mảng tăng dần)
function sortAscending(n, arr) {
    for (let i = 0; i <= n - 2; i++) {
        for (let j = n - 1; j >= i + 1; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
}

// Descending Array (mảng giảm dần)
function sortDescending(n, arr) {
    for (let i = 0; i <= n - 2; i++) {
        for (let j = n - 1; j >= i + 1; j--) {
            if (arr[j] > arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
}

function inputArray(n, arr) {
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("arr[" + i + "] is: ");
    }
}

function outputArray(n, arr) {
    for (let i = 0; i < n; i++) {
        document.write("arr[" + i + "]: " + arr[i] + "<br>");
    }
}

function main() {
    let n, arr;
    arr = [];

    do {
        n = Number(prompt("Enter number of elements in array: "));
    } while (n > 0 && n % 1 != 0 && typeof n == "number");

    document.write("--- Bubble Sort --- <br>");
    inputArray(n, arr);

    document.write("Array before sorting is: <br>");
    outputArray(n, arr);

    sortAscending(n, arr); // Ascending Array

    document.write("<br>Array after sort ascending is: <br>");
    outputArray(n, arr);

    sortDescending(n, arr); // Descending Array

    document.write("<br>Array after sort descending is: <br>");
    outputArray(n, arr);
}

main();