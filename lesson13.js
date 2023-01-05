//Получить от пользователя 3 строки и вывести их в любом порядке одной командой (конкатенация);

let checkData = function(string) {
    if (string === null) {
        alert('Вы отменили ввод данных') 
       return null;
    } 
    string = string.trim();
    if (!string) {
        alert('Вы не ввели данные') 
       return false;
    } 
    if (Number(string)) {
        alert('Введите текстовые данные')
        return false;
    }
    if (string && string.length < 2) {
        alert('Вы ввели слишком мало символов')
        return false
    }
    return true;
}

let fullName = '';

let person = { 
    firstName: prompt('Enter your first name'),
    lastName: prompt('Enter your last name'),
    proffesion: prompt('Enter your proffesion')
}
for (let i in person) {
    if (checkData(person[i]) === null) {
        alert('Не введены данные ' + i )
        continue;
    }
    if (checkData(person[i]) === false) {
        alert('Ошибка значения ' + i )
        continue;
    }
    fullName += person[i] + ' ';
}
fullName = fullName.trim();
alert(fullName)








