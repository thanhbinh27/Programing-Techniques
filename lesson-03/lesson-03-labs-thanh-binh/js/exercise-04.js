var n = Number(prompt("Enter n"));
var i = 2;
var S = 0;

do {
    S += 1/i;
    i += 2;
} while (i <= 2*n)

console.log(`S(${n}) = ${S.toFixed(2)}`);
alert(`S(${n}) = ${S.toFixed(2)}`);
document.write(`S(${n}) = ${S.toFixed(2)}`);
