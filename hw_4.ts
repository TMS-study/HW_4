//Task 1
/* Пользователь передает через переменную свою фамилию и имя. Выведите приветсвие `Привет <Имя> <Фамилия>` 5 раз используя для каждого варианта разный регистр */

const firstName = 'алина';
const lastName = 'крючкова';
console.log(`Привет ${firstName.toLowerCase()} ${lastName.toLowerCase()}`);
console.log(`Привет ${firstName.toUpperCase()} ${lastName.toUpperCase()}`);
console.log(`Привет ${firstName.toUpperCase()} ${lastName.toLowerCase()}`);
console.log(`Привет ${firstName.toLowerCase()} ${lastName.toUpperCase()}`);
console.log(`Привет ${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1)}`);


//Task 2
/* Дана строка 'я учу typescript!'. Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу', если нет - вывести строку `Данной подстроки нет` */

const str = 'я учу typescript!';
let subStr = 'учу';
if (str.includes(subStr)) {
    console.log(subStr);
}   else {
        console.log('Данной подстроки нет');
};

//Task 3
/* Дана произвольная строка. Реализуйте метод, который принимает позицию символа в строке. Если переданное число больше длины строки, то должно отобразиться сообщение: `Вы вышли за границу строки` */

let str1: string = 'hello world';
let st: number = 12;
if (st >= str1.length) {
    console.log('Вы вышли за границу строки');
}else {
    console.log(str1.charAt(st))
}

//Task 4
/* Дана произвольная строка. Реализуйте метод, который проверяет заканчивается ли предложение точкой или нет. Если оканчивается, вывести предложение - `Данное предложение закончено`, если нет, то `В конце предложения не хватает точки` */

let str2 = 'Привет андрей.';
if(str2.endsWith('.')) {
    console.log('Данное предложение закончено');
}   else {
    console.log('В конце предложения не хватает точки');
}

//Task 5
/* Дана строка 'я учу typescript!'. Вырежите из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice). */

const str3 = 'я учу typescript!';
console.log(str3.slice(0, 1), str3.slice(16));
console.log(str3.substring(0, 1), str3.substring(16));

//Task 6
/* Дана строка 'я учу typescript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.*/

const str4 = 'я учу typescript!';
console.log(str4.split(' '));

//Task 7
/* Дана строка '                я учу typescript!                '. Выведите строку, без начальных и пробелов в конце строки */

const str5 = '                я учу typescript!                ';
console.log(str5.trim());

//Task 8
/* Дано число 8.829734872948. Выведите число с 3 значащами цифрами после точки */

const num1: number = 8.829734872948;
console.log(num1.toFixed(3));

//Task 9
/* Дана произвольное число. Реализовать метод проверяющий является ли это число целочисленным или нет. Если является - вывести его, если нет - округлить до целой части. */

let num2: number = 23.6;
if (Number.isInteger(num2)) {
    console.log(num2);
}   else {
    console.log(Math.round(num2));
}


//Task 10
/* Дано произвольное число с плавающей точкой. Реализовать методы округления данного числа до ближайшего меньшего, большего аргумента и ближайшего целого числа.*/ 

let num3: number = 3.3434;
console.log(Math.floor(num3), Math.ceil(num3), Math.round(num3));

//Task 11
/* Дано произвольное число. Реализовать метод возводящий число в степень. Степень возведения указывается как параметр к методу. */

let num4: number = 3;
console.log(Math.pow(num4, 3));

//Task 12
/* Реализовать метод получения рандомного целочисленного числа в заданном диапазоне. Диапазон задается аргументами фунции */

function showRoundRandom(c: number, d: number) {
    return Math.round(Math.random() * (d - c) + c)
}
console.log(showRoundRandom(3, 10))

//Task 13
/* Реализовать метод получения рандомного числа с плавающей точкой в заданном диапазоне. Диапазон задается аргументами фунции */

function showRandom(e: number, f: number) {
    return Math.random() * (f - e) + e
}
console.log(showRandom(3, 10))

//Task 14
/* Выведите дату сегоднешнего дня в формате: "текущая дата: месяц/год/день. Текущее время часы:минуты:секунды.". Использовать только внутренние методы Date. */

const date: Date = new Date;
console.log(`Текущая дата: ${date.toLocaleDateString()} Текущее время: ${date.toLocaleTimeString()}`);


