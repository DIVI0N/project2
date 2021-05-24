import { support } from '../..';

export const setLang = (txt, ipt) => {
  const lang = support.lsGet('lang');
  for (const key in txt) {
    document.getElementById(key).textContent = txt[key][lang];
  }
  for (const key in ipt) {
    document.getElementById(key).setAttribute('placeholder', ipt[key][lang]);
  }
};