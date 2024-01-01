let firstOne = 10;
alert(firstOne);
firstOne = 20;
alert(firstOne);

let iphoneYear = "09.01.2007";
alert (iphoneYear);

let nameJS = "Brendan Eich";
alert(nameJS);


let aa = 10, bb = 2;
// присвоение переменных можно писать через запятую
alert(aa + bb);
alert(aa - bb);
alert(aa * bb);
alert(aa / bb);

let result = 2**5;
alert(result);

let a = 9, b = 2;
alert(a%b); 

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

const user = {
    name: 'Мария',
    age: 33,
    isAdmin: true
}

user["city of residence"] = "KGN";

user.age = 45;

delete user["city of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

let userName = prompt("Как Вас зовут?");
alert(`Привет, ${userName}!`);

