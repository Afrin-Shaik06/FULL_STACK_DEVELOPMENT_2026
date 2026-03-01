//function test(){
    //var paragraph= document.getElementById("para");
    //paragraph.innerText = "Button Clicked";
    //paragraph.style.backgroundColor="yellow";
    //document.writeln(paragraph.innerTest);
    
    //var paragraphs = document.querySelectorAll("p");
    //paragraphs[1] . innerText =
    
    //let paragraph = document.createElement("h1");
    //paragraph.textContent = "this is created using js";
    //document.getElementsByClassName("example") [0].appendChild(paragraph);

    //let header = document.createElement("h2");
    //header.textContent = "this js";
    //document.getElementsByClassName("example") [0].appendChild(header);

    // function showConfirm() {
    //   const response = confirm("Do you want to continue?");
      
    //   if (response) {
    //     document.getElementById("result").textContent = "User clicked OK";
    //   } else {
    //     document.getElementById("result").textContent = "User clicked Cancel";
    //   }
    // }

    // //ALERT
    // function showAlert() {
    //   alert("This is an alert message!");
    // }

    // // CONFIRM
    // function showConfirm() {
    //   const response = confirm("Do you want to continue?");
      
    //   if (response) {
    //     document.getElementById("result").textContent = "User clicked OK";
    //   } else {
    //     document.getElementById("result").textContent = "User clicked Cancel";
    //   }
    // }
    // // PROMPT
    // function showPrompt() {
    //   const name = prompt("What is your name?");
      
    //   if (name !== null && name !== "") {
    //     document.getElementById("result").textContent = `Hello, ${name}!`;
    //   } else {
    //     document.getElementById("result").textContent = "User cancelled or entered nothing";
    //   }
    // }

    
    function test(){
        //create
        let header = document.createElement("h1");
        header.textContent = "shaik";
        document.querySelector(".ex2").appendChild(header);
        //read
        let read = document.getGetElementById("trial");
        read.innerText = "this is updated text";

        //delete
        let del = document.getElementById("trial");
        del.remove(); 
    }