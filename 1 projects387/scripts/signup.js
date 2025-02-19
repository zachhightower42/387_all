/**
 * signup.js
 * Validates the signup form and saves the user data to sessionStorage.
 * If the passwords match, it redirects the user to the login page.
 * @returns {boolean} - True if the form is valid and submitted, false otherwise.
 */
function validateForm() {
  var username = document.querySelector("input[name='username']").value.trim();
  var email = document.querySelector("input[name='email']").value.trim();
  var password = document.getElementById("password").value.trim();
  var confirmPassword = document
    .getElementById("password_confirm")
    .value.trim();

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return false; // Prevent form submission
  }

  // Save user data to sessionStorage
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("password", password);

  console.log("Signup - Username saved:", sessionStorage.getItem("username"));
  console.log("Signup - Password saved:", sessionStorage.getItem("password"));

  alert("Signup successful! Redirecting to login page.");
  setTimeout(function () {
    window.location.href = "login_page.html";
  }, 0); // Redirect after alert

  return true; // Allow form submission
}
