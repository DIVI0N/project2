import { support, personLang, setLang } from '../..';

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

