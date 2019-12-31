function isLeapYear(date) {
  const checkedDate = new Date(date);
  const checkedYear = checkedDate.getFullYear();  
  
  if (isNaN(checkedYear)) {
    return 'Invalid Date';
  }

  if (((checkedYear % 4 === 0) && (checkedYear % 100 !== 0)) || (checkedYear % 400 === 0)) {
    return `${checkedYear} is a leap year`;
  } else {
    return `${checkedYear} is not a leap year`;
  }
}
isLeapYear('2020-01-01 00:00:00');
