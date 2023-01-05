//Разбить по цифрам пятизначное число и вывести в исходном порядке через пробел.

/*let number = '12345';
if (number && number.length > 1) {
    number = number
    .toString()
    .split(/(\d)/)
    .join(' ')
} console.log(number)*/

let number = 12345;
console.log( number.toString().split(/(\d)/).join(' ').trim() )