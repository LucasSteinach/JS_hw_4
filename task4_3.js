const { randomInt } = require('crypto');
const rightAnswer = randomInt(1000);

const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let attemptNumber = 0
console.log('Игра "Угадай число"')

fs.writeFile('log.txt', '', (error) => {
    if (error) {console.log('Ошибка при добавлении данных в файл')}
})

function getAttempt(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
        resolve(parseInt(answer));
    });
  });
}

async function guessNumber() {
    attemptNumber ++;
    const userAttempt = await getAttempt(`Попытка №${attemptNumber} `);
    if (userAttempt == rightAnswer) {
        data = `Поздравляем! ${userAttempt} это правильный ответ. Общее кол-во попыток: ${attemptNumber}`
        console.log(data)
        fs.appendFile('log.txt', data, (error) => {
            if (error) {console.log('Ошибка при добавлении данных в файл')}
        })
        rl.close();
    } else if (rightAnswer < userAttempt) {
        console.log('Меньше');
        data = `Попытка №${attemptNumber}: ${userAttempt} -> Меньше\n`
        fs.appendFile('log.txt', data, (error) => {
            if (error) {console.log('Ошибка при добавлении данных в файл')}
        })
        guessNumber(); 
    } else {
        console.log('Больше');
        data = `Попытка №${attemptNumber}: ${userAttempt} -> Больше\n`
        fs.appendFile('log.txt', data, (error) => {
            if (error) {console.log('Ошибка при добавлении данных в файл')}
        })
        guessNumber();
    }
}

guessNumber();
