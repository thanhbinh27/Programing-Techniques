let prompt = require('prompt-sync')();

class Fruit {
    constructor(name) {
        this.name = name;
    }
}

class Stack {
    constructor() {
        this.fruits = [];
        this.capacity = 10;
    }

    get length() {
        return this.fruits.length;
    }

    capacity() {
        return this.capacity;
    }

    isFull() {
        return (this.fruits.length == this.capacity);
    }

    isEmpty() {
        return (this.fruits.length == 0);
    }

    push(item) {
        if (this.isFull()) console.log("Fruits stack is full.");
        else this.fruits.push(item);
    }

    pop() {
        if (this.isEmpty()) return "Fruits stack is empty.";
        return this.fruits.pop();
    }

    find() {
        let pos;
        for (let i = 0; i < this.fruits.length; i++) {
            if (this.fruits[i].name === "Apple") {
                pos = i;
            }
        }
        console.log(pos);
    }
}

function isFullFruitsStack(fruits) {
    if (fruits.isFull()) {
        console.log("fruits fruits length is: " + fruits.length);
        console.log("fruits fruits capacity is: " + fruits.capacity);
        console.log("Length = Capacity => fruits Stack is full.");
    } else {
        console.log("fruits fruits length is: " + fruits.length);
        console.log("fruits fruits capacity is: " + fruits.capacity);
        console.log("Length < Capacity => fruits Stack is NOT full.");
    }
}

function isEmptyFruitsStack(fruits) {
    if (fruits.isEmpty()) {
        console.log("fruits stack length is: " + fruits.length);
        console.log("fruits stack capacity is: " + fruits.capacity);
        console.log("Length = Capacity => fruits Stack is empty.");
    } else {
        console.log("fruits stack length is: " + fruits.length);
        console.log("fruits stack capacity is: " + fruits.capacity);
        console.log("Length != 0 => fruits Stack is NOT empty.");
    }
}

function pushFruitsStack(fruits) {
    fruits.push("Banana");
    fruits.push("Orange");
    fruits.push("Apple");
    fruits.push("Mango");
    fruits.push("Kiwi");
    fruits.push("Orange");
}

function popFruitsStack(fruits) {
    fruits.pop();
}

function findApple(fruits) {
    fruits.find();
}

function main() {
    console.log("--- Init fruits Stack ---");
    const fruits = new Stack();
    console.log(fruits);
    console.log(fruits.length);

    console.log("\n--- Push fruits Stack ---");
    pushFruitsStack(fruits);
    console.log(fruits);
    console.log(fruits.length);

    console.log("\n--- Find Apple ---");
    findApple(fruits);

    console.log("\n--- Pop fruits Stack ---");
    popFruitsStack(fruits);
    console.log(fruits);
    console.log(fruits.length);

    console.log("\n--- Is Full fruits Stack? ---");
    isFullFruitsStack(fruits);

    console.log("\n--- Is Empty fruits Stack? ---");
    isEmptyFruitsStack(fruits);

}

main();

class Player {
    constructor(name) {
        this.name = name;
    }
    play() {
      console.log(this.name, "plays")
    }
  }
