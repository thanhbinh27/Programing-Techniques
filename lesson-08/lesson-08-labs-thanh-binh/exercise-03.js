class Plate {
    constructor(numericalOrder, name, size) {
        this.numericalOrder = numericalOrder;
        this.name = name;
        this.size = size;
    }
}

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

    push(item) {
        this.plates.push(item);
    }

    pop() {
        if (this.isEmpty()) return 'Plates stack is empty.';
        return this.plates.pop();
    }

    isEmpty() {
        return !this.plates.length;
    }

    isFull() {
        return (this.plates.length == this.capacity);
    }

    evenplates() {
        for (var i = 0; i < this.plates.length; i++) {
            if (this.plates[i].numericalOrder > 0 && this.plates[i].numericalOrder % 2 == 0) {
                console.log(this.plates[i]);
            }
        }
    }

    ascending() {
        for (var i = 0; i <= this.plates.length - 2; i++) {
            for (var j = i + 1; j <= this.plates.length - 1; j++) {
                if (this.plates[i].numericalOrder > this.plates[j].numericalOrder) {
                    var temp = this.plates[i];
                    this.plates[i] = this.plates[j];
                    this.plates[j] = temp;
                }
            }
        }
    }

    descending() {
        for (var i = 0; i <= this.plates.length - 2; i++) {
            for (var j = i + 1; j <= this.plates.length - 1; j++) {
                if (this.plates[i].numericalOrder < this.plates[j].numericalOrder) {
                    var temp = this.plates[i];
                    this.plates[i] = this.plates[j];
                    this.plates[j] = temp;
                }
            }
        }
    }

    max() {
        var max = this.plates[0];
        for (var i = 0; i < this.plates.length; i++) {
            if (this.plates[i].numericalOrder > max.numericalOrder) {
                max = this.plates[i];
            }
        }
        return max;
    }

    sumEven() {
        var sum = 0;
        for (var i = 0; i < this.plates.length; i++) {
            if (this.plates[i].numericalOrder > 0 && this.plates[i].numericalOrder % 2 == 0) {
                sum += this.plates[i].numericalOrder;
            }
        }
        return sum;
    }
}

function pushPlatesStack(plates) {
    let plate01 = new Plate(1, "D??a 1", 'V???a');
    let plate02 = new Plate(2, "D??a 2", 'V???a');
    let plate03 = new Plate(3, "D??a 3", 'V???a');
    let plate04 = new Plate(4, "D??a 4", 'V???a');
    let plate05 = new Plate(5, "D??a 5", 'V???a');
    let plate06 = new Plate(6, "D??a 6", 'V???a');
    let plate07 = new Plate(7, "D??a 7", 'V???a');

    plates.push(plate01);
    plates.push(plate02);
    plates.push(plate03);
    plates.push(plate04);
    plates.push(plate05);
    plates.push(plate06);
    plates.push(plate07);
}

function popPlatesStack(plates) {
    plates.pop(); 
    plates.pop();
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

function evenPlatesStack(plates) {
    plates.evenplates();
}

function sortAscending(plates) {
    plates.ascending();
}

function sortDescending(plates) {
    plates.descending();
}

function maxPlatesStack(plates) {
    return plates.max();
}

function sumEvenPlatesStack(plates) {
    return plates.sumEven();
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

    console.log("\n--- Pop Plates Stack ---");
    popPlatesStack(plates);
    console.log(plates);
    console.log(plates.length);

    console.log("\n--- Is Empty Plates Stack? ---");
    isEmptyPlatesStack(plates);

    console.log("\n--- Is Full Plates Stack? ---");
    isFullPlatesStack(plates);

    console.log("\n--- Even Plates Stack ---");
    evenPlatesStack(plates);

    console.log("\n--- Ascending Plates Stack ---");
    sortAscending(plates);
    console.log(plates);

    console.log("\n--- Descending Plates Stack ---");
    sortDescending(plates);
    console.log(plates);

    console.log("\n--- Largest Plates Stack ---");
    console.log(maxPlatesStack(plates));

    console.log("\n--- Sum Of Even Plates Stack ---");
    console.log("Sum of even plates are: " + sumEvenPlatesStack(plates));

}

main();