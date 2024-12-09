console.log("hello, object!");

//object
//сложный тип данных
//синтаксис объекта включает фигурные скобки

//Объекты - это структура данных, состоящая из пар "ключ:значение"

// пример объекта
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

//1.точечная нотация
console.log(user.name);
//2.квадратные скобки
console.log(user["name"]);
//3. обращение к несуществующему элементу
console.log(user.salary);
console.log(user["salary"]);

user.salary = 5000;
console.log(user);
user.age = 31;
console.log(user);

user.greet = function () {
  console.log(`Привет, меня зовут ${this.name} и мне ${this.age}`);
};
user.greet();

//! Дз
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
