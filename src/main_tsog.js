function validateForm() {
    var username = document.getElementById("username")?.value;
    var email = document.getElementById("email")?.value;
    var password = document.getElementById("password")?.value;
    var phone = document.getElementById("phone")?.value;
    var firstname = document.getElementById("firstname")?.value;
    var lastname = document.getElementById("lastname")?.value;
    var age = document.getElementById("age")?.value;
    
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

    var regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(password == "") {
        alert("Password must be filled out");
        return false;
    }
    else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
    else if(!regex.test(password)) {
        alert("Password must contain at least one uppercase and one lowercase letter.");
        return;
    }

    if(phone == ""){
        alert("Phone must be filled out");
        return false;
    }
    else if(phone.length != 8){
        alert("Phone number must be 8 digits.");
        return;
    }

    alert("You have successfully registered!");
}