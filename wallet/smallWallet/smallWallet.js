function parseBalance(message){
    let balance = ''; // Змінна для зберігання балансу, початкове значення - порожній рядок.
    let balanceStarted = false; // Змінна, що вказує на те, чи почалося зчитування балансу.

    for (let i = 0; i < message.length; i++) { // Проходимось по кожному символу у вхідному тексті.
        const charCode = message.charCodeAt(i); // Отримуємо код поточного символу.

        if (charCode >= 48 && charCode <= 57) { // Перевіряємо, чи код символу належить діапазону цифр (від 48 до 57 включно).
            balanceStarted = true; // Якщо так, встановлюємо прапорець balanceStarted в true, що вказує на початок зчитування балансу.
            balance += message[i]; // Додаємо поточну цифру до рядка балансу.
        } else if (balanceStarted) { // Якщо символ не є цифрою та balanceStarted = true, то завершуємо зчитування балансу.
            break;
        }
    }

    return balance; // Повертаємо рядок, який містить знайдений баланс.

}

const text = 'My wallet balance is 14960 USDT'

console.log(parseBalance(text))