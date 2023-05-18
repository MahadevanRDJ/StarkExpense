const FIRSTNAME = document.querySelector(".register-firstname");
const LASTNAME = document.querySelector(".register-lastname");
const USERNAME = document.querySelector(".register-username");
const PASSWORD = document.querySelector(".register-password");
function checkFirstName() {
  const username = document.querySelector(".register-firstname").value;
  const iv_username = document.querySelector(".iv_firstname");
  const pattern = /[a-zA-Z]+/;
  if (pattern.test(username) == false) iv_username.style.display = "block";
  if (username.length === 0) iv_username.style.display = "none";
}
function checkLastName() {
  const username = document.querySelector(".register-lastname").value;
  const iv_username = document.querySelector(".iv_lastname");
  const pattern = /[a-zA-Z]+/;
  if (pattern.test(username) == false) iv_username.style.display = "block";
  if (username.length === 0) iv_username.style.display = "none";
}
function checkUserName() {
  const username = document.querySelector(".register-username").value;
  const iv_username = document.querySelector(".iv_username");
  const pattern = /[a-zA-Z0-9]+/;
  if (pattern.test(username) == false) iv_username.style.display = "block";
  if (username.length === 0) iv_username.style.display = "none";
}
function checkPassword() {
  const password = document.querySelector(".register-password").value;
  const iv_password = document.querySelector(".iv_password");
  const pattern =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=_!*(){}|\\\\/\"':;<>,.?\\-]).{8,}$/;
  if (pattern.test(password) == false) iv_password.style.display = "block";
  if (password.length === 0) iv_password.style.display = "none";
}
function register() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/ExpenseTracker/register", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      for (const key of [USERNAME, PASSWORD, LASTNAME, FIRSTNAME]) {
        key.value = "";
      }
      var response = this.responseText;
      if (response.trim() == "Failure") {
        alert("Username already exist");
      } else {
        alert("You're account added successfully");
        window.location.href = "/ExpenseTracker/login";
      }
    }
  };
  xhttp.send(
    `firstname=${FIRSTNAME.value}&lastname=${LASTNAME.value}&username=${USERNAME.value}&password=${PASSWORD.value}`
  );
}
