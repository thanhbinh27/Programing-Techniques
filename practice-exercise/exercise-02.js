let prompt = require('prompt-sync')();

class Car {
    constructor(name, color, capacity) {
        this.name = name;
        this.color = color;
        this.capacity = capacity;
    }
}

function inputArrayCars(n, arr) {
    for (let i = 0; i < n; i++) {
        let newCar = new Car();
        newCar.name = prompt("Enter cars[" + i + "] name: ");
        newCar.color = prompt("Enter cars[" + i + "] color: ");
        newCar.capacity = Number(prompt("Enter cars[" + i + "] capacity: "));
        arr[i] = newCar;
    }
}

function outputArrayCars(n, arr) {
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            console.log(arr[i]);
        }
    }
    else {
        console.log("Invalid n! press F5 input again !");
    }

}

function listOutBMWCars(n, arr) {
    for (let i = 0; i < n; i++) {
        if (arr[i].name === "BMW") {
            console.log(arr[i]);
        }
    }
}

function sumCarCapacities(n, arr) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i].capacity;
    }
    return sum;
}

function countGreenCars(n, arr) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i].color === "Green") {
            count++;
        }
    }
    return count;
}

function findMaxCapacity(n, arr) {
    let max = arr[0];
    for (let i = 0; i < n; i++) {
        if (arr[i].capacity > max.capacity) {
            max = arr[i];
        }
    }
    return max;
}

function main() {
    let n = Number(prompt("Entter n: "))
    let arr = [];

    console.log("\n--- Input Array Cars ---");
    inputArrayCars(n, arr);

    console.log("\n--- Ouput Array Cars ---");
    outputArrayCars(n, arr);

    console.log("\n--- List Out BMW Cars ---");
    listOutBMWCars(n, arr);

    console.log("\n--- Sum Car Capacities ---");
    let sum = sumCarCapacities(n, arr);
    console.log("Sum of car Capacities is: " + sum);

    console.log("\n--- countGreenCars ---");
    let count = countGreenCars(n, arr);
    console.log("Count of green cars is: " + count);

    console.log("\n--- Find Max Capacity ---");
    let max = findMaxCapacity(n, arr);
    console.log("Max capacity: ");
    console.log(max);
}

main();