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

    get length() {
        return this.tickets.length;
    }

    size() {
        return this.size;
    }

    enqueue(item) {
        return this.tickets.push(item);
    }

    dequeue() {
        if(this.isEmpty()) return 'Tickets queue is empty';
    }
}