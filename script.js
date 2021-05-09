var num = +prompt('Введите кол-во ступеней')
var sim1 = prompt('Введите отступы')
var sim2 = prompt('Введите конечный символ')
for (let i = 0; i < num; i++) {
    if (i == 0 ){
        sim2 = sim2
    }else{
        sim2 = sim1 + sim2;
    }
    console.log(sim2);
}
