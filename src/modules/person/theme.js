import { support } from '..';

export const personPage = document.getElementById('person-page');
export const authPage = document.getElementById('auth-page');

export const changeTheme = () => {
  const { lsGet } = support;
  let theme = lsGet('data-theme');
  document.documentElement.setAttribute('data-theme', theme);

  let lang = support.lsGet('lang');
  const select = document.getElementById('theme');
  lang === 'ru'
    ? select.classList.add('two__navigation-theme--lang-ru')
    : select.classList.remove('two__navigation-theme--lang-ru');
};

export default function theme() {
  const { lsGet, lsSet, qs } = support;
  const select = qs('#theme');
  if (!lsGet('data-theme')) {
    lsSet('data-theme', select.value);
  }
  select.value = lsGet('data-theme');

  select.addEventListener('change', (e) => {
    lsSet('data-theme', e.target.value);
    changeTheme();
  });
}
