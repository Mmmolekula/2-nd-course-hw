const word = "Волан де Морт";
console.log(word.toUpperCase());


const setOfWords = (["Кошка", "Кит", "Комар", "Носорог"]);
const startStr = "ко";

setOfWords.forEach((setOfWord) => {
    if (setOfWord.toLowerCase().startsWith(startStr.toLowerCase())) {
        console.log(setOfWord);
    }
});


const newNumber = 32.58884;
console.log(Math.floor(newNumber));
console.log(Math.ceil(newNumber));
console.log(Math.round(newNumber));

const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

function random10 () {
    let result = Math.floor(Math.random() * 10) + 1;
    return result;
}
console.log(random10());


function getRandomArrNumbers(num) {
    let result = [];
// console.log(getRandomArrNumbers(8))
    for (let t = 0; t < num/2; t++) 
        result.push(Math.floor(Math.random() * num));
    return result;
};
console.log(getRandomArrNumbers(8))


function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(randomBetween(2, 5));

// ХЬЮСТОН, У НАС ПРОБЛЕМЫ!
// ХЬЮСТОН! У НАС ПОЛУЧИЛОСЬ!

console.log(new Date());

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

function formatDate(date) {
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда","Суббота"];
    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]} / Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
console.log(formatDate(new Date()));

function GuessFruits () {
let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruits = fruits.sort(() => Math.random() - 0.5);
alert(fruits);
let firstGuess = prompt("Чему равнялся первый элемент массива?");
let lastGuess = prompt("Чему равнялся последний элемент массива?");
if (firstGuess.toLowerCase === fruits[0].toLowerCase && lastGuess.toLowerCase === fruits[fruits.lenght - 1].toLowerCase) {
    alert("Поздравляем! Вы угадали оба слова.");
} else if (firstGuess.toLowerCase === fruits[0].toLowerCase || lastGuess.toLowerCase === fruits[fruits.lenght - 1].toLowerCase) {
    alert("Вы были близки к победе!");
}
    else {
        alert("Вы ответили неверно и не угадали ни одного слова :( ");
    };
}
