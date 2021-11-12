// Tọa độ của A(x1, y1)
var x1 = Number(prompt("Nhập hoành độ x1 của tọa độ A: "));
var y1 = Number(prompt("Nhập tung độ y1 của tọa độ A: "));

//Tọa độ của B(x2, y2)
var x2 = Number(prompt("Nhập hoành độ x2 của tọa độ B: "));
var y2 = Number(prompt("Nhập tung độ y2 của tọa độ B: "));

//Tọa độ của C(x3, y3)
var x3 = Number(prompt("Nhập hoành độ x3 của tọa độ C: "));
var y3 = Number(prompt("Nhập tung độ y3 của tọa độ C: "));

//Cạnh AB 
var canhAB = Math.sqrt(((x2 - x1)*(x2 - x1)) + ((y2 - y1)*(y2 - y1)));
//Cạnh AC
var canhAC = Math.sqrt(((x3 - x1)*(x3 - x1)) + ((y3 - y1)*(y3 - y1)));
//Cạnh BC
var canhBC = Math.sqrt(((x3 - x2)*(x3 - x2)) + ((y3 - y2)*(y3 - y2)));

//Chu Vi tam giác ABC
var P = canhAB + canhAC + canhBC ;
console.log("Chu vi tam giac = " + P);
alert("Chu vi tam giac = " + P);