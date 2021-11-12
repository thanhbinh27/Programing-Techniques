var cars = [{ brand: 'BMW', color: 'Green', capacity: 6 },
    { brand: 'Audi', color: 'Red', capacity: 8 },
    { brand: 'Ford', color: 'Blue', capacity: 4 },
    { brand: 'Toyota', color: 'Red', capacity: 6 }
];

function compareCar(car1, car2) {
    if (car1.capacity < car2.capacity) return -1;
    if (car1.capacity > car2.capacity) return 1;
    if (car1.capacity == car2.capacity) return 0;
}

function findMaxCapacity(cars) {
    var max = cars[0];
    for (let i = 0; i < cars.length; i++) {
        if (compareCar(cars[i], max) == 1) {
            max = cars[i];
        }
    }
    return max;
}

console.log(findMaxCapacity(cars));