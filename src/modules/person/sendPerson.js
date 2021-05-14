export default function sendPerson() {
  const createPersonBlock = document.querySelector('#createPerson');
  const dbSelect = document.querySelector('#dbSelect');

  const body = {
    firstName: null,
    lastName: null,
    age: null,
    city: null,
    phone: null,
    email: null,
    company: null
  };

  createPersonBlock.addEventListener('input', (e) => {
    for (const key in body) {
      changeCreateIpt(e, body, key);
    }
  });
  createPersonBlock.addEventListener('click', (e) => {
    const word30 = /^[a-zA-ZА-Яа-я]{1,30}$/;
    const word50 = /^[a-zA-ZА-Яа-я]{1,50}$/;
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (!word30.test(login.value)) {
      return showErr(message.invalidLogin);
    }
  });
}

function wordValidation(validStr, value, message) {
  if (!validStr.test(value)) {
    return showErr(message.invalidLogin);
  }
}

function changeCreateIpt(e, body, id) {
  if (e.target.getAttribute('id') === id) {
    body[id] = e.target.value;
  }
}

function validate() {

}