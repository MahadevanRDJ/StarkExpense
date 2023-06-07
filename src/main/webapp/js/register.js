const FIRSTNAME = document.querySelector(".register-firstname");
const LASTNAME = document.querySelector(".register-lastname");
const USERNAME = document.querySelector(".register-username");
const PASSWORD = document.querySelector(".register-password");

function checkFirstName() {
  const firstname = FIRSTNAME.value;
  const pattern = /[a-zA-Z]+/;
  if (pattern.test(firstname) == false) FIRSTNAME.classList.add("box-shadow-cr");
  if (pattern.test(firstname) == true) FIRSTNAME.classList.add("box-shadow-gr");
}
function checkLastName() {
  const lastname = LASTNAME.value;
  const pattern = /[a-zA-Z]+/;
  if (pattern.test(lastname) == false) LASTNAME.classList.add("box-shadow-cr");
  if (pattern.test(lastname) == true) LASTNAME.classList.add("box-shadow-gr");
}
function checkUserName() {
  var username = USERNAME.value;
  const pattern = /[a-zA-Z0-9]+/;
  if (pattern.test(username) == false) USERNAME.classList.add("box-shadow-cr");
  if (pattern.test(username) == true) USERNAME.classList.add("box-shadow-gr");
}
function checkPassWord() {
  var password = PASSWORD.value;
  const pattern =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=_!*(){}|\\\\/\"':;<>,.?\\-]).{8,}$/;
  if (pattern.test(password) == false) PASSWORD.classList.add("box-shadow-cr");
  if (pattern.test(password) == true) PASSWORD.classList.add("box-shadow-gr");
}
USERNAME.addEventListener("mouseleave", () => {
  if (USERNAME.value.length === 0) {
    USERNAME.classList.remove("box-shadow-cr");
    USERNAME.classList.remove("box-shadow-gr");
  }
});
PASSWORD.addEventListener("mouseleave", () => {
  if (PASSWORD.value.length === 0) {
    PASSWORD.classList.remove("box-shadow-cr");
    PASSWORD.classList.remove("box-shadow-gr");
  }
});
FIRSTNAME.addEventListener("mouseleave", () => {
  if (FIRSTNAME.value.length === 0) {
    FIRSTNAME.classList.remove("box-shadow-cr");
    FIRSTNAME.classList.remove("box-shadow-gr");
  }
});
LASTNAME.addEventListener("mouseleave", () => {
  if (LASTNAME.value.length === 0) {
    LASTNAME.classList.remove("box-shadow-cr");
    LASTNAME.classList.remove("box-shadow-gr");
  }
});

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
