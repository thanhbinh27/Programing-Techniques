// var user = {
//     name: "Teo",
//     age: 18,
//     sayName: function() {
//         console.log(this.name);
//     }
// };
// user.sayName(); // Teo

let student = {
    id: 1,
    name: "Tran Trung Hieu",
    age: 18,
    doLabs: function() {
        console.log("Tuổi tôi là: " + this.age);
    }
}
student.doLabs();