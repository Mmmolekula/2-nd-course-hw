const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((a, b) => a.age - b.age));


const people2 = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
    ];
function isMale(man) {
    return man.gender === 'male';
    }
console.log(filter(people2, isMale))


function isPositive(num) {
    return num > 0;
    };
function filter(array, ruleFunction) {
    const result = [];
    for (let item of array) {
        if (ruleFunction(item)) {
            result.push(item);
        }
    }
    return result;
}
console.log(filter([3, -4, 1, 9], isPositive));


let count = 0;
const interval = setInterval(() => {
    console.log(new Date());
    count = count + 3;
    
    if (count >= 30) {
        clearInterval(interval);
        console.log("30 секунд прошло");
    }
}, 3000);

function delayForSecond1(callback) {
    setTimeout (callback, 1000);
}
delayForSecond1(function () {
  console.log('Привет, Глеб!');
});


function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
			if(cb) { cb(); }
    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));





