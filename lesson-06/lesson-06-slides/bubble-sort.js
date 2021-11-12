
// Ascending Array (mảng tăng dần)
function sortAscending(n, arr) {
    for (let i = 0; i <= n -2; i++) {
        for(let j = n - 1; j >= i + 1; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
}

// Ascending Array (mảng giảm dần)
function sortAscending(n, arr) {
    for (let i = 0; i <= n - 2; i++) {
        for(let j = n - 1; j >= i + 1; j--) {
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
        arr[i] = prompt("arr[" + i + "] is: ")
    }
}

function outputArray(n, arr) {
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("arr[" + i + "] is: ")
    }
}
    