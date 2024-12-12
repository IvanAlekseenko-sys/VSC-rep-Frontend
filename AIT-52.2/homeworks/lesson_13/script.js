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
      alert("Недостаточно средств/некорректная сумма ввода");
    }
  },
  checkBalance: function () {
    console.log(`Ваш баланс составляет: ${this.balance} условных единиц.`);
  },
};

console.log(bankAccount);
bankAccount.checkBalance();

// let sum = 0; //сумма к добавлению
// console.log("Сумма, которую Вы выбрали будет добавлена на Ваш счет...");
// bankAccount.deposit(sum);
// bankAccount.checkBalance();

// sum = 0; //сумма к снятию
// console.log("Сумма, которую Вы выбрали будет снята с Вашего счета...");
// bankAccount.withdraw(sum);
// bankAccount.checkBalance();

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
    alert(`Аккаунт успешно создан`);
  } else {
    alert("Пожалуйста, введите корректное имя");
  }
  nameInput.value = "";
  console.log(bank);
}
function showAccounts() {
  const accountList = document.getElementById("accountList"); // Получаем список для вывода
  accountList.innerHTML = ""; // Очищаем предыдущий список
  //! первый вариант через forof
  // for (const account of bank) {

  // const li = document.createElement("li")
  // li.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance ${account.balance}`
  // accountList.append(li)

  // //! второй вариант через innerHtml
  //   accountList.innerHTML += (
  //     `<li>
  //       ID: ${account.accountNumber}, Name: ${account.accountHolderName},
  //       Balance ${account.balance}
  //     </li>`
  //   );
  // }

  //!3 вариант перебора обычным for
  // if (bank.length > 0) {
  //   for (let i = 0; i < bank.length; i++) {
  //     const account = bank[i];
  //     const listItem = document.createElement("li"); // Создаем элемент списка
  //     listItem.textContent =
  //       "Номер аккаунта: " +
  //       account.accountNumber +
  //       " | Держатель счета: " +
  //       account.accountHolderName +
  //       " | Баланс: " +
  //       account.balance;

  //     accountList.append(listItem); // Добавляем элемент в список
  //   }
  // } else {
  //   alert("Аккаунты отсутствуют.");
  // }

  //! 4 вариант через foreach (самый удобный)
  bank.forEach((account, index) => {
    accountList.innerHTML += `<li> ${index + 1}
        ID: ${account.accountNumber}, Name: ${account.accountHolderName},
        Balance ${account.balance}}
        <button onclick="deleteAccount(${
          account.accountNumber
        })">Delete</button>
      </li>`;
  });
}
const deposit = document.getElementById(`deposit`);
const withdraw = document.getElementById(`withdraw`);

deposit.onclick = function () {
  //TODO (описание действия при нажатии на кнопку Deposit)
  const amount = parseFloat(document.getElementById("amount").value);
  const accountId = document.getElementById("accountId").value.trim();
  const account = bank.find((e) => e.accountNumber.toString() === accountId);
  if (account) {
    account.deposit(amount);
    showAccounts();
  }
};

withdraw.onclick = function () {
  //TODO (описание действия при нажатии на кнопку Withdraw)
  const amount = parseFloat(document.getElementById("amount").value);
  const accountId = document.getElementById("accountId").value.trim();
  const account = bank.find((e) => e.accountNumber.toString() === accountId);
  if (account) {
    account.withdraw(amount);
    showAccounts();
  }
};
function deleteAccount(id) {
  const index = bank.findIndex(
    i => i.accountNumber.toString() === id.toString()
  );

  if (index !== -1) {
    bank.splice(index, 1);
    alert(`Account deleted successfully`);
    showAccounts();
  } else {
    alert("Account not found");
  }
}

// function deleteAccount() {
//   const idInput = document.getElementById("accountId2");
//   const id = idInput.value.trim();

//   if (id) {
//     // ищем индекс по айди
//     const index = bank.findIndex(
//       (account) => account.accountNumber.toString() === id
//     );

//     if (index !== -1) {
//       // удаление элемента в массиве по индексу
//       bank.splice(index, 1);
//       alert(`Аккаунт успешно удален`);
//       showAccounts();
//     } else {
//       alert("Аккаунт не найден");
//     }
//   } else {
//     alert("Пожалуйста, введите корректный ID");
//   }
//   idInput.value = "";
//   console.log(bank);
// }
