var obj = {
    a: "hello world",
    b: 42
};
var b = "a";
// obj["b"]; // "hello world" ~ obj["a"]
obj["b"]; // 42
console.log(obj[b]);