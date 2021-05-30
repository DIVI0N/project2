class AuthHelper {
  togglePassword = (node) => {
    const eye = document.querySelectorAll('.img-password');
    eye.forEach(el => {
      el.addEventListener('click', () => {
        node.type === 'password' ?
          node.type = 'text'
          : node.type = 'password';
      });
    });
  }
  showErr = (msg, isSuccess) => {
    const errorMsg = document.querySelector('.error');
    errorMsg.textContent = msg;
    isSuccess ? errorMsg.classList.add('green') : false;
    errorMsg.classList.add('error-visible');
    setTimeout(() => {
      errorMsg.classList.remove('error-visible');
      isSuccess ? errorMsg.classList.remove('green') : false;
    }, 4000);
  }
}


export default AuthHelper;