a = 1;
b = 1; // b = "1"; => Equal trong trường hợp a==b ( băng tương đối)
if (a==b) // trong trường hợp a===b (bằng tuyệt đối) => Not Euqal trong trường hợp a=1; b="1";
{
    console.log("Equal");
}
else
{
    console.log("Not equal");
}

//---------------------------------

a = 1;
b = 1; 
if (a==b) 
{
    //do sth
    console.log("Equal"); //execute here
}
else
{
    //do sth else
    console.log("Not equal");
}