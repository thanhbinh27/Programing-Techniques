class Ticket {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Queue {
    constructor() {
        this.tickets = [];
        this.size = 10;
    }

    // trả về độ dài hiện tại của tickets queue
    get length() {
        return this.tickets.length;
    }

    // trả về sức chứa hiện tại của tickets queue
    size() {
        return this.size;
    }

    // đẩy các phẩn tử vào một mảng để tạo dữ liệu tickets queue
    enqueue(item) {
        return this.tickets.push(item); // Cách 1: head queue (đầu hàng)
        // return this.tickets.unshift(item); // Cách 2: tail queue (đuôi hàng)
    }

    // xóa 1 phần tử ở head/tail queue của tickets queue và trả về giá trị head/tail queue
    dequeue() {
        if (this.isEmpty()) return 'Tickets queue is empty';
        return this.tickets.shift(); // Cách 1: head queue (đầu hàng)
        // return this.tickets.pop(); // Cách 2: tail queue (đuôi hàng)
    }

    // trả về giá trị head/tail queue của tickets queue
    peek() {
        if (this.isEmpty()) return 'Tickets queue is empty';
        return this.tickets[0]; // Cách 1: head queue (đầu hàng)
        // return this.tickets[this.length - 1]; // Cách 2: tail queue (đuôi hàng)
    }

    // đảo ngược vị trí các items của tickets queue
    reverse() {
        return this.tickets.reverse();
    }

    // kiểm tra tickets queue có đang rỗng hay không
    isEmpty() {
        return this.tickets.length === 0;
    }

    // kiểm tra tickets queue có đang đầy hay không
    isFull() {
        return (this.tickets.length == this.size);
    }
}

function enqueueTicketsQueue(tickets) {
    let ticket01 = new Ticket("Vé 1", 50000);
    let ticket02 = new Ticket("Vé 2", 50000);
    let ticket03 = new Ticket("Vé 3", 50000);
    let ticket04 = new Ticket("Vé 4", 50000);
    let ticket05 = new Ticket("Vé 5", 50000);

    tickets.enqueue(ticket01);
    tickets.enqueue(ticket02);
    tickets.enqueue(ticket03);
    tickets.enqueue(ticket04);
    tickets.enqueue(ticket05);
}

function peekTicketsQueue(tickets) {
    console.log("Item at rear of tickets queue is: ");
    console.log(tickets.peek());
}

function dequeueTicketsQueue(tickets) {
    tickets.dequeue(); //lấy vé 1/5 (ở head/tail queue) ra dùng
    tickets.dequeue(); //lấy vé 2/4 (ở head/tail queue) ra dùng
}

function reverseTicketsQueue(tickets) {
    tickets.reverse();
}

function isEmptyTicketsQueue(tickets) {
    if (tickets.isEmpty()) {
        console.log("Tickets queue length is: " + tickets.length);
        console.log("Tickets queue size is: " + tickets.size);
        console.log("Length = Size => Tickets queue is empty.");
    } else {
        console.log("Tickets queue length is: " + tickets.length);
        console.log("Tickets queue capacity is: " + tickets.size);
        console.log("Length != 0 => Tickets queue is NOT empty.");
    }
}

function isFullTicketsQueue(tickets) {
    if (tickets.isFull()) {
        console.log("Tickets queue length is: " + tickets.length);
        console.log("Tickets queue capacity is: " + tickets.size);
        console.log("Length = Capacity => Tickets queue is full.");
    } else {
        console.log("Tickets queue length is: " + tickets.length);
        console.log("Tickets queue capacity is: " + tickets.size);
        console.log("Length < Capacity => Tickets queue is NOT full.");
    }
}

function dequeueAllTicketsQueue(tickets) {
    while (tickets.length) {
        tickets.dequeue();
    }
}

function main() {
    console.log("--- Init Tickets Queue ---");
    const tickets = new Queue();
    console.log(tickets);
    console.log(tickets.length);

    console.log("\n--- Enqueue Tickets Queue ---");
    enqueueTicketsQueue(tickets);
    console.log(tickets);
    console.log(tickets.length);

    console.log("\n--- Peek Tickets Queue ---");
    peekTicketsQueue(tickets);

    console.log("\n--- Dequeue Tickets Queue ---");
    dequeueTicketsQueue(tickets);
    console.log(tickets);
    console.log(tickets.length);

    console.log("\n--- Peek Tickets Queue ---");
    peekTicketsQueue(tickets);

    console.log("\n--- Reverse Tickets Queue ---");
    reverseTicketsQueue(tickets);
    console.log(tickets);
    console.log(tickets.length);

    console.log("\n--- Is Empty Tickets Queue? ---");
    isEmptyTicketsQueue(tickets);

    console.log("\n--- Is Full Tickets Queue? ---");
    isFullTicketsQueue(tickets);

    console.log("\n--- Dequeue All Tickets Queue ---");
    dequeueAllTicketsQueue(tickets);
    console.log(tickets);
    console.log(tickets.length);

    console.log("\n--- Is Empty Tickets Queue? ---");
    isEmptyTicketsQueue(tickets);

    console.log("\n--- Is Full Tickets Queue? ---");
    isFullTicketsQueue(tickets);
}

main();