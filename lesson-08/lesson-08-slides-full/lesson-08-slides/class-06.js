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

let myCar = new Car('Ferrari', 2012);
console.log(myCar);
console.log("Xe của tui đã " + myCar.age() + " tuổi.");