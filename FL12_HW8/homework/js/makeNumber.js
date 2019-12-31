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
makeNumber('erer384jjjfd123');
