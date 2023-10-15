const registrationForm = document.getElementById("registrationForm");
const thankYouMessage = document.getElementById("thankYouMessage");
const registerButton = document.getElementById("register");

registerButton.addEventListener("click", function () {
  console.log("button pressed");
  // Hide the registration form
  registrationForm.style.display = "none";

  // Display the thank you message
  thankYouMessage.style.display = "block";
});
