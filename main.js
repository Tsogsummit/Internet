function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (username == "") {
        alert("Username must be filled out");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
}
