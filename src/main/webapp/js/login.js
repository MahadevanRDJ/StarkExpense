const USERNAME = document.querySelector(".login-username");
const PASSWORD = document.querySelector(".login-password");

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
function login() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/ExpenseTracker/login", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      USERNAME.value = "";
      PASSWORD.value = "";
      if (this.responseText.trim() == "Failure")
        alert("Invalid Username/Passowrd");
      else window.location.href = "/ExpenseTracker/home";
    }
  };
  xhttp.send(`name=${USERNAME.value}&password=${PASSWORD.value}`);
}
