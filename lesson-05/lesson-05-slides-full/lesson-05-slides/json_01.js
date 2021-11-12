// Đối tượng trong JS
var obj = {
    "name": "Teo",
    "age": 18
};
console.log(obj);
console.log(typeof obj); //object

// Chuyển đối tượng JS thành chuỗi JSON
var json = JSON.stringify(obj);
console.log(json); // {"name":"Teo","age":18}
console.log(typeof json); // string