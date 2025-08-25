const refs = {
  form: document.querySelector('form.login-form'),
};

const userAuthorization = event => {
  event.preventDefault();

  const { email, password } = event.target.elements;

  const userData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  if (userData.email == '' || userData.password == '') {
    return alert('All form fields must be filled in');
  }

  console.log(userData);
  event.target.reset();
};

refs.form.addEventListener('submit', e => userAuthorization(e));
