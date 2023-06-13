const USERPROFILE = document.querySelector(".user-profile");
const WALLET = document.querySelector(".wallet");
const TRANSACTION = document.querySelector(".add-transaction");
const CATEGORY = document.querySelector("#category-options");
const EXPENSES = document.querySelector("#expenses-options");
const DEBTS = document.querySelector("#debts-options");
const INCOME = document.querySelector("#income-options");
const AMOUNT = document.querySelector(".amount");
const ADDTRANSACTION = document.querySelector(".add-image");
const TRANSACTIONHISTORY = document.querySelector(".transaction-history");
const PROFILEDP = document.querySelector(".profile-dp");
const FIRSTNAME = document.querySelector(".first-name");
const LASTNAME = document.querySelector(".last-name");
const USERNAME = document.querySelector(".user-name");
const SAVE = document.querySelector(".save-btn");
var categoryName;
var type;
var typeName;

getUserProfile();
function goToWallet() {
  WALLET.style = "display : flex";
  USERPROFILE.style = "display : none";
  TRANSACTION.style = "display : none";
  TRANSACTIONHISTORY.style = "display : none";
  const content = WALLET.querySelector(".wallet-content");
  const walletName = WALLET.querySelector(".walletName");
  const walletAmount = WALLET.querySelector(".walletAmount");
  const walletID = WALLET.querySelector(".walletID");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const wallet = JSON.parse(this.response);
      walletName.innerHTML = wallet.walletName;
      walletAmount.innerHTML = wallet.amount;
      walletID.innerHTML = wallet.walletId;
      WALLET.append(content);
    }
  };
  xhttp.open("GET", "/ExpenseTracker/walletDisplay", true);
  xhttp.send();
}
function goToTransaction() {
  USERPROFILE.style = "display : none";
  TRANSACTION.style = "display : flex";
  TRANSACTIONHISTORY.style = "display : none";
  WALLET.style = "display : none";
  CATEGORY.addEventListener("click", selectCategory);
}
CATEGORY.addEventListener("click", () => {
  if (CATEGORY.value.length == 0) {
    DEBTS.style.display = "none";
    INCOME.style.display = "none";
    EXPENSES.style.display = "none";
    AMOUNT.style.display = "none";
    ADDTRANSACTION.style.display = "none";
  }
});
undefined;
function selectCategory() {
  categoryName = CATEGORY.value.toUpperCase();
  if (categoryName == "EXPENSES") displayExpenses();
  if (categoryName == "DEBTS") displayDebts();
  if (categoryName == "INCOME") displayIncome();
}

function displayExpenses() {
  EXPENSES.style = "display: flex";
  INCOME.style = "display: none";
  DEBTS.style = "display: none";
  EXPENSES.addEventListener("click", () => {
    type = EXPENSES;
    const expense = document.getElementById("expenses-options").value;
    typeName = expense.charAt(0).toUpperCase() + expense.slice(1);
    console.log(typeName);
    displayAmount(typeName);
  });
}

function displayDebts() {
  DEBTS.style = "display: flex";
  INCOME.style = "display: none";
  EXPENSES.style = "display: none";
  DEBTS.addEventListener("click", () => {
    type = DEBTS;
    const debt = document.getElementById("debts-options").value;
    typeName = debt.charAt(0).toUpperCase() + debt.slice(1);
    console.log(typeName);
    displayAmount(typeName);
  });
}

function displayIncome() {
  INCOME.style = "display: flex";
  EXPENSES.style = "display: none";
  DEBTS.style = "display: none";
  INCOME.addEventListener("click", () => {
    type = INCOME;
    const income = document.getElementById("income-options").value;
    typeName = income.charAt(0).toUpperCase() + income.slice(1);
    console.log(typeName);
    displayAmount(typeName);
  });
}
function displayAmount(element) {
  if (element !== "") {
    AMOUNT.style = "display: flex";
    ADDTRANSACTION.style = "display: flex";
  }
}

ADDTRANSACTION.addEventListener("click", () => {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/ExpenseTracker/home", true);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      CATEGORY.selectedIndex = 0;
      type.selectedIndex = 0;
      AMOUNT.querySelector("input").value = "";
      alert(this.response);
    }
  };
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.send(
    `category=${categoryName}&type=${typeName}&amount=${
      AMOUNT.querySelector("input").value
    }`
  );
});

function transactionHistory() {
  TRANSACTIONHISTORY.style = "display: flex";
  USERPROFILE.style = "display : none";
  TRANSACTION.style = "display : none";
  WALLET.style = "display : none";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/ExpenseTracker/transactionhistory");
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var transaction = JSON.parse(this.response);
      if (transaction.length == 0) {
        alert("No Transactions found!'");
        TRANSACTIONHISTORY.style = "display : none";
        goToTransaction();
      } else {
        getTransactionHistory(transaction);
      }
    }
  };
  xhttp.send();
}

function getTransactionHistory(transaction) {
  TRANSACTIONHISTORY.innerHTML = "";
  for (let index = transaction.length - 1; index >= 0; index--) {
    const element = transaction[index];
    var transactionDiv = `
         <div class="transaction-history-content">
          <div class="transaction-history-fields transaction-id">${
            element.transactionID
          }</div>
          <div class="transaction-history-fields transaction-category">${
            element.transactionCategory
          }</div>
          <div class="transaction-history-fields transaction-type">${
            element.transactionName
          }</div>
          <div class="transaction-history-fields transaction-date">${new Date(
            element.transactionDate
          )
            .toDateString()
            .slice(4, 15)}</div>
          <div class="transaction-history-fields transaction-amount">${
            "\u20B9" + element.amount
          }</div>
        </div> 
        `;
    TRANSACTIONHISTORY.innerHTML += transactionDiv;
    TRANSACTIONHISTORY.children[transaction.length - 1 - index].classList.add(
      element.status == "CREDIT" ? "green" : "red"
    );
  }
}

function getUserProfile() {
  WALLET.style = "display : none";
  USERPROFILE.style = "display : flex";
  TRANSACTION.style = "display : none";
  TRANSACTIONHISTORY.style = "display : none";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/ExpenseTracker/userprofile", true);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var user = JSON.parse(this.response);
      PROFILEDP.innerHTML = user.userName.charAt(0).toUpperCase();
      FIRSTNAME.innerHTML = user.userFirstName;
      LASTNAME.innerHTML = user.userLastName;
      USERNAME.innerHTML = user.userName;
    }
  };
  xhttp.send();
}
USERNAME.addEventListener("click", () => {
  USERNAME.contentEditable = true;
  FIRSTNAME.contentEditable = false;
  LASTNAME.contentEditable = false;
  SAVE.disabled = false;
});
FIRSTNAME.addEventListener("click", () => {
  FIRSTNAME.contentEditable = true;
  USERNAME.contentEditable = false;
  LASTNAME.contentEditable = false;
  SAVE.disabled = false;
});
LASTNAME.addEventListener("click", () => {
  USERNAME.contentEditable = false;
  FIRSTNAME.contentEditable = false;
  LASTNAME.contentEditable = true;
  SAVE.disabled = false;
});
SAVE.addEventListener("click", () => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/ExpenseTracker/updateprofile", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  };
  xhttp.send(`username=${USERNAME.innerText}&firstname=${FIRSTNAME.innerText}&lastname=${LASTNAME.innerText}`);
});
document.querySelector(".side-nav").addEventListener("click", () => {
  USERNAME.contentEditable = false;
  FIRSTNAME.contentEditable = false;
  LASTNAME.contentEditable = false;
  SAVE.disabled = true;
});
