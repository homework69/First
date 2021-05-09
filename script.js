do {
    var num = +prompt('Введите число')
} while (isNaN(num) || num == 0);


var stp = +prompt('Введите степень')
var answer = 1;

for (let i = 0; i < stp; i++) {
    answer = answer * num
} alert('Степень = ' + answer)

