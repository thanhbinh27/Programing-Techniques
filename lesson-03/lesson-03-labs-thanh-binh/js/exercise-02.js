var m = Number(prompt("Enter m: "));

switch (m) {
    case 1:
    case 2:
    case 3:
        console.log("The 1st quarter");
        alert("The 1st quarter");
        break;

    case 4:
    case 5:
    case 6:
        m = console.log("Quarter Two");
        alert("Quarter Two");
        document.write("Quarter Two");
        break;

    case 7:
    case 8:
    case 9:
        m = console.log("Quarter Three");
        alert("Quarter Three");
        document.write("Quarter Three");
        break;

    case 10:
    case 11:
    case 12:
        m = console.log("Quarter Four");
        alert("Quarter Four");
        document.write("Quarter Four");
        break;
    
    default:
        alert("Invalid m. Press F5 and input again!");
        break;
}
