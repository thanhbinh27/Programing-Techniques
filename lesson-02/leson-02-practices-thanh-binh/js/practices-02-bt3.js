var a = Number(prompt("Enter a: "));
var b = Number(prompt("Enter b: "));

if( a%2 == 0 )
{  
    if (a > b)
    {
        console.log("a even and greater than b");
    }
    else
    {
        console.log("a even and lower than b");
    }
}
else
{
    console.log("none");
}