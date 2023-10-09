function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (username == "") {
        alert("Username must be filled out");
        return false;
    }
}
