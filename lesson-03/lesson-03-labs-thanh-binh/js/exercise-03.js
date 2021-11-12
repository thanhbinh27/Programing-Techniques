var n = Number(prompt("Enter n: "));
var i = 1;
var S = 0;
do {
    S += i; //S = S + i
    i++;
} while ( i <= n)
console.log(`S(${n}) = ${S}`);
alert(`S(${n}) = ${S}`);
document.write(`S(${n}) = ${S}`);

