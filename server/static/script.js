
function useFetch(url, method = 'GET', body = null) {
  return fetch(`http://localhost:3000${url}`, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
  });
}

// useFetch('/auth/verify');

// fetch('http://localhost:3000/auth/verify');

// const auth = async () => {

//   const res = await useFetch('/auth/verify');

//   if (!res.ok && window.location.pathname !== '/static/index.html') {
//     window.location.replace('http://127.0.0.1:5500/static/index.html');
//   }
// };

// auth();

// if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
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
loginBtn.addEventListener('click', async () => {
  const
    login = logEmail.value,
    password = logPassword.value;

  const body = {
    login, password
  };

  const req = await useFetch('/auth/login', 'POST', JSON.stringify(body));
  const res = await req.json();
  localStorage.setItem('token', res.token);
  console.log(res);
});

regBtn.addEventListener('click', async () => {
  const
    login = regEmail.value,
    password = regPassword.value;

  const body = {
    login, password
  };

  const req = await useFetch('/auth/registration', 'POST', JSON.stringify(body));
  const res = await req.json();
  console.log(res);
});



