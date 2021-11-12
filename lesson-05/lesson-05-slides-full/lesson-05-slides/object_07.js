var user = {
    name: "Teo",
    age: 18
};
user.isAdmin = true;
console.log(user); //{ name: 'Teo', age: 18, isAdmin: true }

delete user.age;
console.log(user); //{ name: 'Teo', isAdmin: true }