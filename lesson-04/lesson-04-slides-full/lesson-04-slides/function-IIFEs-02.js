var a = 42;
(function IIFE() {
    var a = 10;
    console.log(a); // 10
})();
console.log(a); // 42