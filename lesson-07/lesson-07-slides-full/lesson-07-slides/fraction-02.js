var prompt = require('prompt-sync')();

var phanSo = {
    tuSo: 0,
    mauSo: 0
}

function input() {
    phanSo.tuSo = prompt("Tử số: ");
    phanSo.mauSo = prompt("Mẫu số: ");
}

function output() {
    console.log(phanSo.tuSo + "/" + phanSo.mauSo);
}

function main() {
    input();
    output();
}

main();