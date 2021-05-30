import { support, personLang, setLang } from '../..';

export default function localization() {
  const { lsGet, lsSet } = support;
  const lang = document.querySelector('#lang');
  const { personIpt, personTxt, modalIpt, modalTxt, modalClearTxt } = personLang();

  if (!lsGet('lang')) lsSet('lang', 'en');
  lang.value = lsGet('lang');

  lang.addEventListener('change', (e) => {
    lsSet('lang', e.target.value);
    setLang(personTxt, personIpt);
    setLang(modalTxt, modalIpt);
    setLang(modalClearTxt);
  });
}

