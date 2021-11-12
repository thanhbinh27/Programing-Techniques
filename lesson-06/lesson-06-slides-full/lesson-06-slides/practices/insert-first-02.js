let students = ['Tý', 'Tèo', 'Tồ'];
let n = students.length;
console.log(students);

function insertFirst(student) {
    for (let i = n; i > 0; i--) {
        students[i] = students[i - 1];
    }
    students[0] = student;
    n++;
}

insertFirst();
console.log(students);