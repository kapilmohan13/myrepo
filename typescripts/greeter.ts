class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
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
    button.onclick = (e: Event) => greeter(user);
    // docContext.appendChild(button);
    document.body.appendChild(button);
    
}