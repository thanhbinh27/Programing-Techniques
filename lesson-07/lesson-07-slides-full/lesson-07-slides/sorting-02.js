var cars = [{ brand: 'BMW', color: 'Green', capacity: '6' },
    { brand: 'Audi', color: 'Red', capacity: '8' },
    { brand: 'Ford', color: 'Blue', capacity: '4' }
];
console.log(cars);

cars.sort(function(car1, car2) {
    if (car1.capacity < car2.capacity) return 1;
    if (car1.capacity > car2.capacity) return -1;
    if (car1.capacity == car2.capacity) return 0;
});

console.log(cars);