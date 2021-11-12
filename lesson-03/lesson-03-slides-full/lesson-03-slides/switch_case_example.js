// Input: day
// Output: day is even or odd

var day = 8;

switch (day) {
    case 2:
    case 4:
    case 6:
    case 8:
        console.log("day is even");
        break;
    case 3:
    case 5:
    case 7:
        console.log("day is odd");
        break;
    default:
        console.log("do not day in week");
        break;
}