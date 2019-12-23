const a = parseInt(prompt('Enter a please'));
const b = parseInt(prompt('Enter b please'));
const c = parseInt(prompt('Enter c please'));

if(isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log('Input values should be ONLY numbers ');
} else if(a <= 0 || b <= 0 || c <= 0 ) {
  console.log('A triangle must have 3 sides with a positive definite length');
}else if (a + b <= c || a + c <= b || c + b <= a ) {
  console.log('Triangle doesn’t exist');
} else if (a === b && a === c && b === c) { 
  console.log('Equilateral triangle');
} else if (a === b || a === c || c === b) {
  console.log('Isosceles triangle');
} else {
  console.log('Scalene triangle');
}
