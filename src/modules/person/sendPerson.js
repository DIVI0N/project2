import {
  message,
  support,
  validationReg,
  getFetch,
  PersonHelper,
  getPerson,
  getData,
  url,
} from '..';
import { closeModal } from './setting/settingHelpers';

export default function sendPerson() {
  const { lsGet } = support;
  const lang = lsGet('lang');
  const createPersonBlock = document.querySelector('#createPerson');
  const { wordValidation, changeCreateIpt } = new PersonHelper();

  const body = {
    firstName: '',
    lastName: '',
    age: '',
    city: '',
    phone: '',
    email: '',
    company: '',
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
    } else if (e.target.getAttribute('id') === 'clearAll') {
      const modal = document.getElementById('modalClear');
      modal.style.display = 'block';
      const span = document.getElementById('exit-btn');
      const btn = document.getElementById('clearAll');
      const cancel = document.getElementById('exitBtn');
      const clear = document.getElementById('clearAllBtn');
      closeModal(btn, modal, 'block');
      closeModal(span, modal);
      closeModal(cancel, modal);
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };

      clear.onclick = function (event) {
        const db = lsGet('db');
        getData(`${url.database}/${db}?id=all`, 'DELETE');
        getPerson();
        modal.style.display = 'none';
      };
    }
  });
}
