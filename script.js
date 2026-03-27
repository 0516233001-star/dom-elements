console.log("Script started");

function start() {
    console.log("click");

    // 1. Create a heading
    let heading = document.createElement("h1");

    // 2. Set text and styles
    heading.innerText = "Attendance";
    heading.style.color = "blue";
    heading.style.textDecoration = "underline";

    // 3. Add the heading to the page
    document.body.appendChild(heading);

    // 4. what is your name
    let userName = prompt("What is your name");
    console.log(userName);
    
     addName(userName);

     let userLastName = prompt("What is your last name");
}

function addName(newName, lastName) {
    // 1. add a h2
    let secondHeading = document.createElement("h2");

    secondHeading.innerText = newName;

    secondHeading.style.color = "blue";

    document.body.appendChild(secondHeading);
}

