var x = Number(prompt("Enter x: "));
var n = Number(prompt("Enter n: "));
var T = i = 1;

do {
    T *= x;
    i++;
} while(i <= n)

console.log(`T(${x},${n}) = ${T}`);
alert(`T(${x},${n}) = ${T}`);
document.write(`T(${x},${n}) = ${T}`);