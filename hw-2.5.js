function findMin (a, b) {
    if (a < b) {
        console.log (a)
    } else {
        console.log (b)
    }
};
findMin (8, 4);

function checkParity (num) {
    if (num % 2 === 0) {
        return "Число чётное";
    } else {
        return "Число нечётное";
    }
};
checkParity(9);

function NumberInSquare (x) {
    console.log (x * x);
};
NumberInSquare(5);

function NumberInSquare2 (y) {
    return y * y;
};
NumberInSquare2(7);

function meetUser () {
    let age = prompt("Сколько Вам лет?");
    if (age < 0) {
        console.log("Вы ввели неправильное значение");
    } else if (age <= 12) {
        console.log("Привет, друг!");        
    } else {
        console.log("Добро пожаловать!");
    }
}

function fewNumbers (f, e) {
    if (isNaN(f) || isNaN(e)) {
        return 'Одно или оба значения не являются числом';        
    } else {
        return f * e
    }
};

function NumbersInCube () {
    let num = prompt("Введите число");
    num = Number(num);
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${num} в кубе равняется ${num ** 3}`;
    }
};
console.log(NumbersInCube);

const circle1 = {
    radius: 5,
    getArea:getArea,
    getPerimetr: getPerimetr,
};
const circle2 = {
    radius: 10,
    getArea: getArea,
    getPerimetr: getPerimetr,
};
function getArea () {
    return Math.PI * this.radius * this.radius;
}
function getPerimetr () {
    return 2 * Math.PI * this.radius;
};

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
// console.log (getSeason(prompt("Введите номер месяца:")));


