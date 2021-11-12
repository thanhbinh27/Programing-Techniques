let prompt = require('prompt-sync')();

function inputArray(n, arr) {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt("Enter a number arr[" + i + "]: "));
    }
}

function outputArray(n, arr) {
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            console.log("a[" + i + "]: " + arr[i]);
        }
    }
    else {
        console.log("Invalid n! press F5 input again !");
    }
}

function listOutNegativeNumbers(n, arr) {
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            console.log("a[" + i + "]: " + arr[i]);
        }
    }
}

function sumEvenPositiveNumbers(n, arr) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0 && arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}


function countOddSmallerThan10(n, arr) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 10 && arr[i] % 2 != 0) {
            count++;
        }
    }
    return count;
}

function findMaxPositiveNumbers(n, arr) {
    let max = arr[0];
    for (let i = 0; i < n; i++) {
        if (max < arr[i]) {
           max = arr[i];
        }
    }
    return max;
}

function sortAscending(n, arr) {
    for (let i = 0; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function sortDescending(n, arr) {
    for (let i = 0; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

//---------------------------Bubble-sort----------------------------------

// Ascending Array (mảng tăng dần)
// function sortAscending(n, arr) {
//     for (let i = 0; i <= n - 2; i++) {
//         for (let j = n - 1; j >= i + 1; j--) {
//             if (arr[j] < arr[j - 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j - 1];
//                 arr[j - 1] = temp;
//             }
//         }
//     }
// }

// // Descending Array (mảng giảm dần)
// function sortDescending(n, arr) {
//     for (let i = 0; i <= n - 2; i++) {
//         for (let j = n - 1; j >= i + 1; j--) {
//             if (arr[j] > arr[j - 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j - 1];
//                 arr[j - 1] = temp;
//             }
//         }
//     }
// }

//---------------------------Insertion-sort----------------------------------

// Ascending Array (mảng tăng dần)
// function sortAscending(n, arr) {
//     for (let i = 1; i < n; i++) {
//         var x = arr[i];
//         var j;

//         for (j = i - 1;
//             (j >= 0 && arr[j] > x); j--) {
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = x;
//     }
// }

// // Descending Array (mảng giảm dần)
// function sortDescending(n, arr) {
//     for (let i = 1; i < n; i++) {
//         var x = arr[i];
//         var j;

//         for (j = i - 1;
//             (j >= 0 && arr[j] < x); j--) {
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = x;
//     }
// }

function main() {
    let n = Number(prompt("Enter n: "));
    let arr = [];

    console.log("\n--- Input Array ---");
    inputArray(n, arr);
    
    console.log("\n--- Output Array ---");
    outputArray(n, arr);

    console.log("\n--- List Out Negative Numbers ---");
    listOutNegativeNumbers(n, arr);

    console.log("\n--- Sum Even Positive Numbers ---");
    let sum = sumEvenPositiveNumbers(n, arr);
    console.log("Sum of even positive numbers is: " + sum);

    console.log("\n--- Count Odd Smaller Than 10 ---");
    let count = countOddSmallerThan10(n, arr);
    console.log("Count of odd smaller than 10: " + count);

    console.log("\n--- Find Max Positive Numbers ---");
    let max = findMaxPositiveNumbers(n, arr);
    console.log("Max positive numbers is: " + max);

    console.log("");
    sortAscending(n, arr);
    console.log("--- Array sort ascending ---");
    outputArray(n, arr);

    console.log("");
    sortDescending(n, arr);
    console.log("--- Array sort descending ---");
    outputArray(n, arr);
}
main();