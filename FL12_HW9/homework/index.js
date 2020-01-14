//task1
function convert() {  
  let resultArr = [];
  
  for (let i = 0; i < arguments.length; i++) {

    if (typeof arguments[i] === 'string'){
      resultArr.push(parseInt(arguments[i])); 
    } else {
      resultArr.push(arguments[i] + '');
    }

  }
  return resultArr;
}
//task2
function executeforEach(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    fun(arr[i]);
  }
}

//task3
function mapArray(arr, func) {
  let resultArray = [];

  executeforEach(arr, function (item) {
    resultArray.push(func(parseInt(item)));
  });

  return resultArray;
}

//task4
function filterArray(arr, fun) {
  let resultArray = [];

  executeforEach(arr, function (item) {
    if (fun(item)) {
      resultArray.push(item);
    }
  });

  return resultArray;
}

//task5
function flipOver(str) {
  let reverseString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }

  return reverseString;
}

//task6
function makeListFromRange([start, end]) {
  let arr = [];
  
  for (let i = start; i <=end; i++){
    arr.push(i);
  }

  return arr;
} 

//task7
function getArrayOfKeys(arr, name) {
  let array = [];
  
  executeforEach(arr, function (item) {
    array.push(item[name]);
  });
  
  return array;  
}


//task8
function substitute(arr) {
  let newArr = [];

  mapArray(arr, function(item) {
    let num = 30;
    if(item > num) {
      newArr.push(item)
    } else {
      newArr.push('*')
    }
  });
  return newArr;
}

//task9
function getPastDay(date, day) {  
  const dayAmountMillisec = 86400000;

  let dateMillisec = date.getTime();  
  let dayMillisec = day * dayAmountMillisec;
  let dataDifference = new Date(dateMillisec - dayMillisec);

  return dataDifference.getDate();  
}

//task10
function formatDate(date) {  
  if (!date) {         
    let today = new Date();
    let time = today.toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit' });
    
    return `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()} ${time}`
  }
  let time = date.toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit' });  
  
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${time}`;
}