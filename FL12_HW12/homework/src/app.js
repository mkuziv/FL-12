const rootNode = document.querySelector('#root');

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const addButton = document.createElement('button');
addButton.className = 'add-button';
addButton.textContent = 'Add new set';

const main = document.createElement('div');
main.className = 'main-page';

const mainHeader = document.createElement('h1');
mainHeader.className = 'main-header';
mainHeader.textContent = 'List of set';

const emptyList = document.createElement('p');
emptyList.className = 'empty-list';
emptyList.textContent = 'List of set is empty';

const setList = document.createElement('ul');
setList.className = 'list-of-set';

let amount = 0;
const zero = 0;

rootNode.appendChild(addButton);
rootNode.appendChild(wrapper);

wrapper.appendChild(main);
main.appendChild(mainHeader);
main.appendChild(emptyList);
main.appendChild(setList);
window.location.hash = '#main';

const addSet = document.createElement('div');
addSet.className = 'add-set';

const addSetHeader = document.createElement('h1');
addSetHeader.className = 'add-set-header';

const addNameInput = document.createElement('input');
addNameInput.className = 'add-name-input';

const addSetButBlock =document.createElement('div');
addSetButBlock.className = 'add-set-but-block';

const addTermsButton = document.createElement('button');
addTermsButton.className = 'add-term';
addTermsButton.textContent = 'Add Term';

const saveButton = document.createElement('button');
saveButton.className = 'save';
saveButton.textContent = 'Save changes';

const cancelButton = document.createElement('button');
cancelButton.className = 'cancel';
cancelButton.textContent = 'Cancel';

wrapper.appendChild(addSet);
addSet.appendChild(addSetHeader);
addSet.appendChild(addNameInput);
addSet.appendChild(addSetButBlock);
addSetButBlock.appendChild(addTermsButton);
addSetButBlock.appendChild(cancelButton);
addSetButBlock.appendChild(saveButton);


addButton.addEventListener('click', () => {

  main.style.display = 'none';
  addSet.style.display = 'flex';
  addSetHeader.textContent = 'Add new set';  
  window.location.hash = '#/add';

});
function cancel() {
  main.style.display = 'flex';
  addSet.style.display = 'none';
}
cancelButton.addEventListener('click', () => {
  cancel();
});


saveButton.addEventListener('click', () => {
  
  window.location.hash = '#main';
  main.style.display = 'flex';
  addSet.style.display = 'none';
  emptyList.style.display = 'none';

  amount++;

  const setNameRow = document.createElement('li');
  setNameRow.className = 'set-row';

  const setNameText = document.createElement('h2');
  setNameText.className = 'todo-list-text';
  setNameText.style.cursor = 'pointer';
  setNameText.textContent = addNameInput.value;

  const setListEdit = document.createElement('span');
  setListEdit.className = 'set-edit';
  setListEdit.style.cursor = 'pointer';
  setListEdit.textContent = 'Edit';

  
  const setListDel = document.createElement('span');
  setListDel.className = 'todo-list-img-del';
  setListDel.style.cursor = 'pointer';
  setListDel.textContent = 'X';

  let done;

  setList.appendChild(setNameRow);
  setNameRow.appendChild(setListEdit);
  setNameRow.appendChild(setNameText);
  setNameRow.appendChild(setListDel);


  setNameText.addEventListener('click', () => {    
    
    setList.appendChild(setNameRow);
    setNameText.style.background = 'gray';
    done = true;
    
  });  
  
  setListDel.addEventListener('click', () => {

    setNameRow.remove();
    amount--;
    if(amount === zero){
      emptyList.style.display = 'block';
    }
  });

  if (setNameText.textContent === ''){
    setNameRow.remove();
    amount--;
  } 

  setListEdit.addEventListener('click', () => {    
    
    main.style.display = 'none';
    addSet.style.display = 'flex';
    addSetHeader.textContent = 'Modify set';  
    window.location.hash = '#/modify';

    addTermsButton.style.display = 'none';

    cancelButton.addEventListener('click', () => {
      cancel();
    });
    saveButton.addEventListener('click', () => {
      setNameText.textContent = addNameInput.value;

      setNameRow.remove();
      
      window.location.hash = '#main';
      main.style.display = 'flex';
      addSet.style.display = 'none';
      emptyList.style.display = 'none';
      addTermsButton.style.display = 'block';
      
    })

  });

  setList.style.display ='block';  
  addNameInput.value = '';
  if(amount === zero){
    emptyList.style.display = 'block';
  }
});
