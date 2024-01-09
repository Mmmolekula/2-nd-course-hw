let password = 'flower';
let putPassword = String(prompt('Введите пароль'));
if (password === 'flower') {
    alert('Пароль введен верно')    
} else {
    alert('Пароль введен неверно')
}

let as = 3;
if (as > 0 && as < 10) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

let d = 6, e = 105;
if (e > 100 || d > 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = 12;
switch (key) {
    case 1:
    case 2:
    case 12:
        alert('Зима')
                break;
    case 3:
    case 4:
    case 5:
        alert('Весна')
                break;
    case 6:
    case 7:
    case 8:
        alert('Лето')
                break;
    case 9:
    case 10:
    case 11:
        alert('Осень')
                break;     
    default: alert('Неизвестный номер, проверьте корректность ввода')
}