//task1
const arr1 = [1, 7, 789, 2, 358, 512, 675, 78, 125, 9, 3];
const maxElement = arr =>  Math.max(...arr);
console.log(maxElement(arr1));

//task2
const arr2 = [1, 2, 3];
const copyArray = arr => [...arr];
console.log(copyArray(arr2));

//task3
const addUniqueId = (obj) => {return {id: Symbol(), ...obj};};
console.log(addUniqueId({name: 123}));
//task4
const obj = {name: 'Someone', details: {id: 1, age:11, university: 'Uni'}}
const regroupObject = (obj) => {
  let {name, details: {id, age, university} } = obj;
  return newObj = {university: university, user: {age: age, firstName :name, id: id }}
}
console.log(regroupObject(obj));

//task5
const arr5 = [1, 7 ,1, 2, 3, 5, 5, 78, 78, 5, 9, 3];
const findUniqElements = (arr) => {
  return Array.from(new Set(arr));
}
console.log(findUniqElements(arr5));

//task6
const phoneNumber = '0123456789';
const hideNumber = (str) => str.slice(-4).padStart(str.length, '*');
console.log(hideNumber(phoneNumber));

//task7
const required = () => {
  throw(new Error( "Missing property"));
};
const add = (a = required(), b = required()) => {
  return a + b;
}
console.log(add(1, 7));

//task8
const repositoryName = [];
function fetchJson(url) {
  return fetch(url)
    .then(request => request.text())
    .then(text => JSON.parse(text))
    .catch(error => console.log(`ERROR: ${error.stack}`));
}
fetchJson('https://api.github.com/users/mkuziv/repos')
.then(res => {  
  res.forEach(item => repositoryName.push(item.name));
  console.log(repositoryName);  
});

//task9
const repositoryNameAsync = [];
async function fetchJson(url) {
  try {
    const request = await fetch(url);
    const text = await request.text();
    return JSON.parse(text);
  }
  catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}
fetchJson('https://api.github.com/users/mkuziv/repos').then(res => {
  res.forEach(item => repositoryNameAsync.push(item.name));
  console.log(repositoryNameAsync);
});