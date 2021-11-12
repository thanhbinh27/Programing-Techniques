class Value {
    constructor(number) {
        this.number = number;
    }
}

class Queue {
    constructor() {
        this.values = [];
        this.size = 10;
    }

    get length() {
        return this.values.length;
    }

    size() {
        return this.size;
    }

    isFull() {
        return (this.values.length == this.size);
    }

    isEmpty() {
        return (this.values.length == 0);
    }

    enqueue(value) {
        return this.values.push(value);
    }

    dequeue() {
        if (this.isEmpty()) return "Values queue is empty.";
        return this.values.shift();
    }

    evenValues() {
        for (var i = 0; i < this.values.length; i++) {
            if (this.values[i].number > 0 && this.values[i].number % 2 == 0) {
                console.log(this.values[i]);
            }
        }
    }

    ascending() {
        for (var i = 0; i <= this.values.length - 2; i++) {
            for (var j = i + 1; j <= this.values.length - 1; j++) {
                if (this.values[i].number > this.values[j].number) {
                    var temp = this.values[i];
                    this.values[i] = this.values[j];
                    this.values[j] = temp;
                }
            }
        }
    }

    descending() {
        for (var i = 0; i <= this.values.length - 2; i++) {
            for (var j = i + 1; j <= this.values.length - 1; j++) {
                if (this.values[i].number < this.values[j].number) {
                    var temp = this.values[i];
                    this.values[i] = this.values[j];
                    this.values[j] = temp;
                }
            }
        }
    }

    max() {
        var max = this.values[0];
        for (var i = 0; i < this.values.length; i++) {
            if (this.values[i].number > max.number) {
                max = this.values[i];
            }
        }
        return max;
    }

    sumEven() {
        var sum = 0;
        for (var i = 0; i < this.values.length; i++) {
            if (this.values[i].number > 0 && this.values[i].number % 2 == 0) {
                sum += this.values[i].number;
            }
        }
        return sum;
    }

}

function isFullValuesStack(values) {
    if (values.isFull()) {
        console.log("Values values length is: " + values.length);
        console.log("Values values size is: " + values.size);
        console.log("Length = Capacity => Values Queue is full.");
    } else {
        console.log("Values values length is: " + values.length);
        console.log("Values values size is: " + values.size);
        console.log("Length < Capacity => Values Queue is NOT full.");
    }
}

function isEmptyValuesStack(values) {
    if (values.isEmpty()) {
        console.log("Values stack length is: " + values.length);
        console.log("Values stack size is: " + values.size);
        console.log("Length = Capacity => Values Queue is empty.");
    } else {
        console.log("Values stack length is: " + values.length);
        console.log("Values stack size is: " + values.size);
        console.log("Length != 0 => Values Queue is NOT empty.");
    }
}

function enqueueValuesStack(values) {
    let value01 = new Value(24);
    let value02 = new Value(45);
    let value03 = new Value(23);
    let value04 = new Value(13);
    let value05 = new Value(43);
    let value06 = new Value(-1);
    let value07 = new Value(22);

    values.enqueue(value01);
    values.enqueue(value02);
    values.enqueue(value03);
    values.enqueue(value04);
    values.enqueue(value05);
    values.enqueue(value06);
    values.enqueue(value07);
}

function dequeueValuesStack(values) {
    values.dequeue();
    values.dequeue();
}

function evenValuesStack(values) {
    values.evenValues();
}

function sortAscending(values) {
    values.ascending();
}

function sortDescending(values) {
    values.descending();
}

function maxValuesStack(values) {
    return values.max();
}

function sumEvenValuesStack(values) {
    return values.sumEven();
}


function main() {
    console.log("--- Init Values Queue ---");
    const values = new Queue();
    console.log(values);
    console.log(values.length);

    console.log("\n--- Enqueue Values Queue ---");
    enqueueValuesStack(values);
    console.log(values);
    console.log(values.length);

    console.log("\n--- Dequeue Values Queue ---");
    dequeueValuesStack(values);
    console.log(values);
    console.log(values.length);

    console.log("\n--- Is Full Values Queue? ---");
    isFullValuesStack(values);

    console.log("\n--- Is Empty Values Queue? ---");
    isEmptyValuesStack(values);

    console.log("\n--- Even Values Queue ---");
    evenValuesStack(values);

    console.log("\n--- Ascending Values Queue ---");
    sortAscending(values);
    console.log(values);

    console.log("\n--- Descending Values Queue ---");
    sortDescending(values);
    console.log(values);

    console.log("\n--- Largest Values Queue ---");
    console.log(maxValuesStack(values));

    console.log("\n--- Sum Of Even Values Queue ---");
    console.log("Sum of even values are: " + sumEvenValuesStack(values));

}

main();


