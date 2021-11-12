// Input: Enter math, physic, chemistry
// Output: Student rank 
// excellent (9 <= averageScore <= 10)
// good (8 <= averageScore < 9)
// great (7 <= averageScore < 8)
// average (6.5 <= averageScore < 7)
// weak (5 <= averageScore < 6.5)
// bad (averageScore < 5)

var math = 8,
    physic = 8,
    chemistry = 2
var averageScore;

if (math < 0 || math > 10 || physic < 0 || physic > 10 ||
    chemistry < 0 || chemistry > 10) {
    console.log("Invalid scores. Please input again!");
} else {
    averageScore = (math + physic + chemistry) / 3;
    console.log(averageScore);

    if (9 <= averageScore) {
        console.log("Student rank is excellent");
    } else if (8 <= averageScore) {
        console.log("Student rank is good");
    } else if (7 <= averageScore) {
        console.log("Student rank is great");
    } else if (6.5 <= averageScore) {
        console.log("Student rank is average");
    } else if (5 <= averageScore) {
        console.log("Student rank is weak");
    } else {
        console.log("Student rank is bad");
    }
}