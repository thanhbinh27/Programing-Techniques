var x = 15;

function foo() {
    var x = 10;
    if (true) {
        var x = 20; // x ở đây cũng là x ở trên
        console.log(x); // in ra 20
    }
    console.log(x); // vẫn là 20
}

console.log(x); // vẫn là 15

foo();