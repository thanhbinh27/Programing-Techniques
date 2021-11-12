var user = {
    name: "Ty",
    age: 20
};
user.isAdmin = true;

for (let key in user) {
    console.log(key);
} // name age isAdmin