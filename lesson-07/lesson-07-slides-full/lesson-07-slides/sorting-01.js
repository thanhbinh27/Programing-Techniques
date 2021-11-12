var prompt = require('prompt-sync')();

function inputCar(car, i) {
    car.brand = prompt("Brand cars[" + i + "]: ");
    car.color = prompt("Color cars[" + i + "]: ");
    car.capacity = prompt("Capacity cars[" + i + "]: ");
    return car;
}

function outputCar(car) {
    console.log(car);
}

function inputCarArray(n, cars) {
    for (let i = 0; i < n; i++) {
        var car = new Object();
        cars[i] = inputCar(car, i);
        console.log("\n");
    }
}

function outputCarArray(n, cars) {
    for (var i = 0; i < n; i++) {
        outputCar(cars[i]);
    }
}

function interchangeSort(n, cars) {
    for (let i = 0; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            if (Number(cars[i].capacity) < Number(cars[j].capacity)) {
                let temp = cars[i];
                cars[i] = cars[j];
                cars[j] = temp;
            }
        }
    }
}

function main() {
    var cars = [];
    var n = Number(prompt("Enter number car in array (n): "));

    console.log("\nInput car array is: ");
    inputCarArray(n, cars);

    console.log("\nOutput car array is: ");
    outputCarArray(n, cars);

    interchangeSort(n, cars);

    console.log("\nAfter sorting: ");
    outputCarArray(n, cars);
}

main();