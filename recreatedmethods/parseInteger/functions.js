function parseInteger(str){
    // Таблиця символів '0' до '9' в їхніх ASCII-кодових значеннях
  const zeroCharCode = '0'.charCodeAt(0)
  const nineCharCode = '9'.charCodeAt(0)

  let result = 0;
  let isNegative =false;

  // Перевірка на від'ємність
  if(str[0]=== "-"){
      isNegative = true
  }

  // Перевірка на відсутність знака мінус або плюс
  if (str[0] === '-' || str[0] === '+'){
     str = str.slice(1)
  }

  for(let i =0; i<str.length;i++){
      const char = str[i].charCodeAt(0)


      
      // Перевірка, чи символ є цифрою
      if(char >= zeroCharCode && char <= nineCharCode){
          const digitValue = char - zeroCharCode;
          result = result * 10 + digitValue
      }else {
          if( i===0){
              return NaN
          }
         break
      }
  }

  if(isNegative){
      result = -result
  }

  return result;

}


console.log(parseInteger("42"))
console.log(parseInteger("-123"))
console.log(parseInteger("abc123"))
console.log(parseInteger("123abc"))
console.log(parseInteger("123.45"))
