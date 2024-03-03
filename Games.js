function getSeason (month) {
    if (month >= 3 && month <= 5) {
        alert ("Весна");
    } else if (month >= 6 && month <= 8) {
        alert ("Лето");
    } else if (month >= 9 && month <= 11) {
        alert ("Осень");
    } else if (month == 12 || month == 1 || month == 2) {
        alert ("Зима");
    } else {
        alert ("Неизвестное значение");
    }
};

function GuessFruits () {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);
    
    let firstGuess = prompt("Чему равнялся первый элемент массива?").toLowerCase;
    let lastGuess = prompt("Чему равнялся последний элемент массива?").toLowerCase;

    if (firstGuess === fruits[0].toLowerCase && lastGuess === fruits[fruits.length - 1].toLowerCase) {
        alert("Поздравляем! Вы угадали оба слова.");
    } else if (firstGuess === fruits[0].toLowerCase || lastGuess === fruits[fruits.length - 1].toLowerCase) {
        alert("Вы были близки к победе!");
    }
        else {
            alert("Вы ответили неверно и не угадали ни одного слова :( ");
        };
    } 

    