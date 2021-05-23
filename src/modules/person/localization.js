import { support, personLang } from '..';

export default function localization() {
  const { lsGet, lsSet, qs } = support;
  const lang = qs('#lang');
  const { personIpt, personTxt, modalIpt, modalTxt } = personLang();

  if (!lsGet('lang')) lsSet('lang', 'en');
  lang.value = lsGet('lang');

  lang.addEventListener('change', (e) => {
    lsSet('lang', e.target.value);
    setLang(personTxt, personIpt);
    setLang(modalTxt, modalIpt);
  });
}

export const setLang = (txt, ipt) => {
  const lang = support.lsGet('lang');
  for (const key in txt) {
    document.getElementById(key).textContent = txt[key][lang];
  }
  for (const key in ipt) {
    document.getElementById(key).setAttribute('placeholder', ipt[key][lang]);
  }
};