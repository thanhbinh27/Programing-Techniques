class Value {
    constructor(number) {
        this.number = number;
    }
}

class Stack {
    constructor() {
        this.values = [];
        this.capacity = 10;
    }

    get length() {
        return this.values.length;
    }

    capacity() {
        return this.capacity;
    }

    isFull() {
        return (this.values.length == this.capacity);
    }

    isEmpty() {
        return (this.values.length == 0);
    }

    push(value) {
        if (this.isFull()) console.log("Values stack is full.");
        else this.values.push(value);
    }

    pop() {
        if (this.isEmpty()) return "Values stack is empty.";
        return this.values.pop();
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
        console.log("Values values capacity is: " + values.capacity);
        console.log("Length = Capacity => Values Stack is full.");
    } else {
        console.log("Values values length is: " + values.length);
        console.log("Values values capacity is: " + values.capacity);
        console.log("Length < Capacity => Values Stack is NOT full.");
    }
}

function isEmptyValuesStack(values) {
    if (values.isEmpty()) {
        console.log("Values stack length is: " + values.length);
        console.log("Values stack capacity is: " + values.capacity);
        console.log("Length = Capacity => Values Stack is empty.");
    } else {
        console.log("Values stack length is: " + values.length);
        console.log("Values stack capacity is: " + values.capacity);
        console.log("Length != 0 => Values Stack is NOT empty.");
    }
}

function pushValuesStack(values) {
    let value01 = new Value(24);
    let value02 = new Value(45);
    let value03 = new Value(23);
    let value04 = new Value(13);
    let value05 = new Value(43);
    let value06 = new Value(-1);
    let value07 = new Value(22);

    values.push(value01);
    values.push(value02);
    values.push(value03);
    values.push(value04);
    values.push(value05);
    values.push(value06);
    values.push(value07);
}

function popValuesStack(values) {
    values.pop();
    values.pop();
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
    console.log("--- Init Values Stack ---");
    const values = new Stack();
    console.log(values);
    console.log(values.length);

    console.log("\n--- Push Values Stack ---");
    pushValuesStack(values);
    console.log(values);
    console.log(values.length);

    console.log("\n--- Pop Values Stack ---");
    popValuesStack(values);
    console.log(values);
    console.log(values.length);

    console.log("\n--- Is Full Values Stack? ---");
    isFullValuesStack(values);

    console.log("\n--- Is Empty Values Stack? ---");
    isEmptyValuesStack(values);

    console.log("\n--- Even Values Stack ---");
    evenValuesStack(values);

    console.log("\n--- Ascending Values Stack ---");
    sortAscending(values);
    console.log(values);

    console.log("\n--- Descending Values Stack ---");
    sortDescending(values);
    console.log(values);

    console.log("\n--- Largest Values Stack ---");
    console.log(maxValuesStack(values));

    console.log("\n--- Sum Of Even Values Stack ---");
    console.log("Sum of even values are: " + sumEvenValuesStack(values));

}

main();


