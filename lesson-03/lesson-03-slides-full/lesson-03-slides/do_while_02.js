var i = 1;
var sum = 0;

do {
    if (i % 2 != 0) {
        sum += i;
    }
    i++;
} while (i <= 10);

console.log(`Sum is: ${sum}`);