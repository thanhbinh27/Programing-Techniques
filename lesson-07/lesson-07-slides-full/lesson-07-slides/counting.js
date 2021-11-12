var cars = [{ brand: 'BMW', color: 'Green', capacity: '6' },
    { brand: 'Audi', color: 'Red', capacity: '8' },
    { brand: 'Ford', color: 'Blue', capacity: '4' },
    { brand: 'Toyota', color: 'Red', capacity: '6' }
];

function countRedCar(cars) {
    let count = 0;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].color == "Red") {
            count++;
        }
    }
    return count;
}

console.log("Count of red cars is: " + countRedCar(cars));