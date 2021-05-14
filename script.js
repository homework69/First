
for (let i = 1; i <= 10; i++) {
    infoAll = {
        name: prompt('Имя'),
        age: +prompt('Возраст')
    }
    console.log(`${i} пользователь:`);
    for (const key in infoAll) {
        console.log(infoAll[key]);
    }
}
