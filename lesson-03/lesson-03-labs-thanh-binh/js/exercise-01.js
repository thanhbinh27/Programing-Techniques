var a = Number(prompt("Enter a: "));
var b = Number(prompt("Enter b: "));
var m;

if(a * b > 0)
{
    m = console.log("a and b same sign");
    alert("a and b same sign");
    document.write("a and b same sign");
}
else
{
    m = console.log("a and b different sign");
    alert("a and b different sign");
    document.write("a and b different sign");
}