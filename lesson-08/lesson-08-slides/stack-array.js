// plate: dĩa
// stack: ngăn xếp

class Plate {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}
//let plate01 = new Plate('Dĩa 1', 'Vừa');
//console.log(plate01);

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
        //if(this.plates.length == this.capacity) return true;
        //return false; <=> same ở dưới
        return (this.plates.length == this.capacity);
    }

    isEmty() {
        return (this.plates.length == 0);
    }

    push(plate) {
        if(this.isFull() == true) console.log("Plates stack is full");
        else this.plates.push(plate);
    }

    peek() {
        if(this.isEmty()) console.log("Plates stack is empty.");
        return  this.plates[this.plates.length -1];
    }

    pop() {
        if(this.isEmty()) console.log("Plates stack is empty.");
        return this.plates.pop();
    }

    reverse() {
        return this.plates.reverse();
    }
}

let plates = new Stack();
console.log(plates.length);
console.log(plates.capacity);

if(plates.isFull()) {
    console.log("Plates stack is full.");
} else {
    console.log("Plates stack is NOT full.");
}

if(plates.isEmty()) {
    console.log("Plates stack is empty.");
} else {
    console.log("Plates stack is NOT empty.");
}

console.log(plates); // []
console.log(plates.length); // 0

let plate01 = new Plate("Dĩa 1", "Vừa");
let plate02 = new Plate("Dĩa 2", "Vừa");
let plate03 = new Plate("Dĩa 3", "Vừa");
let plate04 = new Plate("Dĩa 4", "Vừa");
let plate05 = new Plate("Dĩa 5", "Vừa");
plates.push(plate01);
plates.push(plate02);
plates.push(plate03);
plates.push(plate04);
plates.push(plate05);

console.log(plates); // [{plate05}]
console.log(plates.length); // 5

console.log(plates.peek()); // Dĩa 5

plates.pop(); // lấy Dĩa 5 ra dùng

console.log(plates.peek()); // đỉnh thành Dĩa 4
console.log(plates.length)

plates.reverse();

console.log(plates.peek()); // Dĩa 1
console.log(plates.length) // 4