//Debit Card

let bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
  deposit: function (sum) {
    sum >= 5 && sum <= 50000
      ? (this.balance += sum)
      : alert("Некорректная сумма пополнения"); // Добавляем сумму к текущему балансу this.balance = this.balance+sum
  },
  withdraw: function (sum) {
    if (sum <= this.balance && sum > 0) {
      this.balance -= sum; // Уменьшаем сумму баланса
    } else {
      console.log("Недостаточно средств/некорректная сумма ввода");
    }
  },
  checkBalance: function () {
    console.log(`Ваш баланс составляет: ${this.balance} условных единиц.`);
  },
};

console.log(bankAccount);
bankAccount.checkBalance();

let sum = 0; //сумма к добавлению
console.log("Сумма, которую Вы выбрали будет добавлена на Ваш счет...");
bankAccount.deposit(sum);
bankAccount.checkBalance();

sum = 0; //сумма к снятию
console.log("Сумма, которую Вы выбрали будет снята с Вашего счета...");
bankAccount.withdraw(sum);
bankAccount.checkBalance();

const bank = [];

function createAccount() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  //!falsy null, '', 0, undefined, Nan
  if (name) {
    bank.push({
      ...bankAccount,
      accountNumber: bank.length + 1,
      accountHolderName: name,
    });
    alert(`Account created successfully`);
  } else {
    alert("Please enter a valid name");
  }
  nameInput.value = "";
  console.log(bank);
}
function showAccounts() {
  const accountList = document.getElementById("accountList"); // Получаем список для вывода
  accountList.innerHTML = ""; // Очищаем предыдущий список

  if (bank.length > 0) {
    for (let i = 0; i < bank.length; i++) {
      const account = bank[i];
      const listItem = document.createElement("li"); // Создаем элемент списка
      listItem.textContent =
        "Номер аккаунта: " +
        account.accountNumber +
        " | Держатель счета: " +
        account.accountHolderName +
        " | Баланс: " +
        account.balance;

      accountList.append(listItem); // Добавляем элемент в список
    }
  } else {
    alert("Аккаунты отсутствуют.");
  }
}
