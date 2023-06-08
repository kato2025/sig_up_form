let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirmPassword");

confirmPasswordInput.addEventListener("input", function () {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity("Passwords do not match");
  } else {
    confirmPasswordInput.setCustomValidity("");
  }
});