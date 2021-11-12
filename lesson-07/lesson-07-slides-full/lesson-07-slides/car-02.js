var prompt = require('prompt-sync')();

function inputCar(car) {
    car.brand = prompt("Brand: ");
    car.color = prompt("Color: ");
    car.capacity = prompt("Capicity: ");
    return car;
}

function outputCar(car) {
    console.log(car);
}

function main() {
    var car = new Object();

    inputCar(car);
    outputCar(car);
}

main();