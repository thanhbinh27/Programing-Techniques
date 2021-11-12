var a = Number(prompt("Enter a: "));
var b = Number(prompt("Enter b: "));
if (a == 0)
{
    if(b == 0)
    {
        alert("Many solutions");
        console.log("Many solutions");
        document.write("Many solutions");
    }
    else
    {
        alert("No solutions");
        console.log("No solutions");
        document.write("No solutions");
    }
}
else
{
    var solution = -b/a;
    alert("Solution is: " + solution);
    console.log("Solution is: " + solution);
    document.write("Solution is: " + solution);
}