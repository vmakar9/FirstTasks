function countEmoji(message, emoji) {
    const emojiCount = {}; // Об'єкт для збереження кількості конкретного emoji для кожного користувача
    let currentUser = ''; // Змінна для збереження поточного користувача
    let isParsingUser = false; // Флаг для визначення, чи розбираємо ім'я користувача

    for (let i = 0; i < message.length; i++) {
        const char = message[i];

        if (char === '<' && message[i + 1] === '@') {
            // Початок імені користувача
            i += 2; // Пропускаємо "<@"
            currentUser = '';
            isParsingUser = true;
            while (message[i] !== ' ' && message[i] !== '/' && message[i] !== '>') {
                currentUser += String.fromCharCode(message[i].charCodeAt(0) | 32); // Перетворюємо в нижній регістр
                i++;
            }
            if (message[i] === '>') {
                isParsingUser = false;
            }
        } else if (isParsingUser && message.substring(i, i + emoji.length) === emoji) {
            // Знайдено emoji
            emojiCount[currentUser] = (emojiCount[currentUser] || 0) + 1;
            i += emoji.length - 1; // Пропускаємо решту символів emoji
        }
    }

    return emojiCount;

}

const text = '<@Kate />:apple: <@Max /> <@lice /> :like: received:apple::apple:';
const result = countEmoji(text, 'apple');
console.log(result);