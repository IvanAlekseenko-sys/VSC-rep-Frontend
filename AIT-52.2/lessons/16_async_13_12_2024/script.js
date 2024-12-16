console.log("Start");
//! function - regular (именная, безымянная эта безымянная)
//1. Можем вызвать функцию как до определения значения функции, так и после
//2. Синтаксис
//3. this (ведет на объект, у которого выполняется действие)
//!Arrow function - стрелочная функция 
 // 1. Можем вызвать функцию только после определения значения функции
 // 2. Синтаксис
 // 3. this не работает!
setTimeout(function () {
  console.log(5);
}, 7000);

console.log("Finish");


//это именная функция
function giveFiveAfterSevenSeconds() {
    setTimeout(function () {
        return 5;
      }, 7000);

}
let res = giveFiveAfterSevenSeconds();
console.log(res)

const promise = new Promise(function (resolve, reject) {
    //!Arrow function - стрелочная функция
    //setTimeout (() => resolve(5), 7000)
    setTimeOut (() => reject(10), 8000);

})
promise
       .then((value) => console.log (value))
       .catch((err) => console.log(err))
       .finally(() => console.log("End"));
