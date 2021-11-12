class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Car('Lamborghini', 2003)
console.log(myCar);
console.log("Xe của tôi đã " + myCar.age() + " tuổi.");