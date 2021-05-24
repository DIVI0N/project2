import { support } from '..';

export const personPage = document.getElementById('person-page');
export const authPage = document.getElementById('auth-page');


export const changeTheme = () => {
  const { lsGet } = support;
  let theme = lsGet('data-theme');
  document.documentElement.setAttribute('data-theme', theme);
};

export default function theme() {
  const { lsGet, lsSet, qs } = support;
  const select = qs('#theme');
  const theme = lsGet('data-theme') ?? lsSet('data-theme', select.value);
  select.value = theme;

  select.addEventListener('change', (e) => {
   lsSet('data-theme', e.target.value);
   changeTheme();
  });
}
