var mailField = document.getElementById("user-email");

var valCode = Math.floor(100000 + Math.random() * 900000);
localStorage.setItem("savedCode", valCode);

var time = null;

var sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", function(){
    if(time == null || Date.now() > time){
        sendEmail();
        if(mailField){
            let savedMail = localStorage.getItem("savedEmail");
            let sentence = `Таны ${savedMail} хаяг руу баталгаажуулах код явуулсан.`;
            mailField.textContent = sentence;
        }
    }
    else {
        alert("Please wait for 5 minutes");
    }
});

function ClickConfirmButton()
{
    var confirmCode = document.getElementById("confirm-code")?.value;
    if(confirmCode == "")
    {
        alert("Confirm field must be filled out");
        return;
    }
    else if(confirmCode != localStorage.getItem("savedCode")){
        alert("Please enter a correct confirm code")
        return;
    }
    alert("Баталгаажлаа!");
    window.location.href = "./main.html";
}

function sendEmail(){
    var params = {
        name: localStorage.getItem("savedName"),
        email: localStorage.getItem("savedEmail"),
        message : "Validation code is: " + localStorage.getItem("savedCode") + "."
    };

    const serviceId = "service_9p8xn5g";
    const templateId = "template_ib7rx9z";
    
    emailjs.send(serviceId, templateId, params)
    .then(
        res => {
            localStorage.setItem("savedUsername", "");
            localStorage.setItem("savedEmail", "");
            time = Date.now() + 300000;
            alert("message sent!");
        })
        .catch((err) => console.log(err));
}

function Style(){
    document.body.style.background = data_color.light.bodyBackground;
    document.getElementsByClassName("register-box")[0].style.background = data_color.light.registerBoxBackground;
    document.getElementsByClassName("register-box")[0].style.boxShadow = data_color.light.registerBoxShadow;
}

var data_color = {
    light : {
        bodyBackground : "linear-gradient(to right, #00b4db, #0083b0)",
        registerBoxBackground : "rgba(255, 255, 255, 0.9)",
        registerBoxShadow : "0 0 20px rgba(0, 0, 0, 0.3)",
    }
}