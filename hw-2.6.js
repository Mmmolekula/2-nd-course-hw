const array1 = [1, 5, 4, 10, 0, 3];
for (let value of array1) {
    console.log(value);
if (value === 10) {
    break;
   }
};
// в консоль должны быть выведены 1,5,4,10

const array2 = [1, 5, 4, 10, 0, 3];
const index = array2.indexOf(4);
console.log(index);
// у 4 индекс 2

const array3 = [1, 3, 5, 10, 20];
const string = array3.join(' ');
console.log(string);
// в консоли должны быть выведены эти же числа, но вместо запятой - пробел

let array4 = [ ];
for (let i = 0; i < 3; i++) {
    let newArray = [];
    for (let o = 0; o < 3; o++) {
        newArray.push(1);
    }
    array4.push(newArray);
};
console.log(array4);
// 3 массива с 1, 1, 1

const array5 = [1, 1, 1];
array5.push(2, 2, 2);
console.log(array5);
// будет три 1 и три 2 за едеиницами

const array6 = [9, 8, 7, 'a', 6, 5];
array6.sort((x, y) => x - y).pop();
console.log(array6);
// отсортирует от меньшего к большему и удалит букву а

const array7 = [9, 8, 7, 6, 5];
const guessNumber = Number(prompt('Введите и угадайте имеющееся число от 1 до 10:'));
if (array7.includes(guessNumber)) {
    alert ('Угадал');
    }
    else {
        alert ('Не угадал');
    }

const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

const array8 = [[1, 2, 3,],[4, 5, 6]];
const flatArray8 = array8.flat();
console.log(flatArray8);
// выведет единый массив вместо двух с числами подряд

const array9 = [2, 5, 7, 9];
for (let ii = 0; ii < array9.length - 1; ii++) {
    console.log(array9[ii] + 
        array9[ii + 1]);
}
// 7, 12, 16

function getNumbersInSquare(array10) {
    return array10.map(num => num * num)
};

function getLengthWords(words) {
    return words.map
    (word => word.length);
}

function filterPositive(array11) {
        let result = [];
        for (let iii = 0; iii < array11.length; iii++) {
            if (array11[iii] < 0) {
                result.push(array11[iii]);
            }
        }
        console.log(result);
};
filterPositive([-1, 0, 5, -10, 56]);
// -1, -10
filterPositive([-25, 25, 0, -1000, -2]);
// -25, -1000, -2
