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

console.log(Math.floor(Math.random() * 10) + 1);

function getRandomArrNumbers(nn) {
    let result = [];
    for (let t = 0; t < nn/2; t++) {
        result.push(Math.floor(Math.random() * nn));
    }
    return result;
};

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

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
