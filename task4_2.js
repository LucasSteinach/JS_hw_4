const { randomInt } = require('crypto');
const fs = require('fs');
const rightAnswer = randomInt(1000);

let attemptNumber = 0
console.log('Игра "Угадай число"')

fs.writeFile('log.txt', '', (error) => {
    if (error) {console.log('Ошибка при добавлении данных в файл')}
})

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});
let data;

function getAttempt() {
    attemptNumber ++;
    rl.question(`Попытка №${attemptNumber}: `, (input) => {
        if (parseInt(input) == rightAnswer) {
            data = `Поздравляем! ${input} это правильный ответ. Общее кол-во попыток: ${attemptNumber}`
            console.log(data)
            fs.appendFile('log.txt', data, (error) => {
                if (error) {console.log('Ошибка при добавлении данных в файл')}
            })
            rl.close();
        } else if (rightAnswer < parseInt(input)) {
            console.log('Меньше');
            data = `Попытка №${attemptNumber}: ${input} -> Меньше\n`
            fs.appendFile('log.txt', data, (error) => {
                if (error) {console.log('Ошибка при добавлении данных в файл')}
            })
            getAttempt(); 
        } else {
            console.log('Больше');
            data = `Попытка №${attemptNumber}: ${input} -> Больше\n`
            fs.appendFile('log.txt', data, (error) => {
                if (error) {console.log('Ошибка при добавлении данных в файл')}
            })
            getAttempt();
        }
    });
  }

getAttempt()