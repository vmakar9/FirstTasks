function countBalance(str){
    let balance = 0; let numberStarted = false; let currentNumber = '';

    for (let i = 0; i < str.length; i++) { const charCode = str.charCodeAt(i);

        if (charCode >= 48 && charCode <= 57) {
            numberStarted = true;
            currentNumber += str[i];
        } else {
            if (numberStarted) {
                balance += Number(currentNumber);
                currentNumber = '';
                numberStarted = false;
            }
        }
    }

    return balance;
}

const text = 'My wallet balance is 14690 USDT. I paid 750 USDT for plane tickets and 921 USDT for a flat';

const result = countBalance(text)

console.log(result)