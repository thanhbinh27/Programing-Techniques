let stundent = {
    id: 1,
    name: "Nguyen Thanh Binh",
    age: 18,
    doLabs:  function() {
        console.log(this.name);
    }
};

stundent.doLabs()