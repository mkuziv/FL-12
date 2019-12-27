let mail = prompt('Enter your email please');
const enoughSymb = 5;
const enoughNew = 6;

if (mail === null || mail === '') {
  alert('Canceled');
} else if (mail.length < enoughSymb) {
  alert(`I don't know any emails having name length less than 5 symbols`);
} else if (mail === 'user@gmail.com' || mail === 'admin@gmail.com') {

  let password = prompt('Enter your password please');
  if (password === null || password === '') {
    alert('Canceled');
  } else if (password === 'UserPass' && mail === 'user@gmail.com' || password === 'AdminPass'
    && mail === 'admin@gmail.com') {

    let changeMail = confirm('Do you want to change your password?');
    if (changeMail === false) {
      alert('You have failed the change.');
    } else {
      password = prompt('Enter your old password please');

      if (password === null || password === '') {
        alert('Canceled');
      } else if (password === 'UserPass' && mail === 'user@gmail.com' || password === 'AdminPass'
        && mail === 'admin@gmail.com') {

        let newPassword = prompt('Enter your new password please');
        if (newPassword.length < enoughNew) {
          alert('It’s too short password. Sorry.');
        } else {

          let newPassword2 = prompt('Enter your 2new password please');
          if (newPassword2 !== newPassword) {
            alert('You wrote the wrong password.');
          } else {
            alert('You have successfully changed your password');
          }
        }
      } else {
        alert('Wrong password');
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert(`I don’t know you`);
}
