var a = Number(prompt("Enter a: "));

switch(a)
{
    case 2:
    case 10:
        //do something else
        console.log("a equal 2 or 10");
        break;
    case 42:
        //do something
        console.log("a equal 42");
        break;
    default:
        //not do something
        console.log("a not equal 2, 10, 42");
        break;
}