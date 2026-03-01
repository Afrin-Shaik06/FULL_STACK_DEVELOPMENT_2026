document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("LoggedIn")){
        const loginLink = document.querySelector('a[href="login.html"]');
        const signupLink = document.querySelector('a[href="signup.html"]');
        const logoutLink = document.querySelector('a[onclick = "logout()"]');

        if(loginLink) loginLink.computedStyleMap.display = "none";
        if(signupLink) loginLink.computedStyleMap.display = "none";
        if(logoutLink) loginLink.computedStyleMap.display = "inline";
    }
});