var box;

typeof box; // "undefined"
box = "hello world";
typeof box; // "string"
box = 18;
typeof box; // "number"
box = true;
typeof box; // "bollean"
box = null;
typeof box; // "object" - bug
box = undefined;
typeof box; // "undefined"
box = { name: "Thanh Binh"};
typeof box; // "object"