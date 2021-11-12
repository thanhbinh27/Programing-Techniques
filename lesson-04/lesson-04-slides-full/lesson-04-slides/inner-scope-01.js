function greeting() {
    var a = 1;
    d = 4; // `d` do not declare normally

    function hello() {
        var b = 2;

        function hi() {
            var c = 3;
            console.log(a, b, c); // 1 2 3
        }
        hi();
        console.log(a, b); // 1, 2
    }
    hello();
    console.log(a); // 1
}
greeting();
d;
console.log(d); // 4 -- auto become global variable 
// or error (if use "strict mode" -> "inner-scope-02.js")