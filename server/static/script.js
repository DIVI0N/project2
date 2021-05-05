const
  login = document.querySelector('#login'),
  logEmail = document.querySelector('#logEmail'),
  logPassword = document.querySelector('#logPassword'),
  loginBtn = login.querySelector('button'),
  registration = document.querySelector('#registration'),
  regEmail = document.querySelector('#regEmail'),
  regPassword = document.querySelector('#regPassword'),
  regBtn = registration.querySelector('button');


const reset = (e) => e.preventDefault();
login.addEventListener('submit', reset);
registration.addEventListener('submit', reset);

function useFetch(url, method = 'GET', body = null) {
  return fetch(`http://localhost:3000${url}`, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

loginBtn.addEventListener('click', async () => {
  const
    email = logEmail.value,
    password = logPassword.value;

  const body = {
    email, password
  };

  const req = await useFetch('/auth/login', 'POST', JSON.stringify(body));
  const res = await req.json();
  console.log(res);
});

regBtn.addEventListener('click', async () => {
  const
    email = regEmail.value,
    password = regPassword.value;

  const body = {
    email, password
  };

  const req = await useFetch('/auth/registration', 'POST', JSON.stringify(body));
  const res = await req.json();
  console.log(res);
});