
// Ascending Array (mảng tăng dần)
function sortAscending(n, arr) {
    for (let i = 0; i <= n -2; i++) {
        for(let j = n + 1; j < i - 1; j++) {
            if (arr[j] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// Descending Array (mảng giảm dần)
function sortAscending(n, arr) {
    for (let i = 0; i <= n -2; i++) {
        for(let j = n + 1; j <= n - 1; j++) {
            if (arr[j] > arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j] = temp;
            }
        }
    }
}