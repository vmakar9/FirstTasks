function parseBalance(message){
    let balance = ''; // Змінна для зберігання балансу, початкове значення - порожній рядок.


    for (let i = 0; i < message.length; i++) { // Проходимось по кожному символу у вхідному тексті.
        const charCode = message.charCodeAt(i); // Отримуємо код поточного символу.

        if (charCode >= 48 && charCode <= 57) { // Перевіряємо, чи код символу належить діапазону цифр (від 48 до 57 включно).

            balance += message[i]; // Додаємо поточну цифру до рядка балансу.
        }
    }

    return balance; // Повертаємо рядок, який містить знайдений баланс.

}

const text = 'My wallet balance is 14960 USDT'

console.log(parseBalance(text))