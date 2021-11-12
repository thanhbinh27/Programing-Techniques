var i = multip =1;
while (i <=10 )
{
    if (i % 2 == 0)
    {
    multip *= i;   
    }
    i++;
}
console.log(`Muiltip of even number (1-10) is: ${multip}`);

//----------------------------- khi gộp chung vào sẽ không thực hiện được vòng lập

var i = multip =1;

var check_01 = (i < 10);
console.log("check_01 is: "+ check_01);
var check_02 = (i % 2 == 0);
console.log("check_02 is: "+ check_02);

while (i <=10 && i % 2 == 0 )
{
    multip *= i;     
    i++;
}
console.log(`Muiltip of even number (1-10) is: ${multip}`);