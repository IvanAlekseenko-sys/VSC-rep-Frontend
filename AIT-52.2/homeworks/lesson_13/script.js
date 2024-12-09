//Debit Card
// Создать объект bankAccount, который:
/*
1. accountNumber: "123456789"
2. accountHolderName: "Alice"
3. balance: 0
4. deposit(sum){
TODO Пополнение счета }
5. withdraw(sum){
TODO Снятие с счета }
6. checkBalance(){
TODO Просмотр баланса счета}
*/

let bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
  deposit: function (sum) {
    this.balance += sum; // Добавляем сумму к текущему балансу
  },
  withdraw: function (sum) {
    if (sum <= this.balance) {
      this.balance -= sum; // Уменьшаем сумму баланса
    } else {
      console.log("Недостаточно средств");
    }
  },
  checkBalance: function () {
    console.log(`Ваш баланс составляет: ${this.balance} условных единиц.`);
  },
};

console.log(bankAccount);
bankAccount.checkBalance();

let sum = 20; //сумма к добавлению
console.log("Сумма, которую Вы выбрали будет добавлена на Ваш счет...");
bankAccount.deposit(sum);
bankAccount.checkBalance();

sum = 10; //сумма к снятию
console.log("Сумма, которую Вы выбрали будет снята с Вашего счета...");
bankAccount.withdraw(sum);
bankAccount.checkBalance();
