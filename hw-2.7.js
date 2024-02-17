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

const array1 = [52, 53, 49, 77, 21, 32];



// console.log(array1Math.min());
// console.log(Math.max());
