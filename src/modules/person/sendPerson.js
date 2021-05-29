import { message, support, validationReg, getFetch, PersonHelper, getPerson, getData, url } from '..';

export default function sendPerson() {
  const { qs, lsGet } = support;
  const lang = lsGet('lang');
  const createPersonBlock = qs('#createPerson');
  const { wordValidation, changeCreateIpt } = new PersonHelper();

  const body = {
    firstName: '',
    lastName: '',
    age: '',
    city: '',
    phone: '',
    email: '',
    company: ''
  };

  createPersonBlock.addEventListener('input', (e) => {
    for (const key in body) {
      changeCreateIpt(e, body, key);
    }
  });
  createPersonBlock.addEventListener('click', async (e) => {
    if (e.target.getAttribute('id') === 'create') {
      const dbSelect = lsGet('db') || 'mysql';
      for (const key in body) {
        const opt = {
          validStr: validationReg[key],
          value: body[key],
          message: message[key][lang],
        };
        if (key === 'phone' && !body[key]) continue;
        if (!wordValidation(opt)) {
          wordValidation(opt);
          return;
        }
      }
      await getFetch(`/database/${dbSelect}`, body, 'POST');
      await getPerson();
      for (const key in body) {
        document.getElementById(key).value = '';
        body[key] = '';
      }
    }
    else if (e.target.getAttribute('id') === 'clearAll') {
      confirm('Are you sure you want to clear all?');
      const db = lsGet('db');
      await getData(`${url.database}/${db}?id=all`, 'DELETE');
      getPerson();
    }
  });
}