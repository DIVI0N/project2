import { support } from '../..';
import { changeData } from './changeData';
import { closeModal, hidePass } from './settingHelpers';

export default function setting() {
  const { qs } = support;
  const modal = qs('#myModal');
  const btn = qs('#myBtn');
  const span = qs('.close');
  const cancel = qs('#cancel');

  const loginInput = qs('#changeLoginIpt');
  const passwordInput = qs('#changePasswordIpt');
  const passwordRepeat = qs('#changeRepeatIpt');
  const change = qs('#change');

  hidePass(passwordInput, passwordRepeat);

  closeModal(btn, modal, 'block');
  closeModal(span, modal);
  closeModal(cancel, modal);
  // changeData();
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  change.addEventListener('click', () => {
    changeData(loginInput.value, passwordInput.value, passwordRepeat.value);
  });
}


