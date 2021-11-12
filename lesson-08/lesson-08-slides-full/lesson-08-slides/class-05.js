class Car {
    constructor(nameValue, colorValue, capacityValue) {
        this.name = nameValue;
        this.color = colorValue;
        this.capacity = capacityValue;
    }
}
let car1 = new Car('Mercedes', 'Green', 4);
console.log(car1);
console.log(car1.name);
console.log(car1.color);
console.log(car1.capacity);