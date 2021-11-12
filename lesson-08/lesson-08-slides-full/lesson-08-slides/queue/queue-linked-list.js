class Ticket {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Node {
    constructor(ticket) {
        this.ticket = ticket;
        this.previous = null;
    }
}

class Queue {
    constructor() {
        this.ticketFront = null;
        this.ticketRear = null;
        this.ticketsLength = 0;
        this.ticketsSize = 10;
    }

    // trả về độ dài hiện tại của tickets queue
    get length() {
        return this.ticketsLength;
    }

    // trả về sức chứa hiện tại của tickets queue
    get size() {
        return this.ticketsSize;
    }

    enqueue(item) {
        let newNode = new Node(item);

        if (!this.ticketFront) {
            this.ticketFront = newNode;
            this.ticketRear = newNode;
        } else {
            this.ticketRear.previous = newNode;
            this.ticketRear = newNode;
        }

        this.ticketsLength++;
        return this.ticketRear;
    }

    // trả về giá trị rear queue của tickets queue
    peek() {
        if (this.isEmpty()) return 'Tickets queue is empty';
        return this.ticketRear.ticket; // Cách 1: rear queue (đuôi hàng)
        // return this.ticketFront; // Cách 2: head queue (đầu hàng)
    }

    dequeue() {
        if (!this.ticketFront) return null;
        if (this.ticketFront === this.ticketRear) this.ticketLast = null;
        let currentNode = this.ticketFront;
        this.ticketFront = this.ticketFront.previous;

        this.ticketsLength--;
        return currentNode.ticket;
    }

    // kiểm tra tickets queue có đang rỗng hay không
    isEmpty() {
        return this.ticketsLength === 0;
    }

    // kiểm tra tickets queue có đang đầy hay không
    isFull() {
        return (this.ticketsLength == this.ticketsSize);
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
    tickets.dequeue(); //lấy vé 1/5 (ở front/rear queue) ra dùng
    tickets.dequeue(); //lấy vé 2/4 (ở front/rear queue) ra dùng
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

    console.log("\n--- Is Empty Tickets Queue? ---");
    isEmptyTicketsQueue(tickets);

    console.log("\n--- Is Full Tickets Queue? ---");
    isFullTicketsQueue(tickets);
}

main();