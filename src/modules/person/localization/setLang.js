import { support } from '../..';

export const setLang = (txt, ipt) => {
  let lang = support.lsGet('lang');
  if (!lang) {
    lang = 'en';
  }
  for (const key in txt) {
    document.getElementById(key).textContent = txt[key][lang];
  }
  for (const key in ipt) {
    document.getElementById(key).setAttribute('placeholder', ipt[key][lang]);
  }
  const select = document.getElementById('theme');
  lang === 'ru'
    ? select.classList.add('two__navigation-theme--lang-ru')
    : select.classList.remove('two__navigation-theme--lang-ru');
};