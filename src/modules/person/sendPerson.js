import { message, support, validationReg, getFetch, PersonHelper, getPerson } from '..';

export default function sendPerson() {
  const { qs, lsGet } = support;
  const lang = lsGet('lang');
  const createPersonBlock = qs('#createPerson');
  const dbSelect = 'mysql' || lsGet('db');
  const { wordValidation, changeCreateIpt } = new PersonHelper();

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
  createPersonBlock.addEventListener('click', async (e) => {
    if (e.target.getAttribute('id') === 'create') {
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
      getFetch(`/database/${dbSelect}`, body, 'POST');
      getPerson();
    }
  });
}


