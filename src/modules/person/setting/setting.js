import { changeData } from './changeData';
import { closeModal, hidePass } from './settingHelpers';

export default function setting() {
  const modal = document.querySelector('#myModal');
  const btn = document.querySelector('#myBtn');
  const span = document.querySelector('.close');
  const cancel = document.querySelector('#cancel');

  const loginInput = document.querySelector('#changeLoginIpt');
  const passwordInput = document.querySelector('#changePasswordIpt');
  const passwordRepeat = document.querySelector('#changeRepeatIpt');
  const change = document.querySelector('#change');

  hidePass(passwordInput, passwordRepeat);

  closeModal(btn, modal, 'block');
  closeModal(span, modal);
  closeModal(cancel, modal);
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  change.addEventListener('click', () => {
    changeData(loginInput.value, passwordInput.value, passwordRepeat.value);
  });
}


