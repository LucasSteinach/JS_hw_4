function getPasswordChecker(password) {
    function checkPassword() {
        const truePassword = 'sief452'
        return password == truePassword ? 'Пароль верный' : 'Пароль неверный'
    }
    return checkPassword()
}

const readline = require('readline');

const rl = readline.createInterface({
     input: process.stdin, 
     output: process.stdout
    });
rl.question('Enter password: ', (input) => {
        console.log(getPasswordChecker(input))
        rl.close();
});


// console.log(getPasswordChecker('2342342'))
// console.log(getPasswordChecker('sief452'))
// console.log(getPasswordChecker('2342'))
// try {
//     console.log(checkPassword())
// } catch (error) {
//     console.log(error)
// }


