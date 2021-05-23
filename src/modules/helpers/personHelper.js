export default class PersonHelper {
  wordValidation = ({ validStr, value, message }) => {
    if (!validStr.test(value)) {
      const errorMsg = document.querySelector('.error-person');
      errorMsg.textContent = message;
      errorMsg.classList.add('error-person-visible');
      setTimeout(() => errorMsg.classList.remove('error-person-visible'), 4000);
      return false;
    }
    return true;
  }

  changeCreateIpt = (e, body, id) => {
    if (e.target.getAttribute('id') === id) {
      body[id] = e.target.value;
    }
  }
}