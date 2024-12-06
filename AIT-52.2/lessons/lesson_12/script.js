console.log("hello, arrays!");

// ! arrays
// сложный тип данных
// синтаксис массива включает квадратные скобки

let numbers = [1, 2, 3, 4, 5];
let fruits = ["orange", "apple", "banana"];

// чтобы обратиться к элементу массива мы используем индекс
// индекс - это порядковый номер элемента в массиве, начинаются с 0
let item = fruits[0];

// если мы обратимся к несуществующему индексу мы получаем undefined
let secret = fruits[10];

// мы можем создавать массивы из разных типов данных
// но как правило это не нужно и неудобно 🫠
let arr1 = [1, false, undefined, "strawberry"];

// выводим значение длины массива
let length = arr1.length;
console.log("длина массива arr1  ==>>> ", length);

// обращение к последнему элементу массива
// вычитаем из длины единицу и получаем индекс последнего элемента
let lastElement = arr1[arr1.length - 1];

console.log(lastElement);

// ! arrays methods: push(), pop()

// методы массивов можно разделить на две группы:

// 1. Мутирующие - изменяют исходный массив
// 2. Не мутирующие - возвращают новый массив с измененными данными

// * push(), pop() - мутирующие методы 👨‍🔬

// push() - метод добавления элемента в конец массива
// в push() мы передаем новый элемент массива в круглых скобках
// возвращенное значение - длина измененного массива

// ! будьте осторожны с мутирующими методами!
// ! например, результат push()  если положить его в новую переменную
// ! это будет длина нового измененного массива (а не сам массив)

// * newArrLength - это длина нового массива
// let newArrLength = fruits.push('pineapple');

// console.log('вот что в arr', newArrLength)
// console.log(fruits)

// ! вызывайте метод и используйте измененные данные

fruits.push("pineapple");
fruits.push("watermelon");

// console.log(fruits)

// pop() - метод удаления элемента из конца массива
// возвращенное значение - удаленный элемент

// одним действием удаляем элемент из массива и записываем его в новую переменную lastFruit
let lastFruit = fruits.pop();

console.log("удаленный элемент  ===>  ", lastFruit);
console.log("новый измененный массив  ===>  ", fruits);

// ! for loop - цикл for
// i - переменная итератор, число которое мы изменяем при каждой итерации
// его удобно использовать как индекс в массиве, если конец цикла ориентирован на длину массива

for (let i = 0; i < fruits.length; i++) {
  console.log("Элемент", i, fruits[i]);
}

// ! while - цикл

let count = 0;

// в круглых скобках условие для выхода из цикла
while (count < 3) {
  // если не написать строчку ниже (count ++) мы попадем в бесконечный цикл (не будет соблюдено условие для выхода из цикла)
  count++;
  console.log(count);
}

// ! методы работы со строками

let planet = "Planet Earth";

// длина строки - свойство length

let planetLength = planet.length;

console.log("длина переменной planet ==> ", planetLength);

// * приведение строки к нижнему регистру
// не забываем сделать вызов метода

let lowerCase = planet.toLowerCase();

console.log("планета в нижнем регистре ==>  ", lowerCase);

// * приведение строки к верхнему регистру

let upperCase = planet.toUpperCase();

console.log("планета в верхнем регистре ==>  ", upperCase);

// * получение подстроки - substring
// мы можем обрезать исходную строку указав два индекса
// 1. левый индекс входит
// 2. правый индекс не входит (указываем следующий после нужного нам в подстроке)

// * в substring(0, 6) - мы получаем строку с 0 по 5 индекс

let substring = planet.substring(0, 6);

console.log("подстрока с 0 по 5 включительно ===>  ", substring);

// * поиск индекса подстроки
// если подстрока не найдена мы получим не индекс ее начала, а -1

let indexOfPlanet = planet.indexOf("E");

console.log("индекс подстроки Earth  ===>  ", indexOfPlanet);

console.log("символ под индексом 7 ===>  ", planet[7]);

// ! сложные операции над числами с Math
// Math.random() - получение случайного числа от 0 до 1

let random = Math.random();
console.log(random);

// случайное число от 1 до 100 включительно

let randomFloor = Math.floor(Math.random() * 100) + 1;
console.log(randomFloor);

// случайное число от 0 до 100

let randomFloor1 = Math.floor(Math.random() * 101);
console.log(randomFloor1);

// ! методы shift(), unshift() для работы с массивами
// мутирующие методы для работы с началом массива

let planets = ["Mars", "Venus", "Earth", "Saturn"];

// shift() - удаляет первый элемент из массива
// возвращенное значение - удаленный элемент

planets.shift();

console.log("planets, но мез Марса ===>>  ", planets);

// unshift() - добавляет новый элемент в начало массива
// возвращенное значение - длина измененного массива

// добавляем меркурий, а длину нового массива кладем в переменную newPlanetsLength
let newPlanetsLength = planets.unshift("Mercury")

console.log('возвращенное значение unshift', newPlanetsLength);

console.log("planets, но с Меркурием ===>>  ", planets);

// ! строчка снизу распространенная ошибка
// ! при записи результата мутирующих методов добавления и удаления в новую переменную мы не получаем новый массив
// let newPlanets = planets.push('Jupiter')
// ! в newPlanets будет длина нового массива

console.log(planets)
