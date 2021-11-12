class Plate {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}

class Node {
    constructor(plate) {
        this.plate = plate;
        this.previous = null;
    }
}

class Stack {
    constructor() {
        this.plateTop = null;
        this.plateBottom = null;
        this.platesLength = 0;
        this.platesCapacity = 10;
    }

    // trả về độ dài hiện tại của plates stack
    get length() {
        return this.platesLength;
    }

    get capacity() {
        return this.platesCapacity;
    }

    push(item) {
        const newNode = new Node(item);

        if (!this.plateTop) {
            this.plateTop = newNode;
            this.plateBottom = newNode;
        } else {
            const currentNode = this.plateTop;
            this.plateTop = newNode;
            this.plateTop.previous = currentNode;
        }

        this.platesLength++;
        return this.plateTop;
    }

    pop() {
        if (this.isEmpty()) return 'Plates stack is empty!';

        this.plateTop = this.plateTop.previous;
        this.platesLength--;

        return this.plateTop;
    }

    peek() {
        if (!this.plateTop) return 'Plates stack is empty!';
        return this.plateTop;
    }

    // kiểm tra plates stack có đang rỗng hay không
    isEmpty() {
        return (!this.plateTop);
    }

    // kiểm tra plates stack có đang đầy hay không
    isFull() {
        return (this.platesLength == this.capacity);
    }
}

function pushPlatesStack(plates) {
    let plate01 = new Plate('Dĩa 1', 'Vừa');
    let plate02 = new Plate('Dĩa 2', 'Vừa');
    let plate03 = new Plate('Dĩa 3', 'Vừa');
    let plate04 = new Plate('Dĩa 4', 'Vừa');
    let plate05 = new Plate('Dĩa 5', 'Vừa');

    plates.push(plate01);
    plates.push(plate02);
    plates.push(plate03);
    plates.push(plate04);
    plates.push(plate05);
}

function peekPlatesStack(plates) {
    console.log("Item at top of places stack is: ");
    console.log(plates.peek());
}

function popPlatesStack(plates) {
    plates.pop(); //lấy dĩa 5 (trên top) ra dùng
    plates.pop(); //lấy dĩa 4 (trên top) ra dùng
}

function reversePlatesStack(plates) {
    let reverseStack = new Stack();
    while (!plates.isEmpty()) {
        reverseStack.push(plates.pop());
    }
    while (!reverseStack.isEmpty()) {
        plates.push(reverseStack.pop());
    }
    return plates;
}

function isEmptyPlatesStack(plates) {
    if (plates.isEmpty()) {
        console.log("Plates stack length is: " + plates.length);
        console.log("Plates stack capacity is: " + plates.capacity);
        console.log("Length = Capacity => Plates Stack is empty.");
    } else {
        console.log("Plates stack length is: " + plates.length);
        console.log("Plates stack capacity is: " + plates.capacity);
        console.log("Length != 0 => Plates Stack is NOT empty.");
    }
}

function isFullPlatesStack(plates) {
    if (plates.isFull()) {
        console.log("Plates stack length is: " + plates.length);
        console.log("Plates stack capacity is: " + plates.capacity);
        console.log("Length = Capacity => Plates Stack is full.");
    } else {
        console.log("Plates stack length is: " + plates.length);
        console.log("Plates stack capacity is: " + plates.capacity);
        console.log("Length < Capacity => Plates Stack is NOT full.");
    }
}

function main() {
    console.log("--- Init Plates Stack ---");
    const plates = new Stack();
    console.log(plates);
    console.log(plates.length);

    console.log("\n--- Push Plates Stack ---");
    pushPlatesStack(plates);
    console.log(plates);
    console.log(plates.length);

    console.log("\n--- Peek Plates Stack ---");
    peekPlatesStack(plates);

    console.log("\n--- Pop Plates Stack ---");
    popPlatesStack(plates);
    console.log(plates);
    console.log(plates.length);

    console.log("\n--- Peek Plates Stack ---");
    peekPlatesStack(plates);

    console.log("\n--- Reverse Plates Stack ---");
    reversePlatesStack(plates);
    console.log(plates);
    console.log(plates.length);

    console.log("\n--- Is Empty Plates Stack? ---");
    isEmptyPlatesStack(plates);

    console.log("\n--- Is Full Plates Stack? ---");
    isFullPlatesStack(plates);
}

main();