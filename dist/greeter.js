class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    console.log("clicked");
    return "Hello kapil, " + person.firstName + " " + person.lastName;
}
// var user = new Student("Jane", "M.", "User");
// document.body.innerHTML = greeter(user);
window.onload = () => {
    // var docContext = document.getElementById('content');
    var button = document.createElement("button");
    button.innerText = "Add";
    var user = new Student("Jane", "M.", "User");
    // document.body.innerHTML = greeter(user);
    button.onclick = (e) => greeter(user);
    // docContext.appendChild(button);
    document.body.appendChild(button);
};
//# sourceMappingURL=greeter.js.map