let balance = 10000; 

function displayBalance() {
  alert("Your current balance is: $" + balance);
}

function cashIn() {
  let amount = prompt("Enter the amount to deposit:");
  if (amount === null || amount === "") {
    alert("Invalid input. Please enter a valid amount.");
    return;
  }
  amount = Number(amount);
  if (isNaN(amount)) {
    alert("Invalid input. Please enter a valid amount.");
    return;
  }
  balance += amount;
  alert("Cash deposited successfully. Your new balance is: $" + balance);
}

function cashOut() {
  let amount = prompt("Enter the amount to withdraw:");
  if (amount === null || amount === "") {
    alert("Invalid input. Please enter a valid amount.");
    return;
  }
  amount = Number(amount);
  if (isNaN(amount)) {
    alert("Invalid input. Please enter a valid amount.");
    return;
  }
  if (amount > balance) {
    alert("Insufficient funds. Your current balance is: $" + balance);
  } else {
    balance -= amount;
    alert("Cash withdrawn successfully. Your new balance is: $" + balance);
  }
}


displayBalance(); 

let choice = prompt("Enter 1 to Cash In, 2 to Cash Out:");

if (choice === "1") {
  cashIn(); 
} else if (choice === "2") {
  cashOut(); 
} else {
  alert("Invalid choice. Please try again.");
}
