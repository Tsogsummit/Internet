function validateForm() {
    var username = document.getElementById("username")?.value;
    var email = document.getElementById("email")?.value;
    var password = document.getElementById("password")?.value;
    var phone = document.getElementById("phone")?.value;

    var isProper = CheckProperInfo(username, email, password, phone);
    if(!isProper)
        return;
    window.location.href = "./confirm_email.html";
}

function CheckProperInfo(username, email, password, phone) {
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
        return false;
    }

    var regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    else if (!regex.test(password)) {
        alert("Password must contain at least one uppercase and one lowercase letter.");
        return false;
    }

    if (phone == "") {
        alert("Phone must be filled out");
        return false;
    }
    else if (phone.length != 8) {
        alert("Phone number must be 8 digits.");
        return false;
    }

    return true;
}
