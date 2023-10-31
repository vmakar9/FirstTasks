function includes(text,matchStr,index=0){
    // Перевірка, чи індекс не виходить за межі тексту
    if (index < 0) {
        index = 0;
    }

    // Перебираємо символи в тексті починаючи з індексу
    for (let i = index; i < text.length; i++) {
        // Перевірка, чи поточний символ співпадає з першим символом пошукового рядка
        if (text[i] === matchStr[0]) {
            let matchFound = true;
            // Перевірка послідовності символів в поточній підстроці
            for (let j = 0; j < matchStr.length; j++) {
                // Якщо символи не співпадають, встановлюємо matchFound в false і виходимо з циклу
                if (text[i + j] !== matchStr[j]) {
                    matchFound = false;
                    break;
                }
            }
            // Якщо matchFound залишився true, це означає збіг пошукового рядка
            if (matchFound) {
                return true;
            }
        }
    }

    // Якщо не знайдено збігу, повертаємо false
    return false;
}

const text ="Its example for search"
const matchStr = "example"
console.log(includes(text,matchStr))
console.log(text.includes(matchStr))