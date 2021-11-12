const mySymbol = Symbol();
console.log(mySymbol);
const mySymbol2 = Symbol();
console.log(mySymbol2);

var isCheck;
if (mySymbol === mySymbol2) {
    isCheck = true;
} else {
    isCheck = false;
}
console.log(isCheck);