var prompt = require('prompt-sync')();

console.log("--- Input triangle ABC ---")
var triangleABC = {
    pointA: Number(prompt("Enter point A: ")),
    pointB: Number(prompt("Enter point B: ")),
    pointC: Number(prompt("Enter point C: "))
}

function output() {
    console.log("\n--- Onput triangle ABC ---")
    console.log("Point A: " + triangleABC.pointA);
    console.log("Point B: " + triangleABC.pointB);
    console.log("Point C: " + triangleABC.pointC);
}

function perimeterABC() {
    if ((triangleABC.pointA + triangleABC.pointB > triangleABC.pointC) && (triangleABC.pointA + triangleABC.pointC > triangleABC.pointB)
        && (triangleABC.pointB + triangleABC.pointC > triangleABC.pointA)) {
        var P = triangleABC.pointA + triangleABC.pointB + triangleABC.pointC
        console.log("\n--- Perimeter of triangle ABC ---" );
        console.log("\nPerimeter of triangle ABC = " + P);
    }
    else {
        console.log("\nDoes not exist triangle ABC!");
    }
}

function triangleAreaABC() {
    if ((triangleABC.pointA + triangleABC.pointB > triangleABC.pointC) && (triangleABC.pointA + triangleABC.pointC > triangleABC.pointB)
        && (triangleABC.pointB + triangleABC.pointC > triangleABC.pointA)) {
        var p = (triangleABC.pointA + triangleABC.pointB + triangleABC.pointC) / 2
        var s = Math.sqrt(p * (p - triangleABC.pointA) * (p - triangleABC.pointB) * (p - triangleABC.pointC));
        console.log("\n--- Triangle area ABC ---" );
        console.log("\nTriangle area ABC = " + s.toFixed(2));
    }
    else {
        console.log("\nDoes not exist triangle ABC!");
    }
}

function main() {
    output();
    perimeterABC();
    triangleAreaABC();
}

main();