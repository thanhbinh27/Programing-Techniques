let x = 15;

function foo() {
    let x = 10;
    if (true) {
        let x = 20; // x này là x khác rồi đấy
        console.log(x); // in ra 20
    }
    console.log(x); // in ra 10
}

console.log(x); // in ra 15

foo();