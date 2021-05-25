import AuthHelper from '../../helpers/authHelper';

export const closeModal = (trigger, elem, display = 'none') => {
  trigger.addEventListener('click', () => {
    elem.style.display = display;
  });
};

export const hidePass = (pass, repeatPass) => {
  const { togglePassword } = new AuthHelper();

  togglePassword(pass);
  togglePassword(repeatPass);
};
