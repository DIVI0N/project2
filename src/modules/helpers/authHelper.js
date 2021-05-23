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
  showErr = (msg) => {
    const errorMsg = document.querySelector('.error');
    errorMsg.textContent = msg;
    errorMsg.classList.add('error-visible');
    setTimeout(() => errorMsg.classList.remove('error-visible'), 4000);
  }
}


export default AuthHelper;