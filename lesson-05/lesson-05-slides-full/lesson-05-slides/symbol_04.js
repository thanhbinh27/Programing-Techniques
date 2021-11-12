const NAME = Symbol();
const RUN = Symbol();
const SAY = Symbol();
const person = {
    [NAME]: 'Teo',
    [NAME]: 'Ty',
    [RUN]: () => 'Person is running',
};
person[NAME]; //'Teo'
console.log(person[NAME]); //'Teo'

// const RUN = Symbol();
// person[RUN] = () => 'Person is running';
// console.log(person[RUN]()); //'Person is running'
console.log(person[RUN]());