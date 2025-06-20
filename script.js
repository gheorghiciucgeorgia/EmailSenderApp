// using the https://www.emailjs.com/
// the keys are from here: https://dashboard.emailjs.com/ 
emailjs.init("PUBLIC_KEY"); // we initialize the EmailJS with the user id so we can use the API to send emails

const sendBtn = document.querySelector(".send-btn");
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

// function to send the email
function sendEmail() {
    // Get the values from the input fields forms
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Send the email using EmailJS from the template that was created and set up
    emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
        to_email: to,
        subject: subject,
        message: message
    })
        // Handle a promise so that the user can receive feedback on the status of the email sent
        .then(function () {
            result.innerHTML = "Email sent successfully!";
            result.style.opacity = 1;
        }, function (error) {
            result.innerHTML = "Email sending failed!";
            result.style.opacity = 1;
        });
}