const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const todos = [];

  let makeItem = function(options) {    
    let $listItem = $(`<li class="item" data-done="${options.done}" data-id="${options.id}">
      <span class="item-text ${options.status ? "done" : ""}">${options.text}</span>
      <button class="item-remove">Remove</button>    
    </li>`);
    return $listItem;
  };
  
  $add.on( "click", function(event) {
    event.preventDefault();
  
    const newTask = $input.val();
    
    let itemId = todos.reduce((accumulator, current) => {
      if (accumulator < current.id) {
        accumulator = current.id;
      }  
      return accumulator;
    }, 0);

    let listItemCreate = makeItem({text: newTask, done: false, id: ++itemId});

    todos.push({text: `${newTask }`, done: false, id:itemId});

    setTodosLS(todos);
    $list.append(listItemCreate);

    listItemCreate.on("click", function(event) {
      event.preventDefault();

      setDone(listItemCreate);
    });
    
    listItemCreate.children().next().on( "click", function(event) {
      event.preventDefault();      
      delTask(listItemCreate);
      let currentId = parseInt($(this).closest(".item").attr("data-id"), 10);
      let todos = getTodosLS();
      todos = todos.filter(item => item.id !== currentId);
      setTodosLS(todos);
    });
    
    $input.val('');    
  });

  function setDone(options) {
    if(options) {      
      options[0].children[0].classList.add("done");      
    }
  }
  function delTask(options) {
    options.remove()
  }

  function getTodosLS() {
    return JSON.parse(localStorage.todos || "[]");
  }
  
  function setTodosLS(todos) {
    localStorage.todos = JSON.stringify(todos);
  }
  function generateList($list) {
    const todos = getTodosLS(localStorage.todos || "[]");
    $list.innerHTML = ""; 
    
    for (const todo of todos) {
      $list.append(makeItem(todo));  
    } 
  }
  
  $(document).ready(function() {
    generateList($list);
  });