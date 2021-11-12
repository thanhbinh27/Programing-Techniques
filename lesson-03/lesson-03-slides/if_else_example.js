//Input: Enther math, physic, chemistry
//Output: Student rank:
//excellent (9<aS<10)
//good (8<aS<9)
//great(7<aS<8)
//average(6.5<aS<7)
//weak(5<aS<6.5)

var math = 2,
    physic = 9,
    chemistry = 9;

var average = (math + physic + chemistry) / 3;

if(math <0 || math>10 || physic < 0 || physic >0 || chemistry<0 || chemistry>10 )
{
    console.log("Nhập lại từ đầu");
}
else if(average >10 || average <0)
{
    console.log("Nhập lại từ đầu")
}
else if(average >= 9 )
{
    console.log("excellent");
}
else if(8 <= average )
{
    console.log("good");
}
else if(7 <= average )
{
    console.log("great");
}
else if(6.5 <= average )
{
    console.log("average");
}
else if(5 <= average )
{
    console.log("weak");
}
else
{
    console.log("fall")
}