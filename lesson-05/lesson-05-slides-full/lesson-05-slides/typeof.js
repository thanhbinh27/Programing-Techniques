var box;

typeof box; // "undefined"
console.log(typeof box);
box = "hello world";
typeof box; // "string"
console.log(typeof box);
box = 18;
typeof box; // "number"
console.log(typeof box);
box = true;
typeof box; // "boolean"
console.log(typeof box);
box = null;
typeof box; // "object" - bug
console.log(typeof box);
box = undefined;
typeof box; // "undefined"
console.log(typeof box);
box = { name: "Minh Dao" };
typeof box; // "object"
console.log(typeof box);