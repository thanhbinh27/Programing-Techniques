function greeting() {
    var a = 1;

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