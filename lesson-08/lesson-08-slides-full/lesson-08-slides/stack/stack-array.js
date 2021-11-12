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

    // trả về độ dài hiện tại của plates stack
    get length() {
        return this.plates.length;
    }

    // trả về sức chứa hiện tại của plates stack
    capacity() {
        return this.capacity;
    }

    // đẩy các phẩn tử vào một mảng để tạo dữ liệu plates stack
    push(item) {
        this.plates.push(item);
    }

    // xóa 1 phần tử ở top của plates stack và trả về giá trị top
    pop() {
        if (this.isEmpty()) return 'Plates stack is empty';
        return this.plates.pop();
    }

    // trả về giá trị top của plates stack
    peek() {
        if (this.isEmpty()) return 'Plates stack is empty';
        return this.plates[this.plates.length - 1];
    }

    // đảo ngược vị trí các items của plates stack
    reverse() {
        return this.plates.reverse();
    }

    // kiểm tra plates stack có đang rỗng hay không
    isEmpty() {
        return !this.plates.length;
    }

    // kiểm tra plates stack có đang đầy hay không
    isFull() {
        return (this.plates.length == this.capacity);
    }
}

function pushPlatesStack(plates) {
    let plate01 = new Plate("Dĩa 1", 'Vừa');
    let plate02 = new Plate("Dĩa 2", 'Vừa');
    let plate03 = new Plate("Dĩa 3", 'Vừa');
    let plate04 = new Plate("Dĩa 4", 'Vừa');
    let plate05 = new Plate("Dĩa 5", 'Vừa');

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
    plates.reverse();
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

function popAllPlatesStack(plates) {
    while (plates.length) {
        plates.pop();
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

    console.log("\n--- Pop All Plates Stack ---");
    popAllPlatesStack(plates);
    console.log(plates);
    console.log(plates.length);

    console.log("\n--- Is Empty Plates Stack? ---");
    isEmptyPlatesStack(plates);

    console.log("\n--- Is Full Plates Stack? ---");
    isFullPlatesStack(plates);

}

main();