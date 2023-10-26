var mailField = document.getElementById("user-email");
if(mailField)
{
    let savedMail = localStorage.getItem("savedEmail");
    let sentence = `Таны ${savedMail} хаяг руу баталгаажуулах код явуулсан.`;
    mailField.textContent = sentence;
}

function ClickConfirmButton()
{
    var confirmCode = document.getElementById("confirm-code")?.value;
    if(confirmCode == "")
    {
        alert("Confirm field must be filled out");
        return;
    }
    else if(confirmCode.length != 6)
    {
        alert("Please enter a correct confirm code")
        return;
    }
    alert("Баталгаажлаа!");
}

function sendEmail(){
    var params = {
        name: localStorage.getItem("savedName"),
        email: localStorage.getItem("savedEmail"),
        message : "Hello there!"
    };

    const serviceId = "service_9p8xn5g";
    const templateId = "template_ib7rx9z";
    
    emailjs.send(serviceId, templateId, params)
    .then(
        res => {
            localStorage.setItem("savedUsername", "");
            localStorage.setItem("savedEmail", "");
            console.log(res);
            alert("message sent!");
        })
        .catch((err) => console.log(err));
}