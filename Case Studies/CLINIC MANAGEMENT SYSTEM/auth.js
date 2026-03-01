function signup(){
    const name = document.getElementById("name").value; 
    const email = document.getElementById("email").value; 
    const password = document.getElementById("password").value; 
    const confirm = document.getElementById("confirm").value; 
    const phone = document.getElementById("phone").value; 

    if (!name || !email || !password || !confirm || !phone){
        alert("All fields required");
        return;
    }
    if(password != confirm){
        alert("Passwords do not match");
        return;
    }
    const user = {name, email, password, phone};
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup Successful!");
    window.location.href = "login.html";
}

function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user || user.email !== email || user.password !==password){
        alert("Invalid credentials");
        return;
    }
    localStorage.setItem("loggedin", true);
    alert("Login successful");
    window.location.href = "index.html";
}

function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}