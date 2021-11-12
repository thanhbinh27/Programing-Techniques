class Plate {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}

class Stack {
    constructor() {
        this.plates = [];
        this.capacity = 10;
    }

    get length() {
        return this.plates.length;
    }

    capacity() {
        return this.capacity;
    }

    isFull() {
        return (this.plates.length == this.capacity);
    }

    isEmpty() {
        return (this.plates.length == 0);
    }

    push(plate) {
        if (this.isFull()) console.log("Plates stack is full.");
        else this.plates.push(plate);
    }

    peek() {
        if (this.isEmpty()) console.log("Plates stack is empty.");
        return this.plates[this.plates.length - 1];
    }

    pop() {
        if (this.isEmpty()) console.log("Plates stack is empty.");
        return this.plates.pop();
    }

    reverse() {
        return this.plates.reverse();
    }

}
let plates = new Stack();

console.log(plates); // []
console.log(plates.length); // 0

let plate01 = new Plate("Dĩa 1", "Vừa");
let plate02 = new Plate("Dĩa 2", "Vừa");
let plate03 = new Plate("Dĩa 3", "Vừa");
let plate04 = new Plate("Dĩa 4", "Vừa");
let plate05 = new Plate("Dĩa 5", "Vừa");
plates.push(plate01);
plates.push(plate02);
plates.push(plate03);
plates.push(plate04);
plates.push(plate05);

console.log(plates); // [{plate01-05}]
console.log(plates.length); // 5

console.log(plates.peek()); // Dĩa 5
console.log(plates.length); // 5

plates.pop(); // Lấy dĩa 5 ra dùng

console.log(plates.peek()); // Dĩa 4
console.log(plates.length); // 4

plates.reverse();

console.log(plates.peek()); // Dĩa 1
console.log(plates.length); // 4