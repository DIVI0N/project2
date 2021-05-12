export default function theme() {
  const select = document.querySelector('#theme');
  const theme = localStorage.getItem('theme') ??
    localStorage.setItem('theme', select.value);

  select.value = theme;


  select.addEventListener('change', (e) => {
    localStorage.setItem('theme', e.target.value);
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('.two').style.background = 'rgba(0, 0, 0, 0.85)';
    }
    else {
      document.querySelector('.two').style.background = '#F8F8F8';
      const inputs = document.querySelectorAll('input');
      inputs.forEach(el => {

      });
    }
  });
}