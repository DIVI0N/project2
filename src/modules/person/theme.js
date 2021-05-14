import { support } from '..';

export default function theme() {
  const { lsGet, lsSet, qs } = support;

  const select = qs('#theme');
  const theme = lsGet('theme') ??
    lsSet('theme', select.value);

  select.value = theme;


  select.addEventListener('change', (e) => {
    lsSet('theme', e.target.value);
    if (lsGet('theme') === 'dark') {
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