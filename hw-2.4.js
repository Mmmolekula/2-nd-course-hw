let i = 0;
while (i < 2) {
    console.log ('Привет!');
    i++;
}

let j = 1;
while (j <= 5) {
    console.log (j);
    j++;
}

let k = 7;
while (k <= 22) {
    console.log (k);
    k++;
}

let obj = {
    'Коля':'200',
    'Вася':'300',
    'Петя':'400'
};
for (let name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов`)
}

let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log (n);
console.log (num);

let firstFriday = 5;
for (let f = firstFriday; f <= 31; f += 7) {
    console.log (`Сегодня пятница, ${f}-е число. Необходимо подготовить отчет`);
}
