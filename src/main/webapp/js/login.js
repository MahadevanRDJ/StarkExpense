function checkUserName() {
  const username = document.querySelector(".login-username").value;
  const iv_username = document.querySelector(".iv_username");
  const pattern = /[a-zA-Z0-9]+/;
  if (pattern.test(username) == false) iv_username.style.display = "block";
  if (username.length === 0) iv_username.style.display = "none";
}
function checkPassWord() {
  const password = document.querySelector(".login-password").value;
  const iv_password = document.querySelector(".iv_password");
  const pattern =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=_!*(){}|\\\\/\"':;<>,.?\\-]).{8,}$/;
  if (pattern.test(password) == false) iv_password.style.display = "block";
  if (password.length === 0) iv_password.style.display = "none";
}

function login() {
  const username = document.querySelector(".login-username");
  const password = document.querySelector(".login-password");
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/ExpenseTracker/login", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      username.value = "";
      password.value = "";
      if(this.responseText.trim() == "Failure") alert("Invalid Username/Passowrd");
      else window.location.href = "/ExpenseTracker/home";
    }
  };
  xhttp.send(`name=${username.value}&password=${password.value}`);
}
