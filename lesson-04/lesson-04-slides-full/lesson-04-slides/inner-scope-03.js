function hello() {
    var a = 1;
    if (a >= 1) {
        let b = 2;
        while (b < 5) {
            let c = b * 2;
            b++;
            console.log(a + c);
        }
    }
}
hello(); // 5 7 9