function makeNumber(str) { 
  let result = ''; 
  for (let i = 0; i < str.length; i++) {
    if (str[i].codePointAt() >= 48 && str[i].codePointAt() <= 57) {
      result += str[i];
    }
  }

  if (result === '') {
    return result;
  }
  return result;
}

function countNumbers(num){
  if (num === ''){
    return {};
  }

  let zero = 0, one = 0, two = 0, three = 0, four = 0, five = 0, 
  sicks = 0, seven = 0, eight = 0, nine = 0;
  const obj = {};

  for ( let i = 0; i <= num.length; i++) { 
    switch (num[i]) {
      case '0':
        zero++;
        obj[0] = zero;
        break;
      case '1':
        one++;
        obj[1] = one;
        break;
      case '2':
        two++;
        obj[2] = two;
        break;
      case '3':
        three++;
        obj[3] = three;
        break;
      case '4':
        four++;
        obj[4] = four;
        break;
      case '5':
        five++;
        obj[5] = five;
        break;
      case '6':
        sicks++;
        obj[6] = sicks;
        break;
      case '7':
        seven++;
        obj[7] = seven;
        break;
      case '8':
        eight++;
        obj[8] = eight;
        break;
      case '9':
        nine++;
        obj[9] = nine;
        break;
      default:        
        break;
    }
  } 
  return obj;
}
countNumbers(makeNumber('jdjjka000466588kkkfs662555'));
