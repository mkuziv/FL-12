const userList = document.querySelector('.user-list');
const loader = document.querySelector('.loader');

fetch('https://jsonplaceholder.typicode.com/users')
.then(result => result.json())
.then((data) => {
  loader.classList.toggle('hidden');
  console.log(data  )
  data.forEach(user => {
    let userName = document.createElement('li');
    userName.className = 'user-name';
    userName.setAttribute('user-id', user.id); 

    userName.innerHTML = `
    <span class="user">${user.name}</span>
    <a class="edit btn">Edit</a>
    <a class="remove btn"  user-id ="${user.id}">Remove</a>
    `;
    
    userList.appendChild(userName);  
  });  
  
  const removeBtn = document.querySelectorAll('.remove');

  removeBtn.forEach(item => {
    item.addEventListener('click', function() {
      deleteUser(parseInt(item.parentElement.getAttribute('user-id')));
    });
  });
  const editBtn = document.querySelectorAll('.edit'); 

  editBtn.forEach(item => {
    item.addEventListener('click', function() {
      showForm(parseInt(item.parentElement.getAttribute('user-id')));
    });
  });

});

function deleteUser(userId) {
  loader.classList.toggle('hidden');
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: 'delete',
  })
  .then(response => response.json())
  .then(data => {
    document.querySelector(`li[user-id="${userId}"]`).remove();
    loader.classList.toggle('hidden');
  });
}

function showForm(userId) {
  loader.classList.toggle('hidden');
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(user) {
      loader.classList.toggle('hidden');     
      let form = document.querySelector('.edit-form');
      form.style.display = 'block';

      form.querySelector("#name").value = user.name;
      form.querySelector("#username").value = user.username;
      form.querySelector("#phone").value = user.phone;
      form.querySelector("#website").value = user.website;
      form.querySelector("#email").value = user.email;

      const userName = document.querySelector(`[user-id="${userId}"]`)
      userName.appendChild(form);
      cancel(userName);      
      save(userName);    
    });
}

function cancel(userName) {
  const cancelBtn = userName.querySelector('.cancel');

  cancelBtn.addEventListener('click', function() {
    document.querySelector('form').remove();
  });
}

function save(userName) {
  const saveBtn = userName.querySelector('.save');
  
  saveBtn.addEventListener('click', function() {
    const id = userName.getAttribute('user-id');

    const form = userName.querySelector('form');
    
    const data = {
      name: form.name.value,
      username: form.username.value,
      phone: form.phone.value,
      email: form.email.value,
      website: form.website.value
    };
    loader.classList.toggle('hidden');
    
    fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    .then(response => response.json())
    .then(user => {
      loader.classList.toggle('hidden');
      userName.querySelector('form').remove();
      userName.querySelector('span').innerHTML = user.name;
    });
  });
}