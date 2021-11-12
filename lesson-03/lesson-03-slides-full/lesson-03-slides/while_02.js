var i = multip = 1;

while (i <= 10) {
    if (i % 2 == 0) {
        multip *= i; //multip = multip * i
    }
    i++;
}

console.log(`Multip of even numbers (1-10) is: ${multip}`);