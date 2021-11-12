var prompt = require('prompt-sync')();

console.log("\nInput point:");
var pointP = {
    pX: Number(prompt("Enter pX of Point P: ")),
    pY: Number(prompt("Enter pY of Point P: "))
}

var pointQ = {
    qX: Number(prompt("Enter qX of Point Q: ")),
    qY: Number(prompt("Enter qX of Point Q: "))
}


function outputPoint() {
    console.log("\nOutput point:");
    console.log("Point P(" + pointP.pX + ", " + pointP.pY + ")");
    console.log("Point Q(" + pointQ.qX + ", " + pointQ.qY + ")");
}

function edgePQ() {
    var edgePQ = Math.sqrt(((pointQ.qX - pointP.pX) * (pointQ.qX - pointP.pX)) + ((pointQ.qY - pointP.pY) * (pointQ.qY - pointP.pY)));
    console.log("\nEdge PQ = " + edgePQ.toFixed(2));
}

function direction0X() {
    var edgeDOX = Math.sqrt(((pointQ.qX - pointP.pX) * (pointQ.qX - pointP.pX)));
    console.log("\nEdge PQ in direction Ox = " + edgeDOX.toFixed(2));
}

function direction0Y() {
    var edgeDOY = Math.sqrt(((pointQ.qY - pointP.pY) * (pointQ.qY - pointP.pY)));
    console.log("\nEdge PQ in direction Ox = " + edgeDOY.toFixed(2));
}

function axitOfSymmetry() {
    if (pointP.pX == pointQ.qX && pointP.pY * pointQ.qY == -1) {
        console.log("\nPoint P is symmetry point Q through Ox!");
    }
    else if (pointP.pX * pointQ.qX == -1 && pointP.pY == pointQ.qY) {
        console.log("\nPoint P is symmetry point Q through Oy!");
    }
    else {
        console.log("\nNo axis of symmetry!");
    }
}

function main() {
    outputPoint();
    edgePQ();
    direction0X();
    direction0Y();
    axitOfSymmetry();
}

main();
