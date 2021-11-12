// Lưu chuỗi JSON như vào biến JS
var json = '{"name": "Teo","age": 18}';
console.log(json); // {"name":"Teo","age":18}
console.log(typeof json); // string

// Chuyển đổi chuỗi JSON thành đối tượng trong JS
var obj = JSON.parse(json);
console.log(obj); // {"name":"Teo","age":18}
console.log(typeof obj); // object

// Truy cập phần tử riêng lẻ như đối tượng trong JS
console.log(obj.name); // Teo
console.log(obj.age); // 18