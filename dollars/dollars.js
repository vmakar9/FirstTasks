function countBalance(message) {
    const balance = {}; // Об'єкт для збереження результатів
    let currentUser = ''; // Змінна для збереження імені поточного користувача
    let isParsingAmount = false; // Флаг для визначення, чи розбираємо суму
    let currentAmount = ''; // Змінна для збереження поточної суми

    for (let i = 0; i < message.length; i++) {
        const char = message[i];

        if (char === '<' && message[i + 1] === '@') {
            // Початок імені користувача
            isParsingAmount = false;
            currentUser = '';
            i += 2; // Пропускаємо "<@"
            while (message[i] !== ' ' && message[i] !== '/') {
                currentUser += String.fromCharCode(message[i].charCodeAt(0) | 32); // Перетворюємо в нижній регістр
                i++;
            }
        } else if (!isParsingAmount && /\d/.test(char)) {
            // Початок суми
            isParsingAmount = true;
            currentAmount = char;
        } else if (isParsingAmount && (/\d/.test(char) || char === '.')) {
            // Продовження суми
            currentAmount += char;
        } else if (isParsingAmount && (char === ' ' || char === '/')) {
            // Закінчення суми
            isParsingAmount = false;
            const amount = currentAmount.match(/[\d.]+/) // Знаходимо числа (включаючи десяткові дроби) у поточному рядку
            if (amount && currentUser) {
                balance[currentUser] = (balance[currentUser] || "$") + amount[0]; // Додаємо суму до балансу поточного користувача
            }
        }
    }

    return balance;
}

const text = 'Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT';
const result = countBalance(text);
console.log(result);