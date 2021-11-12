function hello() {

    "use strict"; // use strict mode
    a = 1; // `var` missing, ReferenceError
    console.log("a = " + a);
}

hello();