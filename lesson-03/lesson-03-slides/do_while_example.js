var i =1;
var multip = 1;

do{
    if(i % 2 != 0)
    {
        multip *= i ;
    }
    i++;
} while (i <= 10);
console.log(`Multip of odd numbers (1-10) is: ${multip}`);