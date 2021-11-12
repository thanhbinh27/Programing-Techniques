//Input : n
//Output:
//n is even -> alert: n is even
//n is odd -> alert: n is odd
//n is string '' -> alert: Invalid n. Input again!

var n = Number(prompt("Enter n: "));
var isEven; 

if (isNaN(n))
{
    alert("Invalid n. Press F5 and input again!");
}
else
{
    isEven = (n % 2 == 0) ? alert(`${n} is even`) : alert(`${n} is odd`);
}
