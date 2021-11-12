class Ticket {
    constructor(numericalOrder, name, price) {
        this.numericalOrder = numericalOrder;
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
        if (this.isEmpty()) return 'Tickets queue is empty';
        return this.tickets.shift();
    }

    isEmpty() {
        return this.tickets.length === 0;
    }

    isFull() {
        return (this.tickets.length == this.size);
    }

    evenTickets() {
        for (var i = 0; i < this.tickets.length; i++) {
            if (this.tickets[i].numericalOrder > 0 && this.tickets[i].numericalOrder % 2 == 0) {
                console.log(this.tickets[i]);
            }
        }
    }

    ascending() {
        for (var i = 0; i <= this.tickets.length - 2; i++) {
            for (var j = i + 1; j <= this.tickets.length - 1; j++) {
                if (this.tickets[i].numericalOrder > this.tickets[j].numericalOrder) {
                    var temp = this.tickets[i];
                    this.tickets[i] = this.tickets[j];
                    this.tickets[j] = temp;
                }
            }
        }
    }

    descending() {
        for (var i = 0; i <= this.tickets.length - 2; i++) {
            for (var j = i + 1; j <= this.tickets.length - 1; j++) {
                if (this.tickets[i].numericalOrder < this.tickets[j].numericalOrder) {
                    var temp = this.tickets[i];
                    this.tickets[i] = this.tickets[j];
                    this.tickets[j] = temp;
                }
            }
        }
    }

    max() {
        var max = this.tickets[0];
        for (var i = 0; i < this.tickets.length; i++) {
            if (this.tickets[i].numericalOrder > max.numericalOrder) {
                max = this.tickets[i];
            }
        }
        return max;
    }

    sumEven() {
        var sum = 0;
        for (var i = 0; i < this.tickets.length; i++) {
            if (this.tickets[i].numericalOrder > 0 && this.tickets[i].numericalOrder % 2 == 0) {
                sum += this.tickets[i].numericalOrder;
            }
        }
        return sum;
    }
}

function enqueueTicketsQueue(tickets) {
    let ticket01 = new Ticket(5, "Vé 1", 50000);
    let ticket02 = new Ticket(3, "Vé 2", 50000);
    let ticket03 = new Ticket(6, "Vé 3", 50000);
    let ticket04 = new Ticket(2, "Vé 4", 50000);
    let ticket05 = new Ticket(1, "Vé 5", 50000);
    let ticket06 = new Ticket(7, "Vé 6", 50000);
    let ticket07 = new Ticket(4, "Vé 7", 50000);

    tickets.enqueue(ticket01);
    tickets.enqueue(ticket02);
    tickets.enqueue(ticket03);
    tickets.enqueue(ticket04);
    tickets.enqueue(ticket05);
    tickets.enqueue(ticket06);
    tickets.enqueue(ticket07);
}


function dequeueTicketsQueue(tickets) {
    tickets.dequeue();
    tickets.dequeue();
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

function evenTicketsQueue(tickets) {
    tickets.evenTickets();
}

function sortAscending(tickets) {
    tickets.ascending();
}

function sortDescending(tickets) {
    tickets.descending();
}

function maxTicketsQueue(tickets) {
    return tickets.max();
}

function sumEvenTicketsQueue(tickets) {
    return tickets.sumEven();
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

    console.log("\n--- Dequeue Tickets Queue ---");
    dequeueTicketsQueue(tickets);
    console.log(tickets);
    console.log(tickets.length);

    console.log("\n--- Is Empty Tickets Queue? ---");
    isEmptyTicketsQueue(tickets);

    console.log("\n--- Is Full Tickets Queue? ---");
    isFullTicketsQueue(tickets);

    console.log("\n--- Even Tickets Queue ---");
    evenTicketsQueue(tickets);

    console.log("\n--- Ascending Tickets Queue ---");
    sortAscending(tickets);
    console.log(tickets);

    console.log("\n--- Descending Tickets Queue ---");
    sortDescending(tickets);
    console.log(tickets);

    console.log("\n--- Largest Tickets Queue ---");
    console.log(maxTicketsQueue(tickets));

    console.log("\n--- Sum Of Even Tickets Queue ---");
    console.log("Sum of even tickets are: " + sumEvenTicketsQueue(tickets));
}

main();