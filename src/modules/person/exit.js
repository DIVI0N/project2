export default function exit() {
  const exit = document.querySelector('#exit');
  exit.addEventListener('click', () => {
    localStorage.removeItem('token');
  });
}