var obj = {
    a: "hello world",
    b: 18,
    c: true,
    "Lời chào 'kiểu Việt'": "Xin chào VUsers",
    "Lời chào 'kiểu Mỹ'": "Hello VUsers"
};
obj.a; // "hello world"
obj.b; // 18
obj.c; // true
obj["a"]; // "hello world"
console.log(obj["Lời chào 'kiểu Mỹ'"]);
obj["b"]; // 18
obj["c"]; // true