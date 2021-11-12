let prompt = require('prompt-sync')();

class Contact {
    constructor(id, firstName, lastName, phone) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
}

function pushContact(arr) {
    let contact01 = new Contact("1234", "Binh", "Nguyen", "12323323");
    let contact02 = new Contact("1235", "Trung", "Nguyen", "13232134");
    let contact03 = new Contact("1236", "Lam", "Nguyen", "12532323");
    arr.push(contact01);
    arr.push(contact02);
    arr.push(contact03);
}

function inputArrayContacts(n, arr) {
    if (n > 0) {
        for (let i = 3; i < n + 3; i++) {
            let ir = i - 2;
            let newContact = new Contact();
            newContact.id = prompt("Enter Contact[" + ir + "] id: ");
            newContact.firstName = prompt("Enter Contact[" + ir + "] first name: ");
            newContact.lastName = prompt("Enter Contact[" + ir + "] last name: ");
            newContact.phone = Number(prompt("Enter Contact[" + ir + "] phone: "));
            arr[i] = newContact;
        }
    }
    else {
        console.log("Invalid n! Please input again!")
    }
}

function outputArrayContacts(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function sortAscending(arr) {
    for (let i = 0; i <= arr.length - 2; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i].firstName > arr[j].firstName) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function findFirstName(arr) {
    let x = prompt("Enter first name you want to find: ")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].firstName == x) {
            x = arr[i];
        }
    }
    return x;
}

function deleteByPosition(arr) {
    let pos = prompt("Enter first name you want to delete: ")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].firstName == pos) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

function editContacts(arr) {
    let x = prompt("Enter first name you want to find: ");
    let newId = prompt("Enter id you want to change: ")
    let newFirstName = prompt("Enter first name you want to change: ");
    let newLastName = prompt("Enter last name you want to change: ");
    let newPhone = prompt("Enter first name you want to change: ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].firstName == x) {
            arr[i].id = newId;
            arr[i].firstName = newFirstName;
            arr[i].lastName = newLastName;
            arr[i].phone = newPhone;
            x = arr[i];
        }
    }
    return x;
}


function main() {
    let arr = [];
    pushContact(arr);
    console.log(arr);
    let n = Number(prompt("Entter contact number (n > 0) want to add: "));

    console.log("\n--- Input Contacts ---");
    inputArrayContacts(n, arr);

    console.log("\n--- Ouput Contacts ---");
    outputArrayContacts(arr);

    console.log("\n--- Display Contacts Sorted By Frist Name ---");
    sortAscending(arr);
    outputArrayContacts(arr);

    console.log("\n--- Find Contacts By First Name ---");
    let find = findFirstName(arr);
    console.log(find);

    console.log("\n--- Delete Contacts By First Name---");
    let del = deleteByPosition(arr);
    console.log(del);

    console.log("\n--- Edit Contacts ---");
    let update = editContacts(arr);
    console.log(arr);
}

main();