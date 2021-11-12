var prompt = require('prompt-sync')();

function initCarsArray(n, cars) {
    for (var i = 0; i < n; i++) {
        var newCar = new Object();
        newCar.name = prompt("Enter cars[" + i + "] name: ");
        newCar.brand = prompt("Enter cars[" + i + "] brand: ");
        cars[i] = newCar;
    }

    console.log("\nCar array is:");
    for (var i = 0; i < n; i++) {
        console.log(cars);
    }
}

function main() {
    var cars = [];
    var n = prompt("Enter number car in array (n): ");

    initCarsArray(n, cars);
}

main();