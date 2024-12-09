// Задание 1
// Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".
let arrayNames = ["Мария", "Алексей", "Елена", "Дмитрий"];
let arrayAges = [22, 31, 45, 53];
let arrayNamesAges = [
  "Мария " + 22,
  "Алексей " + 31,
  "Елена " + 45,
  "Дмитрий " + 53,
];
console.log(arrayNamesAges);

// Задание 2
// Используя методы массива, получите из этого массива новый массив, в котором элементы идут в обратной последовательности.
let reverseArrayNamesAges = arrayNamesAges.reverse();
console.log(reverseArrayNamesAges);

// Задание 3
// Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия". Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль.

let countries = [];
countries.push("Франция", "Германия", "Италия");
console.log(countries);
let lastElementCountries = countries.pop();
console.log(countries);
countries.unshift(lastElementCountries);
console.log(countries);

// Задание 4
// Создайте массив с числами 1, 2, 3, 4, 5. Используя цикл for:

// Умножьте каждый элемент на 2 и выведите результат в консоль.
// Создайте новый массив, где каждый элемент будет равен квадрату элемента из исходного массива.
// Выведите оба массива (исходный и новый) в консоль.

let arrayNumbers = [];
for (let i = 1; i < 6; i++) {
  arrayNumbers.push(i);
}
console.log(arrayNumbers);

let arrayNumbersX2 = [];
for (let i = 0; i < arrayNumbers.length; i++) {
  arrayNumbersX2[i] = arrayNumbers[i] * 2;
}
console.log(arrayNumbersX2);

let originalArray = [1, 2, 3, 4, 5];
let squaredArray = [];

for (let i = 0; i < originalArray.length; i++) {
  squaredArray[i] = originalArray[i] * originalArray[i];
}
console.log(originalArray);
console.log(squaredArray);

//! для инфо> разбор дз
//поверхностное копирование
let testArray = [20, 14, 19];
let testArrayCopy = testArray;
console.log(testArray);
console.log(testArrayCopy);

//глубокое копирование
testArray = [20, 14, 19];
testArrayCopy = testArray;
testArrayCopy = [...testArray];
testArray[0] = 200;

console.log(testArray);
console.log(testArrayCopy);

let result = [];

for (let i = 0; i < testArray.length; i++) {
  result.push(`${arrayNames[i]} ${arrayAges[i]} лет/годов`); //шаблонная строка
  //result.push(testArray[i] + " " + testArrayCopy[i] + "лет/годов")//конкатенация
}
console.log(result);
let resultReverse = [];

for (let i = result.length - 1; i >= 0; i--) {
  resultReverse.push(result[i]);
}

let resultReversed2 = result.reverse();
console.log(resultReversed2);

for (const i in arrayNames) {
  result.push(`${arrayNames[i]} ${arrayAges[i]} лет/годов`);
}

for (const name of arrayNames) {
  console.log(name);
}

const numbersss = [1, 2, 3, 4, 5];
for (const i in numbersss) {
  console.log(numbersss[i]);
}
