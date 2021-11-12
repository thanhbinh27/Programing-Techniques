class Car {
    constructor(name, color, capacity) {
        this.name = name;
        this.color = color;
        this.capacity = capacity;
    }
}

let car1 = new Car('Mercedes', 'Black', 4);
console.log(car1);
console.log(car1.name);
console.log(car1.color);
console.log(car1.capacity);

let car2 = new Car('BMW', 'Grey', 4);
console.log(car2);
console.log(car2.name);
console.log(car2.color);
console.log(car2.capacity);