const a = parseInt(prompt('Enter your number a'));
const b = parseInt(prompt('Enter your number b'));
const c = parseInt(prompt('Enter your number c'));

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
  alert('Invalid input data');
} else {
  const four = 4;
  const two = 2;
  const d = b * b - four * a * c;
  let x1, x2, x;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (two * a);
    x2 = (-b - Math.sqrt(d)) / (two * a);
    alert(`x1 = ${x1} and x2 = ${x2}`);
  } else if (d === 0) {
    x = -(b / (two * a));
    alert('x = ' + x);
  } else {
    alert('No solution')
  }
}
