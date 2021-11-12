var cars = [{ brand: 'BMW', color: 'Green', capacity: 6 },
    { brand: 'Audi', color: 'Red', capacity: 8 },
    { brand: 'Ford', color: 'Blue', capacity: 4 },
    { brand: 'Toyota', color: 'Red', capacity: 6 }
];

let redCar = cars.find(car => car.color === "Red");
console.log(redCar);