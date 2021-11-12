var numberator, denominator, faction;

function inqutFaction() {
    numberator = Number(prompt("Enter numberator: "));
    denominator = Number(prompt("Enter denominator: "));   
}

function findGCD(a, b) {
    if (a == 0 && b != 0) {
        return b;
    } else if (b == 0 && a != 0) {
        return a;
    } else if (a == 0 && b == 0) {
        return false;
    } else if (a % b == 0) {
        return b;
    } else if (b % a == 0) {
        return a;
    } else { // a !=  0, b != 0
        while (a != b) {
            if (a > b) {
                a -= b;
            } else {
                b -= a;
            }
        }
    }
}

function outputFaction() {
    faction = numberator/findGCD(numberator, denominator) + "/" + denominator/findGCD(numberator, denominator); 
    document.write("Faction is: " + numberator + "/" + denominator + "<br>");
    document.write("Simplify fractions: " + faction);
}


function main() {
    inqutFaction();
    outputFaction();
}

main();
